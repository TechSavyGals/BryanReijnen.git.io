document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('input');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    const backButton = document.getElementById('back');
    const decimalButton = document.getElementById('decimal');
    const historyToggle = document.getElementById('historyToggle');
    const historyContainer = document.getElementById('historyContainer');
    const historyList = document.getElementById('historyList');
    const parenthesesOpenButton = document.getElementById('parenthesesOpen');
    const parenthesesCloseButton = document.getElementById('parenthesesClose');

    let historyVisible = false; 

    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            inputField.textContent += button.textContent;
        });
    });

    operatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            inputField.textContent += ' ' + button.textContent + ' ';
        });
    });

    clearButton.addEventListener('click', function () {
        inputField.textContent = '';
    });

    equalsButton.addEventListener('click', function () {
        try {
            const result = eval(inputField.textContent);
            const equation = inputField.textContent + ' = ' + result;

            addToHistory(equation);

            inputField.textContent = equation;
        } catch (error) {
            inputField.textContent = 'Error';
        }
    });

    backButton.addEventListener('click', function () {
        inputField.textContent = inputField.textContent.slice(0, -1);
    });

    decimalButton.addEventListener('click', function () {
        if (!inputField.textContent.includes('.')) {
            inputField.textContent += '.';
        }
    });

    historyToggle.addEventListener('click', function () {
        historyVisible = !historyVisible; 
        historyContainer.style.display = historyVisible ? 'block' : 'none';
    });

    function addToHistory(equation) {
        const listItem = document.createElement('li');
        listItem.textContent = equation;
        historyList.appendChild(listItem);
    }

    parenthesesOpenButton.addEventListener('click', function () {
        inputField.textContent += '(';
    });

    parenthesesCloseButton.addEventListener('click', function () {
        inputField.textContent += ')';
    });
});
