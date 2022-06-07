import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import uiGrid from '../_ui-grid';
//import { Tree } from '@angular-devkit/schematics';
// import { libraryGenerator, getProjectConfig } from '@nrwl/workspace';
// import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import { Schema, ExtendedSchema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const options = normalizeOptions(schema);

  const libraryRoot = `${options.app}`;

  if (options && options.name)
    uiGrid(host, {
      name: options.name,
      prefix: options.prefix,
      app: libraryRoot,
    });

  generateFiles(
    host, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    options // config object to replace variable in file templates
  );

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

/**
 * Set name version for generating
 */
function normalizeOptions(options: Schema): ExtendedSchema {
  const nameInSingular = names(options.name);
  return {
    ...options,
    ...names(options.name),
    nameInSingular: nameInSingular.name,
    classNameInSingular: nameInSingular.className,
    propertyNameInSingular: nameInSingular.propertyName,
    constantNameInSingular: nameInSingular.constantName,
    fileNameInSingular: nameInSingular.fileName,
  };
}
