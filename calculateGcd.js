function calculateGcd(number1, number2) {
  if ((typeof number1 !== 'number') || (typeof number2 !== 'number')) 
    return false;
  
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);
  
  while(number2) {
    var temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
}

/********** Improved **********/
const calculateGcd = (...arr) => {
  const _gcd = (number1, number2) => (!number2 ? number1 : calculateGcd(number2, number1 % number2));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
