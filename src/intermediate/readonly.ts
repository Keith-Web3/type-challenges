// Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

//   `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

type MyReadonly2<T, K = ''> = '' extends K
  ? {
      readonly [P in keyof T]: T[P]
    }
  : {
      readonly [P in keyof T as P extends K ? P : never]: T[P]
    } & { [P in keyof T as P extends K ? never : P]: T[P] }

type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}
