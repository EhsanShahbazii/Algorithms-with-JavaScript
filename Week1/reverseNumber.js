const reverseNumber = (n) => {
  let reverse = 0; // 1
  while (n >= 1) { // 1
    reverse *= 10; // log(n, 10) + 1
    reverse += n % 10; // log(n, 10) + 1
    n = Math.floor(n / 10); // log(n, 10) + 1
  }

  return reverse; // 1
};

// T = 1 + 1 + 3(log(n, 10) + 1) + 1 = 3(log(n, 10) + 2)
/*
Best Case: O(1)
Average Case: O(log(n))
Worst Case: O(log(n))
*/
