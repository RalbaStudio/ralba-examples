import { UtilsSchema } from './feature-schema';
import { UtilsExtendedSchema } from './feature-extended-schema';
import { names } from '@nrwl/devkit';

/**
 * Set name version for generating
 */
export function normalizeOptions<
  T extends UtilsSchema,
  E extends UtilsExtendedSchema
>(options: T): E {
  const nameInSingular = names(options.name);
  return {
    ...options,
    ...names(options.name),
    nameInSingular: nameInSingular.name,
    classNameInSingular: nameInSingular.className,
    propertyNameInSingular: nameInSingular.propertyName,
    constantNameInSingular: nameInSingular.constantName,
    fileNameInSingular: nameInSingular.fileName,
  } as unknown as E;
}
