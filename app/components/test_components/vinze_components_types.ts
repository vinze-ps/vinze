export interface ICombobox<T extends object> {
  data: T[];
  valueAccessor: keyof T;
}
