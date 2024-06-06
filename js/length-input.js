const messageInput = document.getElementById('message');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const submitButton = document.querySelector('.button-form');

submitButton.disabled = true;

const updateButtonState = () => {
    if (messageInput.value.length >= 10 && nameInput.value.length >= 3 && phoneInput.value.length >= 16) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#955FEF'; // фиолетовый фон
        submitButton.style.color = '#ffffff'; // белый текст
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = ''; // черный фон
        submitButton.style.color = ''; // белый текст
    }
};

messageInput.addEventListener('input', updateButtonState);
nameInput.addEventListener('input', updateButtonState);
phoneInput.addEventListener('input', updateButtonState);



