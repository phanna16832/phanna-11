//copy text button//
function copyText(elementId) {
  var textElement = document.getElementById(elementId);

  // Create a temporary input element
  var tempInput = document.createElement('input');
  tempInput.value = textElement.innerText;
  document.body.appendChild(tempInput);

  // Select the text in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text
  document.execCommand('copy');
  console.log('Content copied to clipboard');

  // Remove the temporary input element
  document.body.removeChild(tempInput);
}
//search bar//
function performSearch() {
  // Get the input value from the search bar
  var searchInput = document.getElementById('searchBar').value.toLowerCase();

  // Perform your search logic here
  var data = [
    { titles: ["telegram", "纸飞机"], file: "telegramSave reply.html" },
    { titles: ["ccsl"], file: "ccsl.html" },
    { titles: ["fee", "运费"], file: "calculate.html" },
    { titles: ["taobao", "pinduoduo"], file: "project1.html" },
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