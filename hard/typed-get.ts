type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer A extends keyof T & string}.${infer R}`
  ? Get<T[A], R>
  : never

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  'foo.baz': false
  hello: 'world'
}

type GetA = Get<Data, 'hello'> // 'world'
type GetB = Get<Data, 'foo.bar.count'> // 6
type GetC = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
type GetD = Get<Data, 'foo.baz'> // false
type GetE = Get<Data, 'no.existed'> // never
