function main() {
  const dateData = new Date();

  let hr = dateData.getHours();
  let min = dateData.getMinutes();
  let sec = dateData.getSeconds();
  const mill = dateData.getMilliseconds();

  const secHand = document.getElementById("secBox");
  const minHand = document.getElementById("minBox");
  const hrHand = document.getElementById("hrBox");

  hrHand.style.transform = `rotate(${hrRot()}deg)`;
  minHand.style.transform = `rotate(${minRot()}deg)`;
  secHand.style.transform = `rotate(${secRot()}deg)`;

  function hrRot() {
    if (hr > 12) {
      hr = hr - 12;
    }
    hr += min / 60;
    return (hr / 12) * 360;
  }
  function minRot() {
    min += sec / 60;
    return (min / 60) * 360;
  }
  function secRot() {
    sec += mill / 1000;
    return (sec / 60) * 360;
  }
  requestAnimationFrame(main);
}

requestAnimationFrame(main);
