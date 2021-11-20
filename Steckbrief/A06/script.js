var Canvas;
(function (Canvas) {
    window.addEventListener("load", hndlLoad);
    var crc2;
    function hndlLoad(_event) {
        var canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d"); // In der Konsle werden alle Eihgenschaften und Methoden angezeigt die zur verfügung stehen    
        console.log(crc2); // In der Konsle werden alle Eihgenschaften und Methoden angezeigt die zur verfügung stehen    
        console.log(dS);
        function line(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y + 30);
            crc2.moveTo(_x, _y + 40);
            crc2.lineTo(_x, _y + 50);
            crc2.moveTo(_x, _y + 60);
            crc2.lineTo(_x, _y + 70);
            crc2.stroke();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "black";
        }
        for (var index = 0; index < 2; index++) { //100 random dreiecke zeichnen lassen 
            var x = Math.random() * 400; // 2 Zufallszahlen um die größe des koordinatensystems zu bestimmen in dem die dreiecke liegen sollen 
            var y = Math.random() * 300; //Math random um die zufällige platzierung anzugeben 
            var line_1 = Math.random() * 200;
            dS(x, y);
            line_1();
            drawTriangle(x, y);
        }
    }
    function drawTriangle(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y); //Zeichnen vom Dreieck 
        crc2.lineTo(_x, _y + 70); //Angabe der Punkte und des Systems
        crc2.lineTo(_x + 80, _y + 35);
        crc2.closePath();
        crc2.fillStyle = "black"; //Style 
        crc2.strokeStyle = "black";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
    }
    function dS(_x, _y) {
        for (var index = 0; index < 4; index++) { //100 random dreiecke zeichnen lassen 
            var x = Math.random() * 400; // 2 Zufallszahlen um die größe des koordinatensystems zu bestimmen in dem die dreiecke liegen sollen 
            var y = Math.random() * 300;
            crc2.beginPath();
            crc2.moveTo(_x, _y); //Zeichnen vom Dreieck 
            crc2.lineTo(_x, _y + 70); //Angabe der Punkte und des Systems
            crc2.lineTo(_x + 80, _y + 35);
            crc2.lineTo(_x, _y + 30);
            crc2.closePath();
            crc2.fillStyle = "black"; //Style 
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.fill();
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map