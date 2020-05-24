import Debug from 'debug';
import path from 'path';
import { ExportPluginCtor, ExportPluginModule } from '../lib/types';
import { Utils } from '../lib/utils';

const info = Debug('sol-merger:info');
const error = Debug('sol-merger:error');

export class PluginLoadError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class PluginsLoader {
  #pluginPaths: string[];
  #npmRoot: string;

  constructor(pluginPaths: string[], npmRoot: string) {
    this.#pluginPaths = pluginPaths;
    this.#npmRoot = npmRoot;
  }

  async getPlugins(): Promise<ExportPluginCtor[]> {
    const result: ExportPluginCtor[] = [];
    for (const pluginPath of this.#pluginPaths) {
      const fullPluginPath = this.getPluginPath(pluginPath);
      if (!fullPluginPath) {
        continue;
      }
      try {
        const plugin = await this.tryLoadPlugin(fullPluginPath);
        result.push(plugin);
      } catch (e) {
        if (e instanceof Error) {
          error(e.message);
        } else {
          error(e);
        }
      }
    }
    return result;
  }

  private getPluginPath(pluginPath: string): string | null {
    if (!this.#npmRoot && !Utils.isRelative(pluginPath)) {
      info(
        `[PluginsLoader] SKIP: Unable to load plugin '${pluginPath}' because npmRoot is not found.`,
      );
      return null;
    }

    if (Utils.isRelative(pluginPath)) {
      return path.join(process.cwd(), pluginPath);
    }
    return path.join(this.#npmRoot, pluginPath);
  }

  private async tryLoadPlugin(modulePath: string): Promise<ExportPluginCtor> {
    const resolvedPath = path.resolve(modulePath);
    const pluginModule: Partial<ExportPluginModule> = await import(
      resolvedPath
    ).catch((e) => {
      throw new PluginLoadError(`Can not import plugin ${resolvedPath}`);
    });
    if (pluginModule.ExportPlugin) {
      return pluginModule.ExportPlugin;
    }
    throw new PluginLoadError(
      `Plugin ${resolvedPath} does not have exported member ExportPlugin`,
    );
  }
}
