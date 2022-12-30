const gcd = (number1, number2) => {
    if (!number2) {
        return number1;
    }

    return gcd(number2, number1 % number2);
};

/*
Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
*/
