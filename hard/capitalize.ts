// Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.

interface Letters {
  a: 'A'
  b: 'B'
  c: 'C'
  d: 'D'
  e: 'E'
  f: 'F'
  g: 'G'
  h: 'H'
  i: 'I'
  j: 'J'
  k: 'K'
  l: 'L'
  m: 'M'
  n: 'N'
  o: 'O'
  p: 'P'
  q: 'Q'
  r: 'R'
  s: 'S'
  t: 'T'
  u: 'U'
  v: 'V'
  w: 'W'
  x: 'X'
  y: 'Y'
  z: 'Z'
}
type CapitalizeWords<T extends string> = T extends `${infer F} ${infer R}`
  ? `${F extends `${infer A extends keyof Letters}${infer B}`
      ? `${Letters[A]}${B}`
      : F} ${CapitalizeWords<R>}`
  : T extends `${infer A extends keyof Letters}${infer B}`
  ? `${Letters[A]}${B}`
  : T

type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'

type wjf = keyof Letters
type wjf2 = '$' extends symbol ? 'yes' : 'no'
type capitalized2 = CapitalizeWords<'FOOBAR'>
