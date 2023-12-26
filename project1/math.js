  // JavaScript code
  function submitUsername() {
    let username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = "Hello " + username;
}
function love() {
var x = document.getElementById("text").value;
var y = document.getElementById("text1").value;
document.getElementById("result").textContent = x + " loves " + y;
}
function checkAge() {
var ageInput = document.getElementById("age").valueAsNumber;
var output = document.getElementById("age2");

if (isNaN(ageInput) || ageInput < 0) {
    output.textContent = "Please enter a valid age.";
} else if (ageInput <= 18) {
    output.textContent = "kmeng jg kom ton al mean ss";
} else if (ageInput <= 45) {
    output.textContent = "kal yok ss";
}
else{
  output.textContent = ageInput <= 60 ? "jas hv rok ss tt" : "";
}
}