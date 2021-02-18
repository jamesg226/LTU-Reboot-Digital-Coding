function drinkOrder(size, drink){
    var blnValidation = true;
    switch(size){
        case 'small':
        case 'medium':
        case 'large':   
        //do nothing
        break;
        default:
            strMessage = 'The size you have ordered is not valid';
            blnValidation = false;
        break;
    }
    switch(drink){
        case 'cola':
        case 'lemonade':
        case 'oasis':
        //do nothing
        break;
        default:
            strMessage = 'The drink you have ordered is not valid';
            blnValidation = false;
        break;
        }
    if(blnValidation){
    var strMessage = 'You have ordered a ' + size;
        switch(drink){
            case 'cola':
                strMessage += ' Cola';
            break;
            case 'lemon':
                strMessage += ' Lemonade';
            break;
            case 'oasis':
                strMessage += ' Oasis';
            break;
        }
    }
    return strMessage;
}
order = drinkOrder('small','juice');
console.log(order);