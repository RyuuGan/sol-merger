import { assert } from 'chai';
import { ExportPlugin } from '../../lib/plugins/SPDXLicenseRemovePlugin';
import { ExportsAnalyzerResult } from '../../lib/exportsAnalyzer';
import { ExportType } from '../../lib/types';

describe('SPDXLicenseRemovePlugin', () => {
  it('should remove SPDX License from comments', () => {
    const plugin = new ExportPlugin();

    const comment: ExportsAnalyzerResult = {
      type: ExportType.comment,
      abstact: false,
      body: `// SPDX-License-Identifier: MIT `,
      is: '',
      name: 'Test',
    };

    const newExport = plugin.processExport(comment);
    assert.equal(newExport.body, '// ');
  });

  it('should remove multiple SPDX License comments', () => {
    const plugin = new ExportPlugin();

    const comment: ExportsAnalyzerResult = {
      type: ExportType.comment,
      abstact: false,
      body: `/*
        SPDX-License-Identifier: MIT
        SPDX-License-Identifier: EPL-1.0+
        SPDX-License-Identifier: GPL-2.0-only
        SPDX-License-Identifier: Apache-2.0 AND (MIT OR GPL-2.0-only)
      */`,
      is: '',
      name: 'Test',
    };

    const newExport = plugin.processExport(comment);
    assert.match(newExport.body, /\/\*[ \r\n]+\*\//);
  });
});
