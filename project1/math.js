var input = document.getElementById("age").valuAsNumber;
var output = document.getElementById("age2");
function age(){
  if(input <=99){
    output.textContent = "jas hv rok ss tt";
  }
  else if (input >=18){
    output.textContent = "single dol na";
  }
  else if (input <18){
    output.textContent = "kmeng jg kom ton al mean ss";
  }
}