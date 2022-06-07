export interface Schema {
  path: string;
  prefix: string;
  components?: string;
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
  // extendedComponents?: ExtendedSchema[];
}
