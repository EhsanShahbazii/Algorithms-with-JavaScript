Array.prototype.merge_Sort = function () {
  if (this.length <= 1) {
    return this;
  }

  let half = parseInt(this.length / 2);
  let left = this.slice(0, half).merge_Sort();
  let right = this.slice(half, this.length).merge_Sort();
  let merge = function (left, right) {
  var arry = [];
  while (left.length > 0 && right.length > 0) {
    arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return arry.concat(left).concat(right);
  };

  return merge(left, right);
};

/*
Write a merge sort program in JavaScript.
*/
