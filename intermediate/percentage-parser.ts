type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '856'

type ExtractNumber<T, K extends string = ''> = T extends `${infer F}${infer R}`
  ? [R] extends [never]
    ? K
    : ExtractNumber<R, `${K}${F extends `${number}` ? F : ''}`>
  : K

type PercentageParser<T> = [
  T extends `+${string}` ? '+' : T extends `-${string}` ? '-' : '',
  ExtractNumber<T>,
  T extends `${string}%` ? '%' : ''
]

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]
