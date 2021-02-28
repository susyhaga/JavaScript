

const validanting = (pin) => 
{
    if(pin.length == 4|| pin.length == 6) {
      return (/\D/.test(pin)) ? false : true; 
    }
    else {
      return false;
    }
  
  
 }

 console.log(validanting('1234'));
 console.log(validanting('45135'));
 console.log(validanting('89abc1'));
 console.log(validanting('900876'));
 console.log(validanting(' 4983'));