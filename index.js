function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      // Hide all other dropdowns before showing the current one
      hideAllDropdowns();
      dropdown.style.display = "block";
    }
  }
  
  function hideAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdown) {
      dropdown.style.display = 'none';
    });
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      hideAllDropdowns();
    }
  }
  