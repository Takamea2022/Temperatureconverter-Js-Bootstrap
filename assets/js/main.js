const conversionDirection = document.getElementById("conversion-direction");
const temperatureInput = document.getElementById("temperature");
const convertButton = document.getElementById("convert-button");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  const selectedDirection = conversionDirection.value;

  let convertedTemperature;

  if (selectedDirection === "celsiusToFahrenheit") {
    convertedTemperature = celsiusToFahrenheit(temperature);
    console.log(convertedTemperature);
    
  } else {
    convertedTemperature = fahrenheitToCelsius(temperature);
    console.log(convertedTemperature);
  }

  resultElement.textContent = `Converted temperature: ${convertedTemperature}`;
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
 
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
  
}

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
 
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});