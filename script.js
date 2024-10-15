let currentInput = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('current-output').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    document.getElementById('current-output').value = '0';
    document.getElementById('previous-output').value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('current-output').value = currentInput || '0';
}

function calculateResult() {
    try {
        previousInput = currentInput;
        const result = eval(currentInput);
        currentInput = result.toString();
        document.getElementById('previous-output').value = previousInput;
        document.getElementById('current-output').value = result;
    } catch (error) {
        document.getElementById('current-output').value = 'Error';
    }
}

