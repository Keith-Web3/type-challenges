// Given an array of unique elements, return all possible subsequences.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

type Subsequence<T extends any[], K = T[number]> = T extends []
  ? []
  : K extends K
  ?
      | [K, ...Subsequence<T extends [K, ...infer R] ? R : []>]
      | Subsequence<T extends [K, ...infer R] ? R : []>
  : never

type A = Subsequence<[1, 2, 3]> // [] | [1] | [2] | [1, 2]
