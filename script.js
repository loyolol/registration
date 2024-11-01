const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const fioInput = document.getElementById('fio');

emailInput.addEventListener('focus', () => {
    emailInput.nextElementSibling.style.top = '10px';
    emailInput.nextElementSibling.style.fontSize = '12px';
    emailInput.nextElementSibling.style.color = '#007bff';
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value !== '') { 
        emailInput.nextElementSibling.style.opacity = '0'; 
    } else {
        emailInput.nextElementSibling.style.top = '';
        emailInput.nextElementSibling.style.fontSize = '';
        emailInput.nextElementSibling.style.color = '';
        emailInput.nextElementSibling.style.opacity = ''; 
    }
});

passwordInput.addEventListener('focus', () => {
    passwordInput.nextElementSibling.style.top = '10px';
    passwordInput.nextElementSibling.style.fontSize = '12px';
    passwordInput.nextElementSibling.style.color = '#007bff';
});

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value !== '') { 
        passwordInput.nextElementSibling.style.opacity = '0'; 
    } else {
        passwordInput.nextElementSibling.style.top = '';
        passwordInput.nextElementSibling.style.fontSize = '';
        passwordInput.nextElementSibling.style.color = '';
        passwordInput.nextElementSibling.style.opacity = ''; 
    }
});

fioInput.addEventListener('focus', () => { 
    fioInput.nextElementSibling.style.top = '10px';
    fioInput.nextElementSibling.style.fontSize = '12px';
    fioInput.nextElementSibling.style.color = '#007bff';
});

fioInput.addEventListener('blur', () => { 
    if (fioInput.value !== '') { 
        fioInput.nextElementSibling.style.opacity = '0'; 
    } else {
        fioInput.nextElementSibling.style.top = '';
        fioInput.nextElementSibling.style.fontSize = '';
        fioInput.nextElementSibling.style.color = '';
        fioInput.nextElementSibling.style.opacity = ''; 
    }
});