//copy text//
function copyText(elementId) {
    var preText = document.getElementById(elementId);
    var textToCopy = preText.innerText;
  
    // Create a temporary textarea element
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
  
    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices
  
    try {
      // Attempt to copy the selected text to the clipboard
      var successful = document.execCommand('copy');
      var message = successful ? 'Text copied to clipboard' : 'Unable to copy text';
      console.log(message);
    } catch (err) {
      console.error('Error copying text', err);
    } finally {
      // Remove the temporary textarea
      document.body.removeChild(tempTextarea);
    }
  }
  // Search button
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
    var filteredResults = data.filter(result => 
      result.titles.some(title => title.toLowerCase().includes(searchInput))
    );
  
    // Display the results in the searchResults div
    displayResults(filteredResults);
  }
  
  // Display search results
  function displayResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    
    // Clear previous results
    searchResultsContainer.innerHTML = '';
  
    // Display each result with content loaded from an external file
    results.forEach(result => {
      var resultItem = document.createElement('div');
      
      // Display all titles for the result
      resultItem.innerHTML = `<h3>${result.titles.join(' ')}</h3><a href="${result.file}">View Details</a>`;
      searchResultsContainer.appendChild(resultItem);
    });
  }
  