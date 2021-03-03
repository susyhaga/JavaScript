//Aiming at a local variable

this.car="Honda Civic w/Ugly Spoiler";

var susysGarage ={
    car:"Aston Martin",
    getCar: function(){
        return this.car;
    }
};
console.log(susysGarage.getCar());

//grabbing a global variable

var storeGetCarForLater = susysGarage.getCar;
console.log(storeGetCarForLater());

//Using BIND to aim at the local variable that I want to grab the data.

var theRealGetCarFunction = susysGarage.getCar.bind(susysGarage);
console.log(theRealGetCarFunction());