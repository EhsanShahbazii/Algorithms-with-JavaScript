const dec_to_bho  = (n, base) => {
  if (n < 0) {
    n = 0xFFFFFFFF + n + 1;
  } 
  
  switch (base) {  
    case 'B':  
      return parseInt(n, 10).toString(2);
      break;  
    case 'H':  
      return parseInt(n, 10).toString(16);
      break;  
    case 'O':  
      return parseInt(n, 10).toString(8);
      break;  
    default:  
      return("Wrong input.........");  
  }  
}
