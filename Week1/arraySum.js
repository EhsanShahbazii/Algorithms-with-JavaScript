/* Write a JavaScript function to calculate the sum of values in an array. */

function sum(input){      
 if (toString.call(input) !== "[object Array]")
    return false;
  
 var total =  0;
 for(var i=0;i<input.length;i++) {                  
    if(isNaN(input[i])){
      continue;
    }
    total += Number(input[i]);
 }
 return total;
}
