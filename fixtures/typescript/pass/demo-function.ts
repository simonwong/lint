export type FooFunction = (num?: number) => number

export const foo: FooFunction = num => num || 123
