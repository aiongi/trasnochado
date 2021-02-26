//selectors
const t = document.querySelector(".t");
const r = document.querySelector(".r");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const n = document.querySelector(".n");
const o = document.querySelector(".o");
const c = document.querySelector(".c");
const ab = document.querySelector(".ab");
const h = document.querySelector(".h");
const d = document.querySelector(".d");
const ob = document.querySelector(".ob");
const imagen = document.querySelector(".imagen");

//event listeners
t.addEventListener('mouseover', prueba);
r.addEventListener('mouseover', prueba);
a.addEventListener('mouseover', prueba);
s.addEventListener('mouseover', prueba);
n.addEventListener('mouseover', prueba);
o.addEventListener('mouseover', prueba);
c.addEventListener('mouseover', prueba);
h.addEventListener('mouseover', prueba);
ab.addEventListener('mouseover', prueba);
d.addEventListener('mouseover', prueba);
ob.addEventListener('mouseover', prueba);

//functions

let imagenes = [
    'images/24m1.jpg',
    'images/acab.jpg',
    'images/army.jpg',
    'images/artform.jpg',
    'images/be kind.jpg',
    'images/coffee2.jpg',
    'images/contra.jpg',
    'images/crown.jpg',
    'images/cuarentena.jpg',
    'images/decolonize.jpg',
    'images/ecstasy.jpg',
    'images/education.jpg',
    'images/engels, marx and a red flag.jpg',
    'images/expired.jpg',
    'images/god prays.jpg',
    'images/growth.jpg',
    'images/interesting.jpg',
    'images/invisible.jpg',
    'images/lost.jpg',
    'images/my life.jpg',
    'images/my life2.jpg',
    'images/numb.jpg',
    'images/overpopulation.jpg',
    'images/petet1nogod.jpg',
    'images/petete libro cansado-01.jpg',
    'images/reinventadoprimeraedicion.jpg',
    'images/routine verde.jpg',
    'images/superimposed interpretations of a 2012 laptop.gif',
    'images/superimposed interpretations of a calculator.gif',
    'images/superimposed interpretations of a pair of pliers.gif',
    'images/superimposed interpretations of a pendrive.gif',
    'images/superimposed interpretations of a tennis racquet.gif',
];

let inicial = Math.floor(Math.random() * ((imagenes.length - 1) - 27 + 1)) + 27;
imagen.setAttribute('src', imagenes[inicial]);

let max = imagenes.length - 1;
let min = 0;

function randomIndex(max, min) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function prueba() {

    imagen.setAttribute('src', imagenes[randomIndex(max, min)]);
    //console.log(randomIndex(max, min));

};