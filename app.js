'use strict';

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const newGame = document.querySelector('#newGame');

let comp;

function computerPlay() {
    comp = Math.floor(Math.random() * 3) + 1;
    return comp;
}

let player;
let scoreP = 0;
let scoreC = 0;
let playing = true;


rock.addEventListener('click', function () {
    if (playing) {
        //Delete anterior message:
        document.querySelector('.newLine') && document.querySelector('.newLine').remove();
        //Play:
        player = 1;
        computerPlay();
        console.log(player, comp);
        let msg = round(player, comp);
        let newEl = document.createElement('div')
        newEl.innerHTML = msg;
        newEl.style.fontSize = '1.5rem';
        newEl.style.marginTop = '0.7rem';
        newEl.classList.add('newLine');
        document.body.appendChild(newEl);
    }
})
paper.addEventListener('click', function () {
    if (playing) {
        //Delete anterior message:
        document.querySelector('.newLine') && document.querySelector('.newLine').remove();
        //Play:
        player = 2;
        computerPlay();
        console.log(player, comp);
        let msg = round(player, comp);
        let newEl = document.createElement('div')
        newEl.innerHTML = msg;
        newEl.style.fontSize = '1.5rem';
        newEl.style.marginTop = '0.7rem';
        newEl.classList.add('newLine');
        document.body.appendChild(newEl);
    }
})
scissors.addEventListener('click', function () {
    if (playing) {
        //Delete anterior message:
        document.querySelector('.newLine') && document.querySelector('.newLine').remove();
        //Play:
        player = 3;
        computerPlay();
        let msg = round(player, comp);
        let newEl = document.createElement('div')
        newEl.innerHTML = msg;
        newEl.style.fontSize = '1.5rem';
        newEl.style.marginTop = '0.7rem';
        newEl.classList.add('newLine');
        document.body.appendChild(newEl);
    }
})






// 1 Rock 
// 2 Paper 
// 3 Scissors

let round = function (players, comps) {

    if (players === 1 && comps === 1) {
        return 'Duas <b>pedras</b>! Ninguém ganhou.'
    } else if (players === 1 && comps === 2) {
        cWins();
        return '<b>Papel</b> embrulha a <b>pedra</b>! Você perdeu.'
    } else if (players === 1 && comps === 3) {
        pWins();
        return '<b>Pedra</b> amassa a <b>tesoura</b>! Você ganhou.'
    } else if (player === 2 && comp === 1) {
        pWins();
        return '<b>Papel</b> embrulha a <b>pedra</b>! Você ganhou.'
    } else if (player === 2 && comp === 2) {
        return 'Dois <b>papéis</b>! Ninguém ganhou.'
    } else if (player === 2 && comp === 3) {
        cWins();
        return '<b>Tesoura</b> corta o <b>papel</b>! Você perdeu.'
    } else if (player === 3 && comp === 1) {
        cWins();
        return '<b>Pedra</b> amassa a <b>tesoura</b>! Você perdeu.'
    } else if (player === 3 && comp === 2) {
        pWins();
        return '<b>Tesoura</b> corta o <b>papel</b>! Você ganhou.'
    } else if (player === 3 && comp === 3) {
        return 'Duas <b>tesouras</b>! Ninguém ganhou.'
    }

}

let pWins = function () {
    if (scoreP >= 0 && scoreP < 4) {
        scoreP++;
        refreshScore();
    } else if (scoreP === 4) {
        scoreP++;
        refreshScore();
        playing = false;
        return pWinner();
    }
}

let cWins = function () {
    if (scoreC >= 0 && scoreC < 4) {
        scoreC++;
        refreshScore();
    } else if (scoreC === 4) {
        scoreC++;
        refreshScore();
        playing = false;
        return cWinner();
    }
}


//Winner modals:
const modal = document.querySelector('.modal');
const winMsg = document.querySelector('#winMsg');
const overlay = document.querySelector('.overlay');

let pWinner = function () {
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    winMsg.textContent = '';
    let lula = document.createElement('img')
    lula.src = 'lula.png';
    // lula.classList.add('lula');
    lula.style.width = '15rem'
    lula.style.height = '15rem'
    winMsg.append(lula);
    console.log('PWinner!');
}

let cWinner = function () {
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    winMsg.textContent = 'Dessa vez você perdeu, quem sabe na próxima!';
    console.log('CWinner!');
}

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', function () {
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})

// let round1 = round(player, comp)
// console.log(round1);

//Score display:
const scorePdisplay = document.querySelector('.scorePdisplay');
const scoreCdisplay = document.querySelector('.scoreCdisplay');


const refreshScore = function () {
    scorePdisplay.innerText = scoreP;
    scoreCdisplay.innerText = scoreC;
}
refreshScore();

//New game:

newGame.addEventListener('click', function () {
    scoreC = 0;
    scoreP = 0;
    refreshScore();
    playing = true;
    let newLine = document.querySelectorAll('.newLine');
    for (let nl of newLine) {
        nl.remove();
    }
})