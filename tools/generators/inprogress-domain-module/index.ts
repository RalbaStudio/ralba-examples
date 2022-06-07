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
import { Schema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const options = normalizeOptions(schema);

  //const libraryRoot = host.root;
  const libraryRoot = schema.module;

  console.log(options, schema);
  generateFiles(
    host, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    schema // config object to replace variable in file templates
  );

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

// // ********************************************************
// // Internal Function
// // ********************************************************

// /**
//  * Generate 'feature' scaffolding: actions, reducer, effects, interfaces, selectors, facade
//  */
// function generateNgrxFilesFromTemplates(options: Schema) {
//   const name = options.name;
//   const moduleDir = path.dirname(options.module);
//   const excludeFacade = (path) => path.match(/^((?!facade).)*$/);

//   const templateSource = apply(
//     url(options.syntax === 'creators' ? './creator-files' : './files'),
//     [
//       !options.facade ? filter(excludeFacade) : noop(),
//       template({ ...options, tmpl: '', ...names(name) }),
//       move(moduleDir),
//     ]
//   );

//   return mergeWith(templateSource);
// }

/**
 * Extract the parent 'directory' for the specified
 */
function normalizeOptions(options: Schema): Schema {
  return {
    ...options,
    directory: names(options.directory).fileName,
  };
}

// export const ngrxGenerator = wrapAngularDevkitSchematic(
//   '@nrwl/angular',
//   'ngrx'
// );
