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
        </div>`,
        
        `<div class="memory-card " data-framework="unicornparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/unicornparrot.gif" alt="">
        </div>
        <div class="memory-card " data-framework="unicornparrot">
            <img class="back" src="imgs/front.png" alt="">
            <img class="front" src="imgs/unicornparrot.gif" alt="">
        </div>`
];

let numeroCartas = prompt("Escolha com quantas cartas vai começar, um número valido par entre 4 e 14");
let temCartasViradas = false;
let travaMesa = false;
let ContagemdeClickCartas = 0;
let primeiraCarta, segundaCarta;

iniciarMesa();

function iniciarMesa(){
    while (numeroCartas != "4" && numeroCartas != "6" && numeroCartas != "8" && numeroCartas != "10"  && numeroCartas != "12" && numeroCartas != "14" ){
        alert("Insira um valor válido");
        numeroCartas = prompt("Escolha com quantas cartas vai começar, um número par valido entre 4 e 14");
    }


    if(numeroCartas == "4"){
        
        document.querySelector(".memory-game").innerHTML = ListaCartas[0] + ListaCartas[1];
    } 
    else if(numeroCartas == "6"){

        document.querySelector(".memory-game").innerHTML = ListaCartas[0] + ListaCartas[1] + ListaCartas[2];
    }
    else if(numeroCartas == "8"){

        document.querySelector(".memory-game").innerHTML = ListaCartas[0] + ListaCartas[1] + ListaCartas[2] + ListaCartas[3];
    }
    else if(numeroCartas == "10"){

        document.querySelector(".memory-game").innerHTML = ListaCartas[0] + ListaCartas[1] + ListaCartas[2] + ListaCartas[3] + ListaCartas[4];
    }
    else if(numeroCartas == "12"){

        document.querySelector(".memory-game").innerHTML = ListaCartas[0] + ListaCartas[1] + ListaCartas[2] + ListaCartas[3] + ListaCartas[4] + ListaCartas[5];
    }
    else if(numeroCartas == "14"){

        document.querySelector(".memory-game").innerHTML = ListaCartas[0] + ListaCartas[1] + ListaCartas[2] + ListaCartas[3] + ListaCartas[4] + ListaCartas[5] + ListaCartas[6];
    }
}

let cards = document.querySelectorAll('.memory-card');


function flipCard(){
     if (travaMesa) return;
     if (this === primeiraCarta) return;
    
    this.classList.add('flip');
    ContagemdeClickCartas += 1;
    console.log(ContagemdeClickCartas);
   

    if (!temCartasViradas){
        temCartasViradas = true;
        primeiraCarta = this;
        return;
    }

    segundaCarta = this;
    temCartasViradas = false;

    checkForMatch();
    finalizar();
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
    }, 1000)
}

function finalizar(){
    if(document.querySelectorAll(".flip").length == numeroCartas){
        alert(`Você ganhou em ${ContagemdeClickCartas} jogadas!`);
    }
}


(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 14);
      card.style.order = ramdomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard));
