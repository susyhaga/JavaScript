

const validanting = (pin) => 
{
    if(pin.length == 4|| pin.length == 6) {
      return (/\D/.test(pin)) ? false : true; 
    }
    else {
      return false;
    }
  
  
 }
  module.exports = validanting;