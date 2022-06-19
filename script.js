let cards = document.querySelectorAll('.memory-card');

let temCartasViradas = false;
let primeiraCarta, segundaCarta;

function flipCard(){
    
    this.classList.add('flip');

    if (!temCartasViradas){
        temCartasViradas = true;
        primeiraCarta = this;
        return;
    }

    segundaCarta = this;
    temCartasViradas = false;

    checkForMatch();
}

function  checkForMatch() {
    if (primeiraCarta.dataset.framework === segundaCarta.dataset.framework){
        desativarCartas();
        return;
    }

    desvirarCartas();
}

function desativarCartas(){
    primeiraCarta.removeEventListener('click', flipCard);
    segundaCarta.removeEventListener('click', flipCard);
}

function desvirarCartas(){
    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');
    }, 1500)
}

cards.forEach(card => card.addEventListener('click', flipCard));