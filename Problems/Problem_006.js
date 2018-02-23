const getSumSquareDifference = n => {
  const nums = Array.from(Array(n), (_, i) => i + 1)
  const sumOfSquares = nums.reduce(
    (accumulator, currentValue) => accumulator + Math.pow(currentValue, 2),
    0
  )

  const squareOfSums = Math.pow(
    nums.reduce((accumulator, currentValue) => accumulator + currentValue),
    2
  )

  return squareOfSums - sumOfSquares
}

const sumSquareDifference = getSumSquareDifference(100)
console.log(sumSquareDifference)
