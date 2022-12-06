const isPowerOfTwo = (n) => {
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
Best Case: O(log(n))
Average Case: O(log(n))
Worst Case: O(log(n))
*/
