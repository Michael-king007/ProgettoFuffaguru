document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.data .input');

    if (inputs.length > 0) {
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.classList.add('selected');
            });

            input.addEventListener('blur', function() {
                this.classList.remove('selected');
            });
        });
    } else {
        console.error('No input elements found');
    }
});