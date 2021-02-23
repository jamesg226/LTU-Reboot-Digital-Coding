//multiplyer = 7; // set multiplyer outside of the loop

for(multiplyer=1; // set the multiplyer to 1 to start, e.g. 1 times tables
    multiplyer<=12; //Is multiplyer equal to or less than 12? If so, run the code for counter.
    multiplyer++){  //Add one to multiplyer to advance the times tables. Runs before line 4.
    for(counter=1; //set the value of the counter
        counter<=12; //conditional logic - whilst this is true code below in brackets will be executed
        counter++ //add 1 to counter after each run. Runs before line 7.
        ){
            sum = multiplyer * counter; //do maths
            message = multiplyer + ' * ' + counter + ' = ' + sum; // do message
            console.log(message); // do output
    }
}


// How to correctly write line 3 for(multiplyer=1; multiplyer<=12; multiplyer++)