// script.js
document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
    
    if (!textInput) {
        alert('Please input a value');
        return;
    }

    const cleanedInput = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    const isPalindrome = cleanedInput === reversedInput;
    
    if (isPalindrome) {
        resultElement.textContent = `${textInput} is a palindrome!`;
    } else {
        resultElement.textContent = `${textInput} is not a palindrome!`;
    }
});
