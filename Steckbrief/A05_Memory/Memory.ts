//Eingabe des Wortes für Karten
type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;
const textField 

//Farbe der Karte 
var colorPicker:any // Color Einstellen 
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event: any) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
var colorWell: any
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);


function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }
  function updateFirst(event:any) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function updateAll(event:any) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }

//Farbe der Schrift 


//Einstellen der Schrift


//Einstellen der Rundenlänge (zeit) 

function Select_Game_Time(): any; {

}

//Einstellen der Kartengröße


//Button startet das Spiel
var button = document.getElementById("button");
button.addEventListener("click","load_Gamefield");

//Spielfeld 
var load_Gamefield: any("")
document.getElementById("Cards").innerHTML = cards;
const cards = []; 
for (let entry of cards.entries()) {
  console.log(entry);
  console.log("name: " + entry[0]);
  console.log("value: " + entry[1]);
}



//Karten Mischen 
function mix_Cards(){

}
Math.floor(Math.random()*...); 



//Timer (beendet Spiel)
var intervalID = setInterval(alert, 30000);
setTimeout(alert, 1000); // Will alert once, after a second.
setInterval(function(){ 
	console.log("Better luck next time!");
}, 2000);

//Strafzeit (2 Sekunden)


//Mitteolung Gewinn 
print.message 

//Mitteilung Verloren 


