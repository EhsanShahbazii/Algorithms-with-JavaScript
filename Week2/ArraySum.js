const array_sum = (my_array) => {
  if (my_array.length === 1) {
    return my_array[0];
  } else {
    return my_array.pop() + array_sum(my_array);
  }
};

/*
Write a JavaScript program to compute the sum of an array of integers. 
*/
