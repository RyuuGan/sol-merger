import { ExportsAnalyzerResult } from './exportsAnalyzer';
import { ExportPluginCtor, ExportPluginProcessor } from './types';

export class ExportPluginsRegistry {
  #plugins: ExportPluginProcessor[];
  constructor(plugins: ExportPluginCtor[]) {
    this.#plugins = plugins.map((PluginCtor) => new PluginCtor());
  }

  processExport(
    e: Readonly<ExportsAnalyzerResult>,
  ): ExportsAnalyzerResult | null {
    if (!this.#plugins.length) {
      return e;
    }

    return this.#plugins.reduce(
      (latestExport: ExportsAnalyzerResult | null, plugin) => {
        if (!latestExport) {
          return null;
        }
        return plugin.processExport(latestExport);
      },
      e,
    );
  }

  registerPlugin(plugin: ExportPluginProcessor) {
    this.#plugins.push(plugin);
  }
}
