//Shall I wear a coat? with a logical operator (if temp is less than 30 or more than 5)
var temperature = 6;

if ( temperature < 0 ) {
    console.log( 'The temperature is ' + temperature + ', so you should stay inside!');
 } else if ( temperature < 30 || temperature > 5) {
    console.log( 'The temperature is ' + temperature + ', so you should wear a coat and a hat!');
} else if ( temperature < 50 ) {
console.log( 'The temperature is ' + temperature + ', so you should wear a coat!');
} else {
     console.log( 'Shorts and a T-shirt are just fine!');
    }
