const comparting = (string1, string2) => {
    let some = "";
    for(let i = 0; i < string1.length; i++) {
      if((string1[i] == '-' && string2[i] == '+') || (string1[i] == '+' && string2[i] == '-')) {
        result += '0';
      } else {
        result += string1[i];
      }
    }
    return result;
  }
  
  module.exports = neutralise