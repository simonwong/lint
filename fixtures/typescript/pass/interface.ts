export type DemoReturn = {
  c: any
  d: Map<Object, Function>
}

export interface DemoInterFace {
  a: string
  b: () => DemoReturn
}
