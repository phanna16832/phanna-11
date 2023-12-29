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
        : "It's over 6200 ￥ or less 620￥";

    resultSpan.textContent = cal;
}

// 6.4
function calculate3() {
    var num = document.getElementById("num3");
    var resultSpan = document.getElementById("pretext7");

    // Ternary operator
    var cal = num.valueAsNumber >= 6310
        ?  "សួស្តីបង សរុបហាងទំនិញទាំងអស់ " + "￥"+  num.value + " ចែក 6. = " + (num.valueAsNumber / 6.4).toFixed(2) + "$"
        : "It's over 6310 ￥ or less 6310￥";

    resultSpan.textContent = cal;
}

// vip 6.8
function calculate5() {
    var num = document.getElementById("num5");
    var resultSpan = document.getElementById("pretext9");

    // Ternary operator
    var cal = num.valueAsNumber /6.8

    resultSpan.textContent = "សួស្តីបង សរុបហាងទំនិញទាំងអស់ " + "￥"+  num.value + " ចែក 6.8 = " + (cal).toFixed(2) + "$"
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
