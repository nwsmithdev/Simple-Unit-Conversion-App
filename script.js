let convertBtn = document.getElementById("conversion--btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let startingValue = inputEl.value;

  lengthEl.textContent = `${startingValue} meter = ${
    Math.floor(startingValue * meterToFeet * 1000) / 1000
  } feet`;

  volumeEl.textContent = `${startingValue} liters = ${
    Math.floor(startingValue * literToGallon * 1000) / 1000
  } gallons`;

  massEl.textContent = `${startingValue} kilos = ${
    Math.floor(startingValue * kiloToPound * 1000) / 1000
  } pounds`;
});
