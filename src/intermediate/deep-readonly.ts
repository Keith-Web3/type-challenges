// Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

//   You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends {}
    ? T[K] extends (...args: any) => any
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K]
}

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        }
      ]
    }
  }
}

type X2 = { a: string } | { b: number }
