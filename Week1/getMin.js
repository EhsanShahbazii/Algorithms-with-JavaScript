const getMin = (numbers) => {
  let currentMin = numbers[0]; // 1
  for (const num of numbers) { // 1
    if (num < currentMin) { // n
      currentMin = num;
    }
  }

  return currentMin; // 1
};

// T = 1 + 1 + n + 1 = n + 3
/*
Best Case: O(n)
Average Case: O(n)
Worst Case: O(n)
*/
