const getInteger = (start_num, end_num) => {
  if (end_num - start_num === 2) {
    return [start_num + 1];
  } else {
    let list = getInteger(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};
