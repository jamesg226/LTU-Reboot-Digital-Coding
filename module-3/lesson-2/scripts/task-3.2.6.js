//Shall I wear a coat? with a logical operator (if temp is less than 30 or more than 5)
var temperature = 49;
var season = 'summer';

if ( temperature < 0 ) {
    console.log( 'The temperature is ' + temperature + ', so you should stay inside!');
 } else if ( temperature < 30) {
    console.log( 'The temperature is ' + temperature + ', so you should wear a coat and a hat!');
} else if ( temperature < 50 && season === 'summer' ) {
console.log( 'The temperature is ' + temperature + ', and it is summer so go outside!');
} else {
     console.log( 'Shorts and a T-shirt are just fine!');
}

console.log (temperature);