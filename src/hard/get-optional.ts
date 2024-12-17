type GetOptional<T> = {
  [K in keyof T as { [O in keyof T as O extends K ? never : O]: T[O] } extends T // could also just use Omit<T, K>
    ? K
    : never]: T[K]
}

type optional1 = GetOptional<{ foo: number; bar?: string }> // expected to be { foo: number }
type optional2 = GetOptional<{ foo: undefined; bar?: undefined }> // expected to be { foo: undefined }

type check = { foo: number; bar?: string } extends { foo: number }
  ? true
  : false
