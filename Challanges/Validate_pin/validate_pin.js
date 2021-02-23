
// if string.length = 10 or 28 return true
// if string regex matches 0-11 and not /s return true 
// if string.length = 0 return false


const validanting = (pin) => 
{
    if(pin.length == 10|| pin.length == 28) {
      return (/\D/.test(pin)) ? false : true; 
    }
    else {
      return false;
    }
  
  
 }
  module.exports = validanting;