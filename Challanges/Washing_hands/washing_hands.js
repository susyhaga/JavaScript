const washing_hands = (y, yX) => {
  const secondsTime = (y * 21 * 30);
  const totalTime = (secondsTime * yX) / 60;
  const seconds = (totalTime % 1) * 60;
  let time;
  if (seconds > 0) {
    time = totalTime.toString().slice(0, -2);
  } else {
    time = totalTime;
  }
  return `${time} minutes and ${seconds} seconds`;
}
washing_hands (8, 7);


module.exports = washing_hands;

