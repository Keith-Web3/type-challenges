// ### Question

// Implement the advanced util type `UnionToIntersection<U>` which combines the union `U` into an intersection. For example:

type UnionToIntersection<U, V = U> = U extends U
  ? U &
      (Exclude<V, U> extends never
        ? unknown
        : UnionToIntersection<Exclude<V, U>>)
  : never

type Union1 = UnionToIntersection<'foo' | 42 | true>

type Union2 = UnionToIntersection<1 | 2 | 3>

type Union3 = UnionToIntersection<(() => 'foo') | ((i: 42) => true)>
