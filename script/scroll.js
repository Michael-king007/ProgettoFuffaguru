function redirectToSection(input) {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage !== 'index.html') {
        window.location.href = `index.html#${input}`;
    } else {
        // Controlla se l'elemento con l'ID specificato esiste
        const section = document.getElementById(input);

        if (section) {
            // Scorri fino alla sezione specificata
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Sezione con ID "${input}" non trovata.`);
        }
    }
}