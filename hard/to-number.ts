type ToNumber<S extends string> = S extends `${infer A extends number}`
  ? A
  : never

type ToNumber1 = ToNumber<'3'>
type ToNumber2 = ToNumber<'27'>
type ToNumber3 = ToNumber<'18@7_$%'>
