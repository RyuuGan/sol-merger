export interface RegistredImport {
  file: string;
  name: string;
  as: string;
  globalRename: string;
}

export class ImportsRegistry {
  registeredImportStatements: string[] = [];
  registeredImports: RegistredImport[] = [];

  isImportProcessed(importStatement: string): boolean {
    return this.registeredImportStatements.includes(importStatement);
  }

  registerImportStatement(importStatement: string) {
    this.registeredImportStatements.push(importStatement);
  }

  registerImport(i: RegistredImport): void {
    this.registeredImports.push(i);
  }

  getGlobalImports(): RegistredImport[] {
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
