/*
1 meter = 3.281 feet
1 foot =  0.304 meter
1 liter = 0.264 gallon
1 gallon = 3.785 liter
1 kilogram = 2.204 pound
1 pound = 0.453 kilo

Anweisungen:Generate all conversions, when the user clicks the button
Round the numbers down to 3 decimal places
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    const inputNumber = Number(inputEl.value)
    
    const literToGallon = inputNumber * 0.264
    const gallonToLiter = inputNumber * 3.785
    volumeEl.textContent = `
    ${inputNumber} liters = ${literToGallon.toFixed(3)} gallons | 
    ${inputNumber} gallons = ${gallonToLiter.toFixed(3)} liters`

    const kiloToPound = inputNumber * 2.204
    const PoundToKilo = inputNumber * 0.453
    massEl.textContent = `
    ${inputNumber} kilos = ${kiloToPound.toFixed(3)} pounds | 
    ${inputNumber} pounds = ${PoundToKilo.toFixed(3)} kilos`

    const meterToFeet = inputNumber * 3.281
    const feetToMeter = inputNumber * 0.304
    lengthEl.textContent = `
      ${inputNumber} meters = ${meterToFeet.toFixed(3)} feet |
      ${inputNumber} feet = ${feetToMeter.toFixed(3)} meters
    `
})