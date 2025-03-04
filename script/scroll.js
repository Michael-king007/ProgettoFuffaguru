function redirectToSection(input) {
    // Controlla se l'elemento con l'ID specificato esiste
    const section = document.getElementById(input);

    if (section) {
        // Scorri fino alla sezione specificata
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Sezione con ID "${header}" non trovata.`);
    }
}