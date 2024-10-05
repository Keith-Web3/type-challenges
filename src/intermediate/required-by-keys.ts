interface User {
  name?: string
  age?: number
  address?: string
}

type ExtractKeys<T, K extends keyof T = never> = [K] extends [never]
  ? { [P in keyof T]-?: T[P] }
  : { [P in K]-?: T[P] } & { [P in keyof T as P extends K ? never : P]?: T[P] }

type RequiredByKeys<T, K extends keyof T = never> = {
  [P in keyof ExtractKeys<T, K>]: ExtractKeys<T, K>[P]
}

type UserRequiredName = RequiredByKeys<User, 'name'>
