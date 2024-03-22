const counterInput = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Функция для обновления цвета текста в зависимости от значения счетчика
function updateTextColor() {
    const counterValue = parseInt(counterInput.value);

    if (counterValue > 0) {
        counterInput.classList.remove('gray', 'red');
        counterInput.classList.add('green');
    } else if (counterValue < 0) {
        counterInput.classList.remove('gray', 'green');
        counterInput.classList.add('red');
    } else {
        counterInput.classList.remove('green', 'red');
        counterInput.classList.add('gray');
    }
}

incrementButton.addEventListener('click', function() {
    counterInput.value = parseInt(counterInput.value) + 1;
    updateTextColor();
});

decrementButton.addEventListener('click', function() {
    counterInput.value = parseInt(counterInput.value) - 1;
    updateTextColor();
});

resetButton.addEventListener('click', function() {
    counterInput.value = 0;
    counterInput.classList.remove('green', 'red');
    counterInput.classList.add('gray');
});













// const redLight = document.getElementById('red');
// const yellowLight = document.getElementById('yellow');
// const greenLight = document.getElementById('green');
// const message = document.getElementById('message');
//
// redLight.addEventListener('click', function() {
//     message.textContent = 'Стоп';
// });
//
// yellowLight.addEventListener('click', function() {
//     message.textContent = 'Готовься';
// });
//
// greenLight.addEventListener('click', function() {
//     message.textContent = 'Иди';
// });


