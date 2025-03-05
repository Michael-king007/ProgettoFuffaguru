// Funzione per controllare il form
function checkForm() {
    const form = document.querySelector('#register .section-content');
    const inputs = form.querySelectorAll('input, select');
    let valid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });

    if (valid) {
        
        // Puoi aggiungere qui il codice per inviare il form
    } else {
        alert('Per favore, compila tutti i campi richiesti.');
    }
}

// Funzione per resettare il form
function resetForm() {
    ;
}