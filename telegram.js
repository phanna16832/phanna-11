 function copyHtml(elementId) {
    var element = document.getElementById(elementId);

    // Create a temporary textarea element
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = element.innerText;
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Use the Clipboard API to copy the selected text
    navigator.clipboard.writeText(tempTextarea.value)
      .then(function() {
        console.log('Content copied to clipboard');
      })
      .catch(function(err) {
        console.error('Error copying text', err);
      })
      .finally(function() {
        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);
      });
  }
