// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    const container4 = document.getElementById('container4');
    const btnContinue1 = document.getElementById('btn-continue1');
    const btnContinue2 = document.getElementById('btn-continue2');
    const btnBack = document.getElementById('btn-back');
    const btnBack2 = document.getElementById('btn-back2');
    const options = document.querySelectorAll('.option');
    const btnConfirm = document.getElementById('btn-confirm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    let selectedOption = [];
    const displayOptions = document.getElementById('display-options');

    btnContinue1.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Validación de los campos
        if (nameInput.value.trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Por favor, ingresa tu correo electrónico.');
            return;
        }

        // Validación del correo electrónico
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        container1.classList.remove('active');
        container2.classList.add('active');
    });

    btnContinue2.addEventListener('click', function(event) {
        event.preventDefault();

        if (selectedOption.length == 0) {
            alert('Por favor, selecciona una opción.');
            return;
        }

        displayOptions.innerHTML = '';

        document.getElementById('display-name').textContent = nameInput.value;
        document.getElementById('display-email').textContent = emailInput.value;

        selectedOption.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            displayOptions.appendChild(li);
        });

        container2.classList.remove('active');
        container3.classList.add('active');
    });    

    btnBack.addEventListener('click', function(event) {
        event.preventDefault();
        container2.classList.remove('active');
        container1.classList.add('active');
    });

    btnBack2.addEventListener('click', function(event) {
        event.preventDefault();
        container3.classList.remove('active');
        container2.classList.add('active');
    });

    options.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const optionLabel = this.querySelector('label').textContent;

            if (selectedOption.includes(optionLabel)) {
                selectedOption = selectedOption.filter(opt => opt !== optionLabel);
            } else {
                selectedOption.push(optionLabel);
            }
        });
    });

    btnConfirm.addEventListener('click', function(event) {
        event.preventDefault();
        container3.classList.remove('active');
        container4.classList.add('active');
    });
});
