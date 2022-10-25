export const dollarify = (input) => {
  console.log(input)
  const strArr = JSON.stringify(input).split('')
  const cents = strArr.slice(-2)
  const dollars = strArr.slice(0, -2)
  const fullAmount = '$' + dollars.join('') + '.' + cents.join('')
  console.log(fullAmount)
  return fullAmount;

}