import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import page from '../app-page';
import { addExportToIndexTs } from '../utils';

import { Schema, ExtendedSchema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const options = normalizeOptions(schema);

  //const libraryRoot = host.root;
  const libraryRoot = `apps/${options.app}/src/app/features/`;
  generateFiles(
    host, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    options // config object to replace variable in file templates
  );

  if (options && options.pages)
    options.pages.split(',').forEach((element) => {
      page(host, {
        name: element,
        prefix: options.prefix,
        app: libraryRoot + options.name,
      });
    });

  addExportToIndexTs(host, options, libraryRoot);

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

/**
 * Set name version for generating
 */
function normalizeOptions(options: Schema): ExtendedSchema {
  let pages = undefined;
  if (options.pages)
    pages = options.pages.split(',').map((element) =>
      normalizeOptions({
        name: element,
        app: options.app,
        prefix: options.prefix,
        pages: undefined,
      })
    );

  const nameInSingular = names(options.name);
  return {
    ...options,
    ...names(options.name),
    nameInSingular: nameInSingular.name,
    classNameInSingular: nameInSingular.className,
    propertyNameInSingular: nameInSingular.propertyName,
    constantNameInSingular: nameInSingular.constantName,
    fileNameInSingular: nameInSingular.fileName,
    ...(pages && { extendedPages: pages }),
  };
}
