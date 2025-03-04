let recensioniRandom = [] ;
document.addEventListener("DOMContentLoaded", function(){
    fetch("recensioni.json")
    .then(Response => Response.json()) // Converte il json in un vettore di oggetti,array.
    .then(data => {
        //Mescola le recensioni e ne sceglie 3 a caso
        let recensioniRandom = data.sort(() => 0.5 - Math.random()).slice(0,3);
        
        //Seleziona dove inserire le recensioni:
        let contenitore = document.getElementById("recensioni");

        //Inserisce le recensioni nella pagina:
        recensioniRandom.forEach(recensione => {
            let div = document.createElement("div"); // crea un elemento div
            div.classList.add("recensione");
            div.innerHTML = '<strong>${recensione.nome}:</strong> "${recensione.recensione"';
            contenitore.appendChild(div);
        });

    })
    .catch(error => console.error("Errore nel caricamento delle recensioni:", error));
})