const decimals = (number, digit) => {
 if ((typeof number !== 'number') || (typeof digit !== 'number'))
   return false;
  number = parseFloat(number) || 0;
  return number.toFixed(digit);
}
