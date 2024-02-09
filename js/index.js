let isCelsius = true;
let inputValue = '';
let resultValue = '';

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function doConvert() {
    inputValue = parseFloat(document.getElementById("input").value);

    if (!isNaN(inputValue)) {
        if (isCelsius) {
            resultValue = celsiusToFahrenheit(inputValue);
        } else {
            resultValue = fahrenheitToCelsius(inputValue);
        }
        document.getElementById("result").value = resultValue;
    } else {
        document.getElementById("result").value = "";
    }
}

document.getElementById("convert").addEventListener("click", doConvert);

document.getElementById("change").addEventListener("click", function() {
    isCelsius = !isCelsius;
    if (isCelsius) {
        document.getElementById("input-text-temp").textContent = "Celsius";
        document.getElementById("input-logo-temp").textContent = "C";
        document.getElementById("result-text-temp").textContent = "Fahrenheit";
        document.getElementById("result-logo-temp").textContent = "F";
    } else {
        document.getElementById("input-text-temp").textContent = "Fahrenheit";
        document.getElementById("input-logo-temp").textContent = "F";
        document.getElementById("result-text-temp").textContent = "Celsius";
        document.getElementById("result-logo-temp").textContent = "C";
    }
    doConvert();
});

document.getElementById("input").addEventListener("input", doConvert);

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("result").value = "";
    document.getElementById("input").value = "";
});
