const getPalindromicPair = (n1, n2) => {
  let x, y
  let bigNum = 0
  for (let i = n1; i >= 1; i--) {
    for (let j = n2; j >= 1; j--) {
      const num = i * j
      const numString = '' + num
      if (
        numString ===
        numString
          .split('')
          .reverse()
          .join('')
      ) {
        x = i
        y = j
        bigNum = num > bigNum ? num : bigNum
      }
    }
  }
  return bigNum
}

const palindromicNumber = getPalindromicPair(999, 999)
console.log(palindromicNumber)
