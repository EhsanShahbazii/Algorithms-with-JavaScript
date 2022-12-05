const isPrime = (n) => {
  for (let i = 3; i <= n / 2; i = i + 2) {
    // 1
    if (n % i == 0) {
      // n/4 - 1
      return false;
    }
  }

  return true; // 1
};

// T = 1 + (n/4 - 1) + 1 = n/4 + 1
/*
Best Case: number 1 or 2 => O(1)
Average Case: O(n)
Worst Case: O(n)
O(n) => Linear Time Complexity
*/
