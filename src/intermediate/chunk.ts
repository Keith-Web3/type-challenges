// Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1
type Chunk<
  P extends any[],
  N extends number,
  A extends any[] = []
> = N extends keyof P
  ? N extends A['length']
    ? [A, ...Chunk<P, N>]
    : P extends [infer S, ...infer R]
    ? Chunk<R, N, [...A, S]>
    : [A] extends [[]]
    ? A
    : [A]
  : A

type expChunk1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type expChunk2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type expChunk3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
type expChunk4 = Chunk<[], 1> // expected to be []
type expChunk5 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
type expChunk6 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type expChunk7 = Chunk<[1, 2, 3, 4], 2> // expected to be [[1, 2], [3, 4]]
type expChunk8 = Chunk<[1, 2, 3, 4], 5> // expected to be [[1, 2, 3, 4]]
type expChunk9 = Chunk<[1, true, 2, false], 2> // expected to be [[1], [true], [2], [false]]
