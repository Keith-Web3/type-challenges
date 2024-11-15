type Subsequence<T extends any[], K = T[number]> = T extends []
  ? []
  : K extends K
  ?
      | [K, ...Subsequence<T extends [K, ...infer R] ? R : []>]
      | Subsequence<T extends [K, ...infer R] ? R : []>
  : never

type A = Subsequence<[1, 2, 3]> // [] | [1] | [2] | [1, 2]
