const euclideanDistance = (point1x, point1y, point2x, point2y) => {
  let dx = Math.abs(point2x - point1x),
    dy = Math.abs(point2y - point1y);
  let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return distance;
};
