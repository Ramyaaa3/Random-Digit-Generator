function generateRandomNumber() {
    const min = parseInt(document.getElementById('min-value').value);
    const max = parseInt(document.getElementById('max-value').value);

    if (isNaN(min) || isNaN(max)) {
        alert('Please enter valid numbers for both minimum and maximum values.');
        return;
    }

    if (min > max) {
        alert('Minimum value should be less than or equal to Maximum value.');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = randomNumber;
}
