type FilterOut<T extends any[], F, A extends any[] = []> = T extends [
  infer S,
  ...infer R
]
  ? [S] extends [F] | [never]
    ? FilterOut<R, F, A>
    : FilterOut<R, F, [...A, S]>
  : A

type FilterOut1 = FilterOut<[], never> // []
type FilterOut2 = FilterOut<[never], never> // []
type FilterOut3 = FilterOut<['a', never], never> // ['a']
type FilterOut4 = FilterOut<[1, never, 'a'], never> // [1, 'a']
type FilterOut5 = FilterOut<[never, 1, 'a', undefined, false, null], never> // [1, 'a', undefined, false, null]
type FilterOut6 = FilterOut<[number | null | undefined, never], never> // [number | null | undefined]
