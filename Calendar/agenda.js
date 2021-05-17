

var myEvents=
    { "hour10": "Guitar class",
      "hour14": "Frauenloop homework",
      "hour19": "Working out",
      "hour22":" Taking pills"
    }



var listKeys = Object.keys(myEvents)

lenghtEvents = listKeys.length;

for (let i=0;i<lenghtEvents;i++){
  console.log("type of list" + typeof listKeys[i]+ " "+ listKeys[i];
  key =listKeys[i];
  time = document.getElementById(key);
timeId = String(time.id);
time.innerHTML=myEvents[timeId];

}




