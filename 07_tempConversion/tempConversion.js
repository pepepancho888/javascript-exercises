const convertToCelsius = function(value) {
  valueInCelsius = ((value - 32)*5)/9;
  valueInCelsius = Math.round(valueInCelsius *10)/10;
  return valueInCelsius;
};

const convertToFahrenheit = function(value) {
  valueInFahrenheit = ((value*9)/5) + 32;
  valueInFahrenheit = Math.round(valueInFahrenheit *10)/10;
  return valueInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
