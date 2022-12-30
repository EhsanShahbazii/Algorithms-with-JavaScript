const factorial = (number) => { 
  if (number === 0) {
    return 1;
 }
  return number * factorial(number - 1);        
}

/*
Write a JavaScript program to calculate the factorial of a number.
*/
