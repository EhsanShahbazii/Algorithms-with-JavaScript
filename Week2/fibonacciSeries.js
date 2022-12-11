const fibonacci_series = (n) => {
  if (n===1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

/*
Write a JavaScript program to get the first n Fibonacci numbers
*/
