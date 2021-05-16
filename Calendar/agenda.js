

var myEvents=
    { "hour10": "Guitar class",
      "hour14": "Frauenloop homework",
      "hour19": "Working out",
      "hour22":" Taking pills"
    }



var listKeys = Object.keys(myEvents)

lenghtEvents = listKeys.length;

for (let i=0;i<lenghtEvents;i++){
  
  key = String(listKeys[i]);
  time = document.getElementById(key);
timeId = String(time.id);
document.getElementById(key).innerHTML=myEvents[timeId];

}




