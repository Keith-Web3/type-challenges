type ParseUrlParams<T> = T extends `${string}:${infer P}/${infer R}`
  ? P | ParseUrlParams<R>
  : T extends `${string}:${infer R}`
  ? R
  : never

type a = ParseUrlParams<':id'> // id
type b = ParseUrlParams<'posts/:id'> // id
type c = ParseUrlParams<'posts/:id/:user'> // id | user
