function isValidateNumber(number){
    return !isNaN(number);
}
function calculator(number1,number2,operator){
    strMessage = '';
    if(!isValidateNumber(number1)){
        blnValidated = false;
        return 'Argument 1 must be a number';
    }
    if(!isValidateNumber(number2)){
        blnValidated = false;
        return 'Argument 2 must be a number';
    }
    if(operator != '+' && operator != '*' && operator != '-' && operator != '/' && operator != '%'){
        return 'Arugment 3 must be an arithmatic operator';
    }
    var sum;
    switch(operator){
        case '+':
            sum = number1 + number2;
        break;
        case '-':
            sum = number1 - number2;
        break;
        case '*':
            sum = number1 * number2;
        break;
        case '/':
            sum = number1 / number2;
        break;
        case '%':
            sum = number1 % number2;
        break;
    }
    return sum;
}

sum = calculator(20,10,'%')
console.log(sum);