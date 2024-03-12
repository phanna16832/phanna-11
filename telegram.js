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
// Function to copy image to the clipboard
async function copyToClipboard(imageSrc) {
  try {
      // Create a new image element
      const img = new Image();
      // When the image is loaded, create a clipboard item with the image
      img.onload = async function() {
          try {
              const imageBlob = await loadImageToBlob(img);
              // Write the image blob to the clipboard
              await navigator.clipboard.write([
                  new ClipboardItem({ 'image/png': imageBlob })
              ]);
              alert("Image copied successfully!");
          } catch (error) {
              alert("Failed to copy image: " + error);
          }
      };
      img.src = imageSrc;
  } catch (error) {
      alert("Failed to copy image: " + error);
  }
}


//owner less
ownerLess = () => {
  var track1 = document.getElementById("oTrack").value; // Getting the value of the input field
  
  var textToCopy = "សួស្តីបងចំពោះទំនិញមួយដែលខាងប្អូនឆែកទៅឃើញថាជាប្រភេទទំនិញខ្វះព័ត៌មានពីព្រោះអាចដោយសារខាងហាងគាត់បានដាក់បិទព័ត៌មានអ្នកទទួលនៅលើក្រដាស់ label បុងទំនិញចិន ទើបខាងឃ្លាំងចិនដាក់ទំនិញនេះជាទំនិញខ្វះព័ត៌មានដូចនេះខាងប្អូនសូមរំខានបងជួយស្នើលេខកូដនេះក្នុងអេប CE EXpress-CN" + "\n\nដោយជួរទី1បងជួយដាក់ : " + track1 + "\nជួរទី2បងជួយដាក់ឈ្មោះទំនិញជាភាសាខ្មែរឬអង់គ្លេសក៏បាន";

  try {
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        alert("Text copied successfully!");
      })
      .catch(function(err) {
        console.error("Unable to copy to clipboard:", err);
      });
  } catch (err) {
    console.error("Clipboard API not supported:", err);
  }
}



//air// 
function air() {
  var track = document.getElementById("Track").value; // Corrected ID to "Track" and using .value to get input value
  var textToCopy = `សួស្តីបងចំពោះទំនិញនេះដែរខាងប្អូនសូមរំខានបងជួយធ្វើការស្នើរដឹកតាមផ្លូវអាកាសណាបងជៀសវាងទំនិញចូលតាមផ្លូវគោក \nលេខបញ្ជាទិញឆាប់រហ័ស : \t${track} \nឈ្មោះទំនិញអាចសរសេរជាភាសាខ្មែរបានណាបង \n\nតម្លៃទំនិញ  （ ￥)`;

  try {
      // Use the Clipboard API to copy the text
      navigator.clipboard.writeText(textToCopy)
          .then(function() {
              alert("Text copied successfully!");
          })
          .catch(function(err) {
              console.error("Unable to copy to clipboard:", err);
          });
  } catch (err) {
      console.error("Clipboard API not supported:", err);
  }
}

//copy img
function copyImage() {
  var imgSrc = ["img/air.jpg", "img/ownerless.jpg"];
  
  try {
      // Call copyImage to copy the image to the clipboard
      copyImage(imgSrc);
  } catch (err) {
      console.error("Unable to copy image:", err);
  }
}

function copyImage(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  
  // When the image is loaded, copy it to the clipboard
  img.onload = function() {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Convert canvas content to blob
      canvas.toBlob(function(blob) {
          // Create a ClipboardItem with the image blob
          var item = new ClipboardItem({ "image/png": blob });
          
          // Write the ClipboardItem to the clipboard
          navigator.clipboard.write([item])
              .then(function() {
                  alert("Image copied successfully!");
              })
              .catch(function(err) {
                  console.error("Unable to copy image to clipboard:", err);
              });
      }, "image/png");
  };
}