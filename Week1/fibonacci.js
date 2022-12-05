const fibonacci = (n) => {
  const series = [1, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 2] + series[i - 1]);
  }

  return series;
};
