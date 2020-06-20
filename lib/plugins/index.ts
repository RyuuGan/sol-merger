import { ExportPluginCtor } from '../types';
import { ExportPlugin as SPDXLicenseRemovePlugin } from './SPDXLicenseRemovePlugin';

export const plugins: Record<string, ExportPluginCtor | undefined> = {
  SPDXLicenseRemovePlugin,
};
