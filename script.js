const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const fioInput = document.getElementById('fio');

// Функция для настройки input'ов
function setupInput(inputElement) {
    if (inputElement) { // Проверка, что элемент существует
        inputElement.addEventListener('focus', () => {
            inputElement.nextElementSibling.style.top = '10px';
            inputElement.nextElementSibling.style.fontSize = '12px';
            inputElement.nextElementSibling.style.color = '#007bff';
        });

        inputElement.addEventListener('blur', () => {
            if (inputElement.value !== '') {
                inputElement.nextElementSibling.style.opacity = '0';
            } else {
                inputElement.nextElementSibling.style.top = '';
                inputElement.nextElementSibling.style.fontSize = '';
                inputElement.nextElementSibling.style.color = '';
                inputElement.nextElementSibling.style.opacity = '';
            }
        });
    }
}

// Настройка input'ов
setupInput(emailInput);
setupInput(passwordInput);
setupInput(fioInput);
