const subjekt: string[] = ['Harry','Hermine', 'Ron', 'Hagrid', 'Snape', 'Dumbledore', 'Dobbie','Filch', 'Draco'];
const praedikat: string[] = ['braut', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört', 'zeichnet', 'verwandelt', 'beobachtet'];
const objekt: string[]= ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren', 'den Stein der Weisen', 'einen Besen', 'seinen Patronus'];

//console.log("Expecto Patronum");

var randPoemSub = subjekt[Math.floor(Math.random() * subjekt.length)];
var randPoemPra = praedikat[Math.floor(Math.random() * praedikat.length)];
var randPoemObj = objekt[Math.floor(Math.random() * objekt.length)];

console.log(randPoemSub , randPoemPra , randPoemObj);
