const exponent = (a, n) => {
   if (n === 0) {
    return 1;
   } else {
    return a * exponent(a, n-1);
  }
};

/*
Write a JavaScript program to compute the exponent of a number.
*/
