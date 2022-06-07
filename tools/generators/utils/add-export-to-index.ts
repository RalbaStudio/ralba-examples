import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import * as ts from 'typescript';
import * as path from 'path';
import { UtilsExtendedSchema } from './feature-extended-schema';

export function addExportToIndexTs(
  host: Tree,
  options: UtilsExtendedSchema,
  featureRoot: string
) {
  const indexFilePath = path.join(featureRoot, 'index.ts');
  ('');
  const buffer = host.read(indexFilePath);
  if (!!buffer) {
    const indexSource = buffer!.toString('utf-8');
    const exportPath = `export * from './${options.fileName}';`;
    // TODO typescript definition
    //ts.isExportDeclaration(Node)
    if (indexSource.includes(exportPath)) console.log('already exported');
    else host.write(indexFilePath, indexSource + exportPath);
  }
}

// const indexSourceFile = ts.createSourceFile(
//   indexFilePath,
//   indexSource,
//   ts.ScriptTarget.Latest,
//   true
//);

// const buffer = host.read(indexFilePath);
// if (!!buffer) {
//   // AST to 'index.ts' barrel for the public API
//   const indexSource = buffer!.toString('utf-8');
//   const indexSourceFile = ts.createSourceFile(
//     indexFilePath,
//     indexSource,
//     ts.ScriptTarget.Latest,
//     true
//   );

//   // Public API for the feature interfaces, selectors, and facade
//   const { fileName } = names(options.name);

//   new InsertChange(
//     path.join(libraryRoot, '../index.ts'),
//     1,
//     `export * from './${options.feature}';`
//   );

//   // sort changes so that the highest pos goes first
//   const orderedChanges = changes.sort((a, b) => b.order - a.order) as any;

//   const recorder = host.beginUpdate(modulePath);
//   for (const change of orderedChanges) {
//     if (change.type == 'insert') {
//       recorder.insertLeft(change.pos, change.toAdd);
//     } else if (change.type == 'remove') {
//       recorder.remove(change.pos - 1, change.toRemove.length + 1);
//     } else if (change.type == 'replace') {
//       recorder.remove(change.pos, change.oldText.length);
//       recorder.insertLeft(change.pos, change.newText);
//     } else if (change.type === 'noop') {
//       // do nothing
//     } else {
//       throw new Error(`Unexpected Change '${change.constructor.name}'`);
//     }
//   }
//   host.commitUpdate(recorder);
// }
