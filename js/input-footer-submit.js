const emailInput = document.getElementById('email');
const submitButtonForm = document.querySelector('.email-button');

submitButtonForm.disabled = true;

const updateButtonState2 = () => {
    if (emailInput.value.length >= 7) {
        submitButtonForm.disabled = false;
        submitButtonForm.style.backgroundColor = '#955FEF'; // фиолетовый фон
        submitButtonForm.style.color = '#ffffff'; // белый текст
    } else {
        submitButtonForm.disabled = true;
        submitButtonForm.style.backgroundColor = ''; // черный фон
        submitButtonForm.style.color = ''; // белый текст
    }
};

emailInput.addEventListener('input', updateButtonState2);