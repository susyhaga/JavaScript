
class Thermostat{
    constructor(thermo){
       thermo = 5/9 * (thermo - 32) 
         this._thermo = thermo;
    }
    get temperature(){
        return this._thermo;
    }
    set temperature(modify){
       this._thermo = modify;
    }

}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius