type CreateArray<T extends number, K extends any[] = []> = K['length'] extends T
  ? K
  : CreateArray<T, [any, ...K]>

type CreateTriangular<N extends number> = [
  ...CreateArray<N>,
  ...(CreateArray<N> extends [any, ...infer R]
    ? CreateTriangular<R['length']>
    : [])
]
type Triangular<N extends number> = CreateTriangular<N>['length']

type seq1 = Triangular<0>
// [] | [1] | [2] | [1, 2]>

type seq2 = Triangular<1>
//  [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]

type seq3 = Triangular<3>
//  [] |
// [1] | [2] | [3] | [4] | [5] |
// [1, 2] | [1, 3] | [1, 4] | [1, 5] | [2, 3] | [2, 4] | [2, 5] | [3, 4] | [3, 5] | [4, 5] |
// [1, 2, 3] | [1, 2, 4] | [1, 2, 5] | [1, 3, 4] | [1, 3, 5] | [1, 4, 5] | [2, 3, 4] | [2, 3, 5] | [2, 4, 5] | [3, 4, 5] |
// [1, 2, 3, 4] | [1, 2, 3, 5] | [1, 2, 4, 5] | [1, 3, 4, 5] | [2, 3, 4, 5] |
// [1, 2, 3, 4, 5]

type seq4 = Triangular<10>
//  [] | ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['a', 'c'] | ['b', 'c'] | ['a', 'b', 'c']

type seq5 = Triangular<20>
// [] | ['x'] | ['y'] | ['x', 'y']

type myArr = [1, 2, 3, 4, 5]

type B = myArr[number]

type C = B extends B
  ? myArr extends [...infer S, B, ...infer E]
    ? S | E
    : any
  : any
