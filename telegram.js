// Your search function
function search() {
  var searchInput = document.getElementById("search1").value.toLowerCase();
  var resultDiv = document.getElementById("result");

  // Data to search through
  var data = [
    { title: "homepage", file: "index.html" },
    { title: "ccsl", file: "ccsl.html" }
    // Add more data as needed
  ];

  // Clear previous results
  resultDiv.innerHTML = "";

  // Search through the data
  for (var i = 0; i < data.length; i++) {
    var title = data[i].title.toLowerCase();
    var file = data[i].file;

    if (title.includes(searchInput)) {
      // Display the result
      resultDiv.innerHTML += '<p><a href="' + file + '">' + title + '</a></p>';
    }
  }

  // Display a message if no results found
  if (resultDiv.innerHTML === "") {
    resultDiv.innerHTML = '<p>No results found.</p>';
  }
}
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