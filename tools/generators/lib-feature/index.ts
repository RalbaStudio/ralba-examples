import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
//import { Tree } from '@angular-devkit/schematics';
// import { libraryGenerator, getProjectConfig } from '@nrwl/workspace';
// import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import { Schema, ExtendedSchema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const options = normalizeOptions(schema);

  //const libraryRoot = host.root;
  const libraryRoot = `${options.app}`;

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
