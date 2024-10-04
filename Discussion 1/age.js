function checkAge() {
    let age = document.getElementById('age').value;

    let result = document.getElementById('result');

     // set result as not hidden
    result.style.display = 'block';

    if (isNaN(age)) {
        result.innerHTML = 'Please enter a valid number';
    } else {
        // if decimal, also not accepted
        if (age >= 18 && age <= 120) {
            result.innerHTML = 'You are an adult. Welcome';
        } else if (age < 0) {
            result.innerHTML = 'Negative number is not accepted';
        } else if (!Number.isInteger(Number(age))) {
            result.innerHTML = 'Decimal number is not accepted';
        } else {
            result.innerHTML = 'You cannot access this page';
        }
    }
}