//Implement the generic type JSONSchema2TS which will return the TypeScript type corresponding to the given JSON schema.
type MergeIntersection<I> = { [K in keyof I]: I[K] }

type JSONSchema2TS<V> = V extends { enum: infer T extends any[] }
  ? T[number]
  : V extends { type: 'object' }
  ? V extends { properties: infer O }
    ? V extends { required: infer P extends any[] }
      ? MergeIntersection<
          {
            [K in keyof O as K extends P[number] ? K : never]: JSONSchema2TS<
              O[K]
            >
          } & {
            [K in keyof O as K extends P[number] ? never : K]?: JSONSchema2TS<
              O[K]
            >
          }
        >
      : { [K in keyof O]?: JSONSchema2TS<O[K]> }
    : { [Q: string]: unknown }
  : V extends { type: 'array' }
  ? V extends { items: infer I }
    ? JSONSchema2TS<I>[]
    : unknown[]
  : V extends { type: 'boolean' }
  ? boolean
  : V extends { type: 'number' }
  ? number
  : V extends { type: 'string' }
  ? string
  : never

type Type4 = JSONSchema2TS<{
  type: 'string'
  enum: ['a', 'b', 'c']
}>

type Type5 = JSONSchema2TS<{
  type: 'number'
  enum: [1, 2, 3]
}>

type Type12 = JSONSchema2TS<{
  type: 'object'
  properties: {
    a: {
      type: 'string'
      enum: ['a', 'b', 'c']
    }
    b: {
      type: 'number'
    }
  }
}>

type Type13 = JSONSchema2TS<{
  type: 'array'
  items: {
    type: 'object'
    properties: {
      a: {
        type: 'string'
      }
    }
  }
}>

type Type14 = JSONSchema2TS<{
  type: 'object'
  properties: {
    req1: { type: 'string' }
    req2: {
      type: 'object'
      properties: {
        a: {
          type: 'number'
        }
      }
      required: ['a']
    }
    add1: { type: 'string' }
    add2: {
      type: 'array'
      items: {
        type: 'number'
      }
    }
  }
  required: ['req1', 'req2']
}>
