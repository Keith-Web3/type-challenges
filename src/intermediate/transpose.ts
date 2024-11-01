// type SplitToUnion<T extends any[]> =
type GetN<T extends number[][], N extends number = 0> = T extends [
  infer S extends any[],
  ...infer R extends any[]
]
  ? [S[N], ...GetN<R, N>]
  : T

type Transpose<T extends number[][], K extends any[] = []> = T extends []
  ? []
  : [...K, any]['length'] extends T[0]['length']
  ? [GetN<T, K['length']>]
  : K['length'] extends T[0]['length']
  ? T
  : [GetN<T, K['length']>, ...Transpose<T, [...K, any]>]

type Matrix = Transpose<[[1]]> // expected to be [[1]]
type Matrix1 = Transpose<[[1, 2], [3, 4]]> // expected to be [[1, 3], [2, 4]]
type Matrix2 = Transpose<[[1, 2, 3], [4, 5, 6]]> // expected to be [[1, 4], [2, 5], [3, 6]]
type Matrix3 = Transpose<[]> // expected to be []
