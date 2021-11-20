namespace Canvas {

window.addEventListener("load", hndlLoad);
let crc2 : CanvasRenderingContext2D;
    
function hndlLoad(_event: Event): void{
   let canvas: HTMLCanvasElement = document.querySelector("canvas");  
   console.log(canvas); 

canvas.getContext("2d"); // In der Konsle werden alle Eihgenschaften und Methoden angezeigt die zur verfügung stehen    
console.log(crc2);
crc2=<CanvasRenderingContext2D>canvas.getContext("2d")


for(let index: number = 0; index < 20; index++ ){ //100 random dreiecke zeichnen lassen 
let x: number = Math.random() *400; // 2 Zufallszahlen um die größe des koordinatensystems zu bestimmen in dem die dreiecke liegen sollen 
let y: number = Math.random() * 300; //Math random um die zufällige platzierung anzugeben 
drawTriangle(x , y);
drawLine(x, y, "pink", 150 ); 
drawCircle(x, y, "white", 100); 
}
}
for (let i: number = 0; i < 10; i++) {
    let x: number = i * 150;
    let y: number = i * 100;
    let color: string = "black";

function drawTriangle(_x: number, _y:number): void{
crc2.beginPath(); 


crc2.moveTo(_x, _y); //Zeichnen vom Dreieck 
crc2.lineTo(_x, _y + 50);  //Angabe der Punkte und des Systems
crc2.lineTo(_x + 60, _y+ 15); 
crc2.closePath(); 


crc2.fillStyle = "pink"; //Style 
crc2.strokeStyle = "pink"; 
crc2.strokeStyle = "white"; 
crc2.strokeStyle = "white"; 
crc2.lineWidth = 5; 
crc2.stroke(); 
crc2.fill(); 
}

function drawLine(_x: number, _y: number, _color: string, _size: number):void{
crc2.beginPath();
crc2.moveTo(50, 1);
crc2.lineTo(200, 80);
crc2.moveTo(170, 1);
crc2.lineTo(300, 80);
crc2.moveTo(90, 1);
crc2.lineTo(500, 80);
crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
crc2.lineWidth = 2;
crc2.strokeStyle =_color;
crc2.stroke();

}
function drawCircle(_x: number, _y: number, _color: string, _size: number): void {
    crc2.beginPath();

    crc2.moveTo(2.1, 1);
    crc2.lineTo(2.1, 10);
    crc2.moveTo(4.5, 1);
    crc2.lineTo(4.5, 10);
    crc2.moveTo(7.5, 1);
    crc2.lineTo(10.5, 10);
    crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.strokeStyle = _color;
    crc2.lineWidth = 5;
    crc2.stroke(); 
}

}

