
const button = document.getElementById('clickMeBtn');
const message = document.getElementById('message');

let count = 0;

button.addEventListener('click', function() {
    count++;
    message.textContent = `You clicked the button ${count} times!`;
});

let resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', function() {
    count = 0;
    message.textContent = 'You clicked the button 0 times!';
});