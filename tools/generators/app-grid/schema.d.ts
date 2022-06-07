export interface Schema {
  app: string;
  project: string;
  name: string;
  prefix: string;
  feature: string;
}

export interface ExtendedSchema extends Schema {
  name: string;
  className: string;
  propertyName: string;
  constantName: string;
  fileName: string;
  nameInSingular: string;
  classNameInSingular: string;
  propertyNameInSingular: string;
  constantNameInSingular: string;
  fileNameInSingular: string;
}
