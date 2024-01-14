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

//promotion1
total = () => {
    var p = document.getElementById("price").valueAsNumber;
    var result = document.getElementById("result");
    var calculate =  (p/6.4).toFixed(2)
    result.textContent = "Promotion អត្រាប្តូរប្រាក់ពិសេសទៅដល់ 6.4¥ ចាប់ពីថ្ងៃទី 7 រហូតដល់ 31 មករា 2024 "+ " "+"\nសួស្តីបង សរុបហាងទំនិញទាំងអស់" +"￥" +  p + " ចែក 6.4 = " + calculate + "$" +
     "\n " + "\n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន"+ "\n" + "\nចំពោះសេវាជួយទិញគឺមិនមានការបង្រួមកញ្ចប់ទំនិញទេបង"
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

subTotal1 = () => {
    var p = parseFloat(document.getElementById("p").value);
    var p1 = parseFloat(document.getElementById("p1").value);
    var p2 = parseFloat(document.getElementById("p2").value);
    var subtotal = document.getElementById("subtotal");
    const total = p + p1 + p2;
    subtotal.textContent = "Subtotal: " + total;
}




//footer
var currentDate = new Date();

// Format the date as a string
var dateString = currentDate.toDateString();

// Display the date in the footer
document.getElementById("date").textContent = ("Current Date: " + dateString);