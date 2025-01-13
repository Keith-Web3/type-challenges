type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  T extends string,
  M = ControlsMap
> = T extends `${any}%${infer F}${infer L}`
  ? [...(F extends keyof M ? [M[F]] : []), ...ParsePrintFormat<L, Omit<M, F>>]
  : []

type ParsePrint1 = ParsePrintFormat<''> // expected to be []
type ParsePrint2 = ParsePrintFormat<'abc'> // expected to be []
type ParsePrint3 = ParsePrintFormat<'%d'> // expected to be ['dec']
type ParsePrint4 = ParsePrintFormat<'%s'> // expected to be ['string']
type ParsePrint5 = ParsePrintFormat<'%s%d%c'> // expected to be ['string', 'dec', 'char']
type ParsePrint6 = ParsePrintFormat<'Hello, %s w%so%zld!'> // expected to be ['string']
type ParsePrint7 = ParsePrintFormat<'Hello %s: score is %d.'> // expected to be ['string', 'dec']
type ParsePrint8 = ParsePrintFormat<'The result is %%d.'> // expected to be []
