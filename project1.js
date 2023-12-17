// Copy text function
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

// Search button function
function performSearch() {
  var searchInput = document.getElementById('searchBar').value.toLowerCase();

  var data = [
      { titles: ["telegram", "纸飞机"], file: "telegramSave reply.html" },
      { titles: ["ccsl"], file: "ccsl.html" },
      { titles: ["fee", "运费"], file: "calculate.html" },
      { titles: ["taobao", "pinduoduo"], file: "project1.html" },
      { titles: ["comment", "facebook"], content: `
        សួស្តីបង 
        ពត៌មានរបៀបប្រើសេវាជួយទិញទំនិញដោយឥតគិតថ្លៃ : https://shorturl.at/pqQW6
        Join Telegram Group ជួយទិញ: https://t.me/+CyEdYOtceZkwZjQ1
        បងសូមចុចចុះឈ្មោះតាមលីងនេះសិនមកបង
        https://m.ceccsl.com/reg/khmindex?tj
        Telegram ក្រុមការងារបញ្ជាទិញ : https://t.me/CE_EXPRESS
      
        *សំរាប់ការការបង្រៀនទិញបងអាចទាក់ទងតេឡេក្រាមខាងក្រោមបាន 
        https://t.me/+zaVpyk9lVlI2YmU1
        ជួយទិញ និង បង្រៀនទិញទំនិញពីប្រទេសចិនដោយឥតគិតថ្លៃ ជាមួយក្រុមហ៊ុនស៊ីអ៊ី` },
      // Add more results as needed
  ];

  var filteredResults = data.filter(result => result.titles.some(title => title.toLowerCase().includes(searchInput)));

  displayResults(filteredResults);
}

// Display search results function
function displayResults(results) {
  var searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '';

  results.forEach(result => {
      var resultItem = document.createElement('div');
      var additionalText = result.content || "Additional information not available.";

      if (result.file) {
          resultItem.innerHTML = `<h3>${result.titles.join('/')}</h3><p>${additionalText}</p><a href="${result.file}" target="_blank">View Details</a>`;
      } else {
          resultItem.innerHTML = `<h3>${result.titles.join('/ ')}</h3><p>${additionalText}</p>`;
      }

      searchResultsContainer.appendChild(resultItem);
  });
}
