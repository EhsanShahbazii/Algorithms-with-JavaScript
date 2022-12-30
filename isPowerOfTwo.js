const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n != 1) {
    // 1
    if (n % 2 != 0) {
      // log(n)
      return false;
    }
    n /= 2; // log(n)
  }

  return true; // 1
};

// T = 1 + log(n) + log(n) + 1 = 2(log(n) + 1)
/*
Best Case: O(1)
Average Case: O(log(n))
Worst Case: O(log(n))
*/


/********** Improved **********/
const isPowerOfTwo = (n) => {
  if (n < 1) { // 1
    return false;
  }

  return (n & (n - 1)) === 0; // 1
};

// T = 1 + 1 = 2
/*
Best Case: O(1)
Average Case: O(1)
Worst Case: O(1)
*/
