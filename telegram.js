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

//cpy text and img
function copyImageAndText() {
  // Copy image
  var imageSrc = document.getElementById('image').src;
  navigator.clipboard.write([
      new ClipboardItem({
          'image/png': new Blob([imageSrc], { type: 'image/png' })
      })
  ]).then(function() {
      console.log('Image copied successfully');
  }, function(error) {
      console.error('Unable to copy image: ', error);
  });

  // Copy text
  var textToCopy = document.getElementById('pretext2').innerText;
  navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied successfully');
  }, function(error) {
      console.error('Unable to copy text: ', error);
  });
}
//copy img and text
function copyImageAndText() {
  // Copy image
  var imageSrc = document.getElementById('image').src;
  // Fetch the text content
  var textToCopy = document.getElementById('pretext2').innerText;

  // Create ClipboardItems for image and text
  var imageItem = new ClipboardItem({ 'image/png': new Blob([imageSrc], { type: 'image/png' }) });
  var textItem = new ClipboardItem({ 'text/plain': new Blob([textToCopy], { type: 'text/plain' }) });

  // Write both items to the clipboard
  navigator.clipboard.write([imageItem, textItem])
      .then(function() {
          console.log('Image and Text copied successfully');
      })
      .catch(function(error) {
          console.error('Unable to copy Image and Text: ', error);
      });
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