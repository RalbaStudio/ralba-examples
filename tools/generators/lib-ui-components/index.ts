import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import uiComponent from '../_ui-component';
import uiModule from '../_ui-module';
import { addExportToIndexTs } from '../utils';

import { Schema, ExtendedSchema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const options = normalizeComponentsOptions(schema);

  //const libraryRoot = host.root;
  const libraryRoot = `${schema.path}/src/lib/features`;

  // generateFiles(
  //   host, // the virtual file system
  //   joinPathFragments(__dirname, './files'), // path to the file templates
  //   libraryRoot, // destination path of the files
  //   options // config object to replace variable in file templates
  // );

  if (schema && schema.components)
    schema.components.split(',').forEach((element) => {
      uiComponent(host, {
        name: element,
        prefix: schema.prefix,
        path: libraryRoot,
      });
      uiModule(host, {
        name: element,
        prefix: schema.prefix,
        path: libraryRoot,
      });
    });

  // addExportToIndexTs(host, options, libraryRoot);

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

function normalizeComponentsOptions(
  options: Schema
): ExtendedSchema[] | undefined {
  let components = undefined;
  if (options.components)
    components = options.components.split(',').map((element) =>
      normalizeOptions({
        name: element,
        prefix: options.prefix,
      })
    );
  return components;
}

/**
 * Set name version for generating
 */
function normalizeOptions(options: {
  name: string;
  prefix: string;
}): ExtendedSchema {
  const nameInSingular = names(options.name);
  return {
    ...options,
    ...names(options.name),
    nameInSingular: nameInSingular.name,
    classNameInSingular: nameInSingular.className,
    propertyNameInSingular: nameInSingular.propertyName,
    constantNameInSingular: nameInSingular.constantName,
    fileNameInSingular: nameInSingular.fileName,
    path: '',
  };
}
