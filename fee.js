function calculateLandFee() {
    var weight = parseFloat(document.getElementById("weight").value);
    var w = parseFloat(document.getElementById("width").value);
    var h = parseFloat(document.getElementById("height").value);
    var l = parseFloat(document.getElementById("length").value);

    var volume = (w * h * l) / 6000;

    var fee, fee1, fly, fly1, notification;

    if (!isNaN(weight) && weight > 0 && weight >= volume) {
        // Calculate fee based on weight
        fee = weight * 1.5;
        fee1 = weight * 2;
        fly = weight * 7;  // Corrected calculation for fly
        fly1 = weight * 8; // Corrected calculation for fly1
        notification = "Weight: " + weight.toFixed(2) + " KG";
    } else {
        // Calculate fee based on volume
        fee = volume * 1.5;
        fee1 = volume * 2;
        fly1 = volume * 8;
        fly - volume * 7;
        notification = "Volume: " + volume.toFixed(2) + " KG";
    }

    // Display both fees
    document.getElementById("fee").value = "USD " + fee.toFixed(2);
    document.getElementById("fee1").value = "USD " + fee1.toFixed(2);

    // Display volume
    document.getElementById("volume").innerText = volume.toFixed(2) + " KG";

    // Display notification
    document.getElementById("notify").innerText = "Calculation based on " + notification;

    // Display additional fees
    document.getElementById("fly").value = "USD " + (fly).toFixed(2);
    document.getElementById("fly1").value = "USD " + (fly1).toFixed(2);
}

document.getElementById("length").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateLandFee();
        document.getElementById("order").focus();
    }
});
