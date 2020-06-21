import { ExportPluginProcessor, ExportPluginCtor, ExportType } from '../types';
import { ExportsAnalyzerResult } from '../exportsAnalyzer';

class SPDXLicenseRemovePlugin implements ExportPluginProcessor {
  name = 'SPDXLicenseRemovePlugin';
  processExport(e: Readonly<ExportsAnalyzerResult>): ExportsAnalyzerResult {
    const SPDX_COMMENT_REGEX = /SPDX-License-Identifier: .+/g;
    if (e.type !== ExportType.comment) {
      return e;
    }
    return {
      ...e,
      body: e.body.replace(SPDX_COMMENT_REGEX, ''),
    };
  }
}

export const ExportPlugin: ExportPluginCtor<SPDXLicenseRemovePlugin> = SPDXLicenseRemovePlugin;
