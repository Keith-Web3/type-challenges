type isAny<T> = [T] extends T ? ([T] extends [{}] ? true : false) : false

type Any1 = isAny<any> // expected to be true
type Any2 = isAny<unknown> // expected to be false
type Any3 = isAny<never> // expected to be false
type Any4 = isAny<string> // expected to be false
type Any5 = isAny<undefined> // expected to be false
