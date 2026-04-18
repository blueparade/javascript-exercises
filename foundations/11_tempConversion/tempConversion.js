const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit - 32) * (5 / 9);
  const rounded = Math.round(result * 10) / 10;
  return rounded
};

const convertToFahrenheit = function(celcius) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
