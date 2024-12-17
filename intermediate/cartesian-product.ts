type CartesianProduct<T, U> = T extends T
  ? U extends U
    ? [T, U]
    : never
  : never

type type1 = CartesianProduct<1 | 2, 'a' | 'b'>
// , [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>
type type2 = CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>
//  [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']>
type type3 = CartesianProduct<1 | 2, 'a' | never>
// , [2, 'a'] | [1, 'a'] >
type type4 = CartesianProduct<'a', Function | string>
// , ['a', Function] | ['a', string]>
