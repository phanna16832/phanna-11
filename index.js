 // Get the checkbox and dropdown content
 var dropdownCheckbox = document.getElementById("dropdownCheckbox");
 var dropdownContent = document.getElementById("myDropdown1");

 // Add event listener to checkbox change
 dropdownCheckbox.addEventListener("change", function() {
   // If checkbox is checked, display the dropdown content
   if (dropdownCheckbox.checked) {
     dropdownContent.style.display = "block";
   } else {
     // If checkbox is unchecked, hide the dropdown content
     dropdownContent.style.display = "none";
   }
 });