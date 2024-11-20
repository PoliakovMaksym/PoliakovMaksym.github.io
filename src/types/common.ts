export type DeepPartial<TObject> = {
  [TKey in keyof TObject]?: TObject[TKey] extends object
    ? DeepPartial<TObject[TKey]>
    : TObject[TKey];
};
