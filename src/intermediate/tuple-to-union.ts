type TupleToUnion<T> = T extends [infer F, ...infer R]
  ? F | TupleToUnion<R>
  : never

type test = TupleToUnion<[123, '456', true]>
type test2 = TupleToUnion<[123]>
