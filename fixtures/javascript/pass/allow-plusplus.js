// allow plus plus
export const plusFunc = num => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      num++
    }
  }
  return num
}
