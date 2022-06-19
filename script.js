let cards = document.querySelectorAll('.memory-card');

let ListaCartas = [
        `<div class="memory-card " data-framework="bobrossparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/bobrossparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="bobrossparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/bobrossparrot.gif" alt="">
        </div>`,

        `<div class="memory-card " data-framework="explodyparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/explodyparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="explodyparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/explodyparrot.gif" alt="">
        </div>`,

        `<div class="memory-card " data-framework="fiestaparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/fiestaparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="fiestaparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/fiestaparrot.gif" alt="">
        </div>`,

        `<div class="memory-card " data-framework="metalparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/metalparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="metalparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/metalparrot.gif" alt="">
        </div>`,


        `<div class="memory-card " data-framework="revertitparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/revertitparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="revertitparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/revertitparrot.gif" alt="">
        </div>`,


        `<div class="memory-card " data-framework="tripletsparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/tripletsparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="tripletsparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/tripletsparrot.gif" alt="">
        </div>`
];

let numeroCartas = prompt("Escolha com quantas cartas vai começar, um número valido entre 4 e 14 par");
let temCartasViradas = false;
let travaMesa = false;
let primeiraCarta, segundaCarta;

iniciarMesa();

function iniciarMesa(){
    while (numeroCartas != "4" && numeroCartas != "6" && numeroCartas != "8" && numeroCartas != "10"  && numeroCartas != "12" && numeroCartas != "14" ){
        alert("Insira um valor válido");
        numeroCartas = prompt("Escolha com quantas cartas vai começar, um número valido entre 4 e 14 par");
    }

}

function flipCard(){
     if (travaMesa) return;
     if (this === primeiraCarta) return;
    
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
    travaMesa = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');

        travaMesa = false;
    }, 1500)
}

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));