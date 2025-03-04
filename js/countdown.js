// Imposta la data di fine del countdown
const countdownDate = new Date("Mar 18, 2025 23:59:59").getTime();

// Aggiorna il countdown ogni secondo
const countdownFunction = setInterval(function() {
    // Ottieni la data e l'ora corrente
    const now = new Date().getTime();

    // Calcola la distanza tra la data corrente e la data di fine
    const distance = countdownDate - now;

    // Calcola i giorni, le ore, i minuti e i secondi rimanenti
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Visualizza il risultato in un elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se il countdown è finito, visualizza un messaggio
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);