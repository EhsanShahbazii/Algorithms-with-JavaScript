const fibonacci = (n) => {
  const series = [1, 1]; // 1
  for (let i = 2; i < n; i++) { // 1
    series.push(series[i - 2] + series[i - 1]); // n - 2
  }

  return series; // 1
};

// T = 1 + 1 + (n -2) + 1 = n + 1
// O(n) => Linear Time Complexity
