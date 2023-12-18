document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', performSearch);
});

function performSearch() {
    // Get the input value from the search bar
    var searchInput = document.getElementById('searchBar').value.toLowerCase();

    // Check if the search input is not empty
    if (searchInput.trim() !== '') {
        // Perform your search logic here
        var data = [
            { title: "Telegram", file: "telegramSave reply.html" },
            { title: "CCSL", file: "ccsl.html", img: "ccsl-image.jpg", text: "Description for CCSL" },
            { title: "Fee Calculation", file: "calculate.html"},
            { title: "Taobao and Pinduoduo", file: "project1.html", img: "taobao1.jpg"},
            { title: "id and CE ID", text: "Password:888888 ID:  លេខទូរសព្ទ័: 0 " }
            // { title: "id and CE ID", file: " ", text: "Password:888888 ID:  លេខទូរសព្ទ័: 0 " }
            // Add more results as needed
        ];

        // Filter data based on the search input
        var filteredResults = data.filter(result => result.title.toLowerCase().includes(searchInput));

        // Display the results in the searchResults div
        displayResults(filteredResults);
    } else {
        // Clear the search results if the input is empty
        clearResults();
    }
}

function displayResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    // Clear previous results
    searchResultsContainer.innerHTML = '';

    // Display each result with content loaded from an external file
    results.forEach(result => {
        var resultItem = document.createElement('div');

        // Display title
        resultItem.innerHTML = `<h3>${result.title}</h3>`;

        // Display image if available
        if (result.img) {
            var imgElement = document.createElement('img');
            imgElement.src = result.img;
            resultItem.appendChild(imgElement);
        }

        // Display text if available
        if (result.text) {
            var textElement = document.createElement('p');
            textElement.textContent = result.text;
            resultItem.appendChild(textElement);
        }

        // Add link to view details
        var detailsLink = document.createElement('a');
        detailsLink.href = result.file;
        detailsLink.textContent = 'View Details';
        detailsLink.classList.add('details-link'); // Add a class for styling
        resultItem.appendChild(detailsLink);

        searchResultsContainer.appendChild(resultItem);
    });
}

function clearResults() {
    var searchResultsContainer = document.getElementById('searchResults');
    // Clear previous results
    searchResultsContainer.innerHTML = '';
}


//copy text button//
function copyText(elementId) {
  var preText = document.getElementById(elementId);
  var textToCopy = preText.innerText;

  var tempTextarea = document.createElement('textarea');
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile devices

  try {
      var successful = document.execCommand('copy');
      var message = successful ? 'Text copied to clipboard' : 'Unable to copy text';
      console.log(message);
  } catch (err) {
      console.error('Error copying text', err);
  } finally {
      document.body.removeChild(tempTextarea);
  }
}