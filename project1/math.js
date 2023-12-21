document.addEventListener("DOMContentLoaded", function () {
    var x = Math.pow(2, 0);
    console.log(x);
  
    // round
    var y = Math.sqrt(12);
    const xX = Math.round(y);
    console.log(xX);
  
    // ceil
    var xY = Math.ceil(y);
    console.log(xY);
  
    // function
    function love() {
      const m = document.getElementById("text").value;
      const w = document.getElementById("text1").value;
      var a = m + " loves " + w;
      document.getElementById("result").innerHTML = a;
    }
  });
  