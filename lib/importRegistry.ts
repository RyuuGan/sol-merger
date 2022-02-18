export interface RegisteredImport {
  file: string;
  name: string;
  as?: string | null;
  globalRename?: string | null;
}

export class ImportsRegistry {
  registeredImportStatements: string[] = [];
  registeredImports: RegisteredImport[] = [];

  isImportProcessed(importStatement?: string): boolean {
    if (!importStatement) {
      return false;
    }
    return this.registeredImportStatements.includes(importStatement);
  }

  registerImportStatement(importStatement: string) {
    this.registeredImportStatements.push(importStatement);
  }

  registerImport(i: RegisteredImport): void {
    this.registeredImports.push(i);
  }

  getGlobalImports(): RegisteredImport[] {
    return this.registeredImports.filter((i) => i.globalRename);
  }

  isImported(filename: string, name: string, as: string | null) {
    return (
      this.registeredImports.find(
        (ri) => ri.file === filename && ri.name === name && ri.as === as,
      ) !== undefined
    );
  }
}
