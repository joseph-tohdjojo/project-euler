const getSmallestMultiple = upperBound => {
  let flag = true
  let num = upperBound

  while (flag) {
    let gotThroughAll = false
    for (let i = 1; i <= upperBound; i++) {
      gotThroughAll = true
      if (num % i !== 0) {
        num++
        gotThroughAll = false
        break
      }
    }
    if (gotThroughAll) flag = false
  }
  return num
}

const smallestMultiple = getSmallestMultiple(20)
console.log(smallestMultiple)
