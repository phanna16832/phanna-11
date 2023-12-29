// num.js
function calculate() {
    var num = document.getElementById("num");
    var resultSpan = document.getElementById("pretext4");

    // Ternary operator
    var cal = num.valueAsNumber > 300
        ? "The price is over 300"
        : "Hello, the subtotal of the product is " + num.value + " divided by 6 = $" + (num.valueAsNumber / 6).toFixed(2);

    resultSpan.textContent = cal;
}
//6.1
function calculate1() {
    var num = document.getElementById("num1");
    var resultSpan = document.getElementById("pretext5");

    // Ternary operator
    var cal = num.valueAsNumber >= 310 && num.valueAsNumber <= 610
        ? "Hello, the subtotal of the product is " + num.value + " divided by 6.1 = $" + (num.valueAsNumber / 6.1).toFixed(2)
        : "It's over 610￥";

    resultSpan.textContent = cal;
}
// 6.2
function calculate2() {
    var num = document.getElementById("num2");
    var resultSpan = document.getElementById("pretext6");

    // Ternary operator
    var cal = num.valueAsNumber >= 620 && num.valueAsNumber <= 6200
        ? "Hello, the subtotal of the product is " + num.value + " divided by 6.2 = $" + (num.valueAsNumber / 6.2).toFixed(2)
        : "It's over 6200 ￥ or less 620￥";

    resultSpan.textContent = cal;
}

// 6.4
function calculate3() {
    var num = document.getElementById("num3");
    var resultSpan = document.getElementById("pretext7");

    // Ternary operator
    var cal = num.valueAsNumber >= 6310
        ? "Hello, the subtotal of the product is " + num.value + " divided by 6.4 = $" + (num.valueAsNumber / 6.4).toFixed(2)
        : "It's over 6310 ￥ or less 6310￥";

    resultSpan.textContent = cal;
}