
// Temperature Converter Function

function convertTemperature() {

    // Get input value

    let temperatureInput =
        document.getElementById("temperature").value.trim();

    // Get selected unit

    let selectedUnit =
        document.getElementById("unit").value;

    // Get error message element

    let errorMessage =
        document.getElementById("error-message");

    // Clear previous error

    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";

    // Check empty input

    if (temperatureInput === "") {

        showError("Please enter a temperature value!");
        return;

    }

    // Convert input into number

    let temperature = Number(temperatureInput);

    // Check valid numeric input

    if (!Number.isFinite(temperature)) {

        showError("Please enter a valid numeric value!");
        return;

    }

    // Variable for Kelvin value

    let kelvin;

    // Celsius Conversion

    if (selectedUnit === "C") {

        kelvin = temperature + 273.15;

    }

    // Fahrenheit Conversion

    else if (selectedUnit === "F") {

        kelvin = (temperature - 32) * 5 / 9 + 273.15;

    }

    // Kelvin Conversion

    else if (selectedUnit === "K") {

        kelvin = temperature;

    }

    // Check Absolute Zero

    if (kelvin < -0.0000001) {

        showError(
            "Temperature cannot be below absolute zero!"
        );

        clearResults();
        return;

    }

    // Fix very small floating point errors

    if (Math.abs(kelvin) < 0.0000001) {

        kelvin = 0;

    }

    // Convert Kelvin into Celsius

    let celsius = kelvin - 273.15;

    // Convert Kelvin into Fahrenheit

    let fahrenheit =
        (kelvin * 9 / 5) - 459.67;

    // Display Celsius Result

    document.getElementById("celsius-result").innerHTML =
        celsius.toFixed(2) + " °C";

    // Display Fahrenheit Result

    document.getElementById("fahrenheit-result").innerHTML =
        fahrenheit.toFixed(2) + " °F";

    // Display Kelvin Result

    document.getElementById("kelvin-result").innerHTML =
        kelvin.toFixed(2) + " K";

}


// Error Message Function

function showError(message) {

    let errorMessage =
        document.getElementById("error-message");

    errorMessage.innerHTML = message;

    errorMessage.style.display = "block";

}


// Clear Results Function

function clearResults() {

    document.getElementById("celsius-result").innerHTML =
        "-- °C";

    document.getElementById("fahrenheit-result").innerHTML =
        "-- °F";

    document.getElementById("kelvin-result").innerHTML =
        "-- K";

}


// Reset Function

function resetConverter() {

    // Clear input field

    document.getElementById("temperature").value = "";

    // Set default unit

    document.getElementById("unit").value = "C";

    // Clear error message

    document.getElementById("error-message").innerHTML = "";

    document.getElementById("error-message").style.display =
        "none";

    // Clear all results

    clearResults();

}