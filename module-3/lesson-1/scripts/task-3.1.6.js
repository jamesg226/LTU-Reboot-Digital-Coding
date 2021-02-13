var billTotal = 46.55;
var onePercent = billTotal / 100;
var tipAmount = 12.5
var tip = onePercent * tipAmount;
tip = tip.toFixed(2);
var total = parseFloat(billTotal) + parseFloat(tip);
total = total.toFixed(2);


var strMessage = 'Your bill was £' + billTotal + ' and you tipped £' + tip + ', taking your ball total to £' + total +'.';

console.log(strMessage);

