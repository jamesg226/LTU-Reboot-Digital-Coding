function percentageCalculator(number,percent){
    var blnValidated = true;
    if(isNaN(number)){
        blnValidated = false;
    }
    if(isNaN(percent)){
        blnValidated = false;
    }
    if(blnValidated){
        var onePercent = number /100;
        var percentValue = onePercent * percent;
        return percentValue;
    } else {
        console.log('Arugment error - both need to be numbers.');
    }
}

var sum = percentageCalculator(50,10);
console.log(sum);
