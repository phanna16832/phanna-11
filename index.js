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
            { title: "Taobao and Pinduoduo", file: "project1.html", img: "taobao1.jpg"},
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


//calcultion
function calculate() {
    var num = document.getElementById("num");
    var resultSpan = document.getElementById("pretext4");

    // Ternary operator
    var cal = num.valueAsNumber > 300
        ? "ទឹកប្រាក់លើសពី 300"
        : "សួស្តីបង សរុបហាងទំនិញទាំងអស់" + num.value +"￥"+ " ចែក 6 = " + (num.valueAsNumber / 6).toFixed(2) + "$";

    resultSpan.textContent = cal;
}
//6.1
function calculate1() {
    var num = document.getElementById("num1");
    var resultSpan = document.getElementById("pretext5");

    // Ternary operator
    var cal = num.valueAsNumber >= 310 && num.valueAsNumber <= 610
        ? "សួស្តីបង សរុបហាងទំនិញទាំងអស់ " + num.value + "  ចែក 6.1= $ " + (num.valueAsNumber / 6.1).toFixed(2)
        : "ក្រោម 300 ￥ នឹង​លើស​ 610  ￥";

    resultSpan.textContent = cal;
}
// 6.2
function calculate2() {
    var num = document.getElementById("num2");
    var resultSpan = document.getElementById("pretext6");

    // Ternary operator
    var cal = num.valueAsNumber >= 620 && num.valueAsNumber <= 6200
        ? "សួស្តីបង សរុបហាងទំនិញទាំងអស់ " + num.value + " ចែក 6.2= " + (num.valueAsNumber / 6.2).toFixed(2) + "$"
        : "តម្លៃទំនិញតូចជាង 620￥ ឬ ច្រើនជាង6200￥ ";

    resultSpan.textContent = cal;
}

// 6.4
function calculate3() {
    var num = document.getElementById("num3");
    var resultSpan = document.getElementById("pretext7");

    // Ternary operator
    var cal = num.valueAsNumber >= 6310
        ?  "សួស្តីបង សរុបហាងទំនិញទាំងអស់ " + "￥"+  num.value + " ចែក 6.4 = " + (num.valueAsNumber / 6.4).toFixed(2) + "$"
        : "តម្លៃទំនិញតូចជាង 6310￥ ";

    resultSpan.textContent = cal;
}
//promotion
function calculate4() {
    var num = document.getElementById("num4");
    var resultSpan = document.getElementById("pretext8");

    // Ternary operator
    var cal = num.valueAsNumber /6.4

    resultSpan.textContent = "Promotion អត្រាប្តូរប្រាក់ពិសេសទៅដល់ 6.4¥ ចាប់ពីថ្ងៃទី 7 រហូតដល់ 31 មករា 2024 សួស្តីបង សរុបហាងទំនិញទាំងអស់" +"￥"+  num.value + " ចែក 6.8 = " + (cal).toFixed(2) + "$"
}

// vip 6.8
function calculate5() {
    var num = document.getElementById("num5");
    var resultSpan = document.getElementById("pretext9");

    // Ternary operator
    var cal = num.valueAsNumber /6.8

    resultSpan.textContent = "សួស្តីបង សរុបហាងទំនិញទាំងអស់ " + "￥"+  num.value + " ចែក 6.8 = " + (cal).toFixed(2) + "$"
}

//recal js
function recal1() {
    // Get the values from the input fields
    var text1 = parseFloat(document.getElementById("p1").value) || 0;
    var text2 = parseFloat(document.getElementById("p2").value) || 0;
  
    // Calculate the result
    var result;
    if (text1 > text2) {
        result = text1 - text2;
        document.getElementById("p3").textContent = "支付总额: សរុបទឹកប្រាក់ត្រូវបង់: " + result.toFixed(2);
    } 
    else {
        result = text2 - text1;
        document.getElementById("p4").textContent = "总退款金额: សរុបទឹកប្រាក់ត្រូវសងត្រលប់ " + result.toFixed(2);
    }
}

//subtotal
function subTotal() {
    var n = document.getElementById("n1").valueAsNumber;
    var n1 = document.getElementById("n2").valueAsNumber;
    var n2 = document.getElementById("n3").valueAsNumber;
    var price = document.getElementById("price");

    const subTotal = n + n1 + n2;
    price.textContent = "តម្លៃទំនិញសរុប: " + subTotal;
}

//copy paste .js
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