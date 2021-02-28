const washing_hands = (n, nM) => {
  const secondsTime = (n * 21 * 30);
  const totalTime = (secondsTime * nM) / 60;
  const seconds = (totalTime % 1) * 60;
  let time;
  if (seconds > 0) {
    time = totalTime.toString().slice(0, -2);
  } else {
    time = totalTime;
  }
  return `${time} minutes and ${seconds} seconds`;
}


console.log(washing_hands (8, 7));
console.log(washing_hands (0, 0));
console.log(washing_hands (7, 9));






