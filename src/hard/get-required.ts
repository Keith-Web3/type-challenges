type GetRequired<T> = {
  [K in keyof T as T extends {
    [O in keyof T as O extends K ? O : never]-?: T[K]
  }
    ? K
    : never]: T[K]
}

type required1 = GetRequired<{ foo: number; bar?: string }> // expected to be { foo: number }
type required2 = GetRequired<{ foo: undefined; bar?: undefined }> // expected to be { foo: undefined }
