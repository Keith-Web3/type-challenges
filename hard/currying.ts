type Currying<R, Arr extends any[]> = Arr[1] extends undefined
  ? () => R
  : (
      a: Arr[1]
    ) => Arr[0] extends [infer A, ...infer B] ? Currying<R, [B, A]> : R

declare function Currying<T, K extends any[], R = undefined>(
  fn: (arg0: R, ...arg1: K) => T
): Currying<T, [K, R]>

const curried1 = Currying((a: string, b: boolean, c: boolean) => true)
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
)
const curried3 = Currying(() => true)
