export type DemoReturn = {
  c: unknown
  d: Map<string, () => void>
}

export interface DemoInterFace {
  a: string
  b: () => DemoReturn
}
