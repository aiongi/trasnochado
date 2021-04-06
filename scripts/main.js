//selectors
const imagen = document.querySelector(".imagen");
const sonrisa = document.querySelector(".sonrisa");

//event listeners

sonrisa.addEventListener('click', prueba);

//functions

let imagenes = [
    'images/superimposed interpretations of a 2012 laptop.gif',
    'images/superimposed interpretations of a calculator.gif',
    'images/superimposed interpretations of a pair of pliers.gif',
    'images/superimposed interpretations of a pendrive.gif',
    'images/superimposed interpretations of a tennis racquet.gif',
    'images/superimposed interpretations of a hammer.gif',
    'images/superimposed interpretations of a cap.gif',
];

let max = imagenes.length - 1;
let min = 0;

let inicial = Math.floor(Math.random() * (max - min + 1)) + min;
imagen.setAttribute('src', imagenes[inicial]);

function randomIndex(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function prueba() {
    imagen.setAttribute('src', imagenes[randomIndex(max, min)]);
};