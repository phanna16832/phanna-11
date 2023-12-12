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
/*search bar js code*/
function performSearch() {
  // Get the input value from the search bar
  var searchInput = document.getElementById('searchBar').value.toLowerCase();

  // Perform your search logic here
  var data = [
    { titles: ["telegram", "纸飞机"], file: "telegramSave reply.html" },
    { titles: ["ccsl"], file: "ccsl.html" },
    { titles: ["fee", "运费"], file: "calculate.html" },
    // Add more results as needed
  ];

  // Filter data based on the search input
  var filteredResults = data.filter(result => result.titles.some(title => title.toLowerCase().includes(searchInput)));

  // Display the results in the searchResults div
  displayResults(filteredResults);
}

function displayResults(results) {
  var searchResultsContainer = document.getElementById('searchResults');
  // Clear previous results
  searchResultsContainer.innerHTML = '';

  // Display each result with content loaded from an external file
  results.forEach(result => {
    var resultItem = document.createElement('div');
    // Display all titles for the result
    resultItem.innerHTML = `<h3>${result.titles.join(' / ')}</h3><a href="${result.file}">View Details</a>`;
    searchResultsContainer.appendChild(resultItem);
  });
}
