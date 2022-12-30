function calculateLcm(number1, number2) {
   if ((typeof number1 !== 'number') || (typeof number2 !== 'number')) 
    return false;
  return (!number1 || !number2) ? 0 : Math.abs((number1 * number2) / calculateGcd(number1, number2));
}

function calculateGcd(number1, number2) {  
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);
  
  while(number2) {
    var temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
}
