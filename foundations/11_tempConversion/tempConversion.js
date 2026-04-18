const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit - 32) * (5 / 9);
  const rounded = Math.round(result * 10) / 10;
  return rounded
};

const convertToFahrenheit = function(celcius) {
  const result = (celcius * (9 / 5)) + 32;
  const rounded = Math.round(result * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
