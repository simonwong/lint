export const keyStr = () => {
  const obj = {
    a: 1,
    b: 2,
  }
  let res = ''

  for (const key in obj) {
    res += key
  }

  return res
}
