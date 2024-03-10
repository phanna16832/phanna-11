//search code
document.addEventListener("DOMContentLoaded", function () {
    var searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', performSearch);
});

function performSearch(event) {
    event.preventDefault();

    var searchInputValue = document.getElementById('searchInput').value.toLowerCase();

    if (searchInputValue.trim() !== '') {
        var data = [
            { title: "Telegram", file: "telegramSave reply.html" },
            { title: "CCSL", file: "ccsl.html"},
            { title: "Fee Calculation", file: "calculate.html"},
            { title: "Taobao and Pinduoduo", file: "project1.html", img: "tb.jpg"},
            { title: "id and CE ID", text: "Password:888888 ID:  លេខទូរសព្ទ័: 0 ", file: "#" }  
            // Add more results as needed
        ];

        var filteredResults = data.filter(result => result.title.toLowerCase().includes(searchInputValue));

        displayResults(filteredResults);
    } else {
        clearResults();
    }
}

function displayResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    results.forEach(result => {
        var resultItem = document.createElement('div');
        resultItem.innerHTML = `<h3>${result.title}</h3>`;

        if (result.img) {
            var imgElement = document.createElement('img');
            imgElement.src = result.img;
            resultItem.appendChild(imgElement);
        }

        if (result.text) {
            var textElement = document.createElement('p');
            textElement.textContent = result.text;
            resultItem.appendChild(textElement);
        }

        var detailsLink = document.createElement('a');
        detailsLink.href = result.file;
        detailsLink.textContent = 'View Details';
        detailsLink.classList.add('details-link');
        resultItem.appendChild(detailsLink);

        searchResultsContainer.appendChild(resultItem);
    });
}

function clearResults() {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
}
//promotion1
function calculatePromotion() {
    var price = document.getElementById("price").valueAsNumber;
    var result = document.getElementById("result");
    var promotionRate = 6;
    var calculatedPrice = (price / promotionRate).toFixed(2);
    
    result.textContent = "Promotion "+ "\nសួស្តីបង សរុបហាងទំនិញទាំងអស់" +"￥"+  price + " ចែក 6 = "  + calculatedPrice + "$" +"\n" + "\n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន"
    +"\n" + "\n ចំពោះសេវាជួយទិញគឺមិនមានការបង្រួមកញ្ចប់ទំនិញទេបង"
 
}

//promotion2
total = () => {
    var p = document.getElementById("price-1").valueAsNumber;
    var result = document.getElementById("result-1");
    var calculate = (p / 6.3).toFixed(2);
    result.textContent = "រីករាយទិវាសិទ្ធនារី អត្រា 6.30 (ចាប់ពីថ្ងៃទី 01 ដល់ថ្ងៃទី 15)  "+ "\nសួស្តីបង សរុបហាងទំនិញទាំងអស់" +"￥"+  p + " ចែក 6.3 = "  + calculate + "$" +"\n" + "\n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន"
    +"\n" + "\n ចំពោះសេវាជួយទិញគឺមិនមានការបង្រួមកញ្ចប់ទំនិញទេបង"
  }

// total
const subtotal = () => {
    var n = document.getElementById("n").valueAsNumber;
    var n1 = document.getElementById("n1").valueAsNumber;
    var calculate;

    if (n > n1) {
        calculate = n - n1;
        document.getElementById("r").textContent = "支付总额: សរុបទឹកប្រាក់ត្រូវបង់: " + calculate + "$";
        // Clear the content of the other span
        document.getElementById("r1").textContent = "";
    } else {
        calculate = n1 - n;
        document.getElementById("r1").textContent = "总退款金额: សរុបទឹកប្រាក់ត្រូវសងត្រលប់ " + calculate + "$";
        // Clear the content of the other span
        document.getElementById("r").textContent = "";
    }

    // Move to the next input field or show result (adjust the IDs accordingly)
    document.getElementById("n1").focus();
    // or display the result
    // document.getElementById("result").textContent = "Your Result: " + calculate;
}

const handleKeyPress = (event, nextInputId, resultId) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // prevent the default behavior of the Enter key
        subtotal();
    }
}

//copy text in total function
function copyText1() {
    var n = document.getElementById("n").value;
    var n1 = document.getElementById("n1").value;
    var resultElement = document.getElementById("r");
    var resultElement1 = document.getElementById("r1");
    var resultText = resultElement.textContent;
    var resultText1 = resultElement1.textContent;

    // Combine input values and result text
    var textToCopy = "新订单总额: សរុបទឹកប្រាក់កុម្ម៉ង់ថ្មី:" + n + "$" + "\n总退款: សរុបទឹកប្រាក់សងត្រលប់: " + n1 + "$" + "\n" + resultText + "\n" + resultText1;

    try {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(textToCopy)
            .then(function() {
                // Alert or notify the user (optional)
            })
            .catch(function(err) {
                console.error("Unable to copy to clipboard:", err);
            });
    } catch (err) {
        console.error("Clipboard API not supported:", err);
    }
}

const subTotal1 = () => {
    var p = parseFloat(document.getElementById("p").value) || 0;
    var p1 = parseFloat(document.getElementById("p1").value) || 0;
    var p2 = parseFloat(document.getElementById("p2").value) || 0;
    var subtotal = document.getElementById("subtotal");
    const total = p + p1 + p2;
    subtotal.textContent = "Subtotal: " + total.toFixed(2);
}

const moveToNext = (event, nextInputId) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}
//copy content in subtotal1
const copyContent = () => {
    var contentToCopy = document.querySelector('.subtotal1');
    var range = document.createRange();
    range.selectNode(contentToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Content copied!');
}
//涨价
var n0 = document.getElementById("number0");
var n00 = document.getElementById("number00");
var result0 = document.getElementById("result0");

subTotal0 = () => {
  if (n0.value > n00.value) {
    const cal0 = n0.value - n00.value;
    result0.textContent = "តម្លៃដែលទូទាត់បន្ថែម: " + cal0.toFixed(2);
  } 
  else {
    const cal0 = n00.value - n0.value;
    result0.textContent = "ទឹកប្រាក់ដែលបង្វិលត្រលប់ទៅវិញ: " + cal0.toFixed(2);
  }
};
//copy text in 涨价functon
function copyText3() {
    var input1 = document.getElementById("number0");
    var input2 = document.getElementById("number00");
    var result = document.getElementById("result0");

    // Create a temporary textarea
    var textarea = document.createElement("textarea");
    textarea.value = "តម្លៃទំនិញ: " + input1.value +"$" + "\nទឹកប្រាក់ដែលបានទូទាត់:  " + input2.value + "$" + "\n" + result.textContent +"$";

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text from the textarea
    textarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);
}


//copy text
function copyText(elementId) {
    var element = document.getElementById(elementId);

    var textToCopy;

    if (element.tagName === 'INPUT') {
        textToCopy = element.value;
    } else {
        textToCopy = element.textContent || element.innerText;
    }

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




//footer
var currentDate = new Date();

// Format the date as a string
var dateString = currentDate.toDateString();

// Display the date in the footer
document.getElementById("date").textContent = ("Current Date: " + dateString);