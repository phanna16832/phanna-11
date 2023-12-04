function calculateLandFee() {
    var weight = parseFloat(document.getElementById("weight").value);
    var w = parseFloat(document.getElementById("width").value);
    var h = parseFloat(document.getElementById("height").value);
    var l = parseFloat(document.getElementById("length").value);

    var volume = (w * h * l) / 6000;

    var fee, fee1, notification;

    if (!isNaN(weight) && weight > 0 && weight >= volume) {
        // Calculate fee based on weight
        fee = weight * 1.5;
        fee1 = weight * 2;
        notification = "Weight: " + weight.toFixed(2) + " KG";
    } else {
        // Calculate fee based on volume
        fee = volume * 1.5;
        fee1 = volume * 2;
        notification = "Volume: " + volume.toFixed(2) + " KG";
    }

    // Display both fees
    document.getElementById("fee").value = "USD " + fee.toFixed(2);
    document.getElementById("fee1").value = "USD " + fee1.toFixed(2);

    // Display volume
    document.getElementById("volume").innerText = volume.toFixed(2) + " KG";

    // Display notification
    document.getElementById("notify").innerText = "Calculation based on " + notification;
}
// Add event listener to each input field
document.getElementById("weight").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("height").focus();
    }
});

document.getElementById("height").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("width").focus();
    }
});

document.getElementById("width").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("length").focus();
    }
});

document.getElementById("length").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateLandFee();
    }
});
