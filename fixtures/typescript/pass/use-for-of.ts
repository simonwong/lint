export const sum = () => {
  const arr: number[] = [1, 2, 3]
  let res = 0

  for (const item of arr) {
    res += item
  }

  return res
}
