const average = (...numbers) => {
  let sum = 0; // 1
  for (const num of numbers) { // 1
    sum += num; // n
  }

  return sum / numbers.length; // 1
};

// T = 1 + 1 + n + 1 = n + 3
/*
Best Case: O(1)
Average Case: O(n)
Worst Case: O(n)
*/
