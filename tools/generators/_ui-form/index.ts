import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import { normalizeOptions, addExportToIndexTs } from '../utils';

//import { Tree } from '@angular-devkit/schematics';

import { Schema, ExtendedSchema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const options = normalizeOptions<Schema, ExtendedSchema>(schema);

  //const libraryRoot = host.root;
  //const libraryRoot = `libs/${options.app}/web/portal/feature/src/lib/${options.feature}/`;
  const libraryRoot = `${options.app}`;

  generateFiles(
    host, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    options // config object to replace variable in file templates
  );
  addExportToIndexTs(host, options, libraryRoot);

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
