// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }

      // Close Dropdown1 if the user clicks outside of it
      var dropdown1 = document.getElementById("myDropdown");
      if (dropdown1.classList.contains('show') && !event.target.matches('.dropbutton')) {
          dropdown1.classList.remove('show');
      }
  }
}
