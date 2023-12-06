function calculateLandFee() {
    var weight = parseFloat(document.getElementById("weight").value);
    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);
    var length = parseFloat(document.getElementById("length").value);
    var volume = (width * height * length) / 6000;

    var fee, fee1, fly, fly1, notification;

    if (!isNaN(weight) && weight > 0 && weight >= volume) {
        // Calculate fee based on weight
        fee = weight * 1.5;
        fee1 = weight * 2;
        fly = weight * 7;
        fly1 = weight * 8;
        notification = "Weight: " + weight + " KG";
    } else {
        // Calculate fee based on volume
        fee = volume * 1.5;
        fee1 = volume * 2;
        fly1 = volume * 8;
        fly = volume * 7;
        notification = "Volume: " + volume + " KG";
    }

    // Display both fees
    document.getElementById("fee").innerText = "USD " + fee;
    document.getElementById("fee1").innerText = "USD " + fee1;

    // Display volume
    document.getElementById("volume").innerText = volume + " KG";

    // Display notification
    document.getElementById("notify").innerText = "Calculation based on " + notification;

    // Display additional fees
    document.getElementById("fly").innerText = "USD " + fly;
    document.getElementById("fly1").innerText = "USD " + fly1;
}

document.getElementById("length").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission
        calculateLandFee();
        document.getElementById("order").focus();
    }
});
