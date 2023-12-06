function calculateLandFee(nextInputId) {
    var weight = parseFloat(document.getElementById("weight").value);
    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);
    var length = parseFloat(document.getElementById("length").value);
    var volume = (width * height * length) / 6000;

    // Check if either volume or weight is equal to or over 100,000
    if (volume >= 100000 || weight >= 100000) {
        document.getElementById("notify").innerText = "សូមបញ្ជាក់: ទំនិញនេះជាប្រភេទម៉ែត្រគីប!";
        return; // Stop further calculations
    }

    var fee, fee1, fly, fly1, notification;

    if (!isNaN(weight) && weight > 0 && weight >= volume) {
        // Calculate fee based on weight
        fee = weight * 1.5;
        fee1 = weight * 2;
        fly = weight * 7;
        fly1 = weight * 8;
        notification = "Weight: " + weight.toFixed(2) + " KG";
    } else if (!isNaN(volume) && volume > 0 && volume > weight) {
        // Calculate fee based on volume
        fee = volume * 1.5;
        fee1 = volume * 2;
        fly1 = volume * 8;
        fly = volume * 7;
        notification = "Volume: " + volume.toFixed(8) + " KG";
    } else {
        // If weight is not greater than or equal to volume, set fees to zero
        fee = 0;
        fee1 = 0;
        fly1 = 0;
        fly = 0;
        notification = "Invalid input. Please check your values.";
    }

    // Display both fees
    document.getElementById("fee").innerText = "USD " + fee.toFixed(2);
    document.getElementById("fee1").innerText = "USD " + fee1.toFixed(2);

    // Display volume
    document.getElementById("volume").innerText = volume.toFixed(8) + " KG";

    // Display notification
    document.getElementById("notify").innerText = "Calculation based on " + notification;

    // Display additional fees
    document.getElementById("fly").innerText = "USD " + fly.toFixed(2);
    document.getElementById("fly1").innerText = "USD " + fly1.toFixed(2);

    // Move focus to another input
    var nextInput = document.getElementById(nextInputId);
    if (nextInput) {
        nextInput.focus();
    } else {
        console.error("Element with ID " + nextInputId + " not found.");
    }
}

// Add event listeners for "Enter" key press on each input field
document.getElementById("weight").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateLandFee("width");
    }
});

document.getElementById("width").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateLandFee("length");
    }
});

document.getElementById("length").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateLandFee("height");
    }
});

document.getElementById("height").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateLandFee("order");
    }
});

// Add an event listener for the "Calculate" button click
document.querySelector('button').addEventListener('click', function () {
    calculateLandFee("order");
});
