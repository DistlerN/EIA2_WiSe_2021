var L08_Canvas_Alley;
(function (L08_Canvas_Alley) {
    L08_Canvas_Alley.linewidth = 2;
    var moveables = [];
    window.addEventListener("load", handleLoad);
    var crc2;
    var golden = 0.62;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L08_Canvas_Alley.crc2 = canvas.getContext("2d");
        var horizon = L08_Canvas_Alley.crc2.canvas.height * golden;
        var streetWidthBack = 50;
        var streetWidthFront = 900;
        var treesOffsetBack = 15;
        var treesOffsetFront = 500;
        //let posMountains: Vector = { x: 0, y: horizon };
        //let posLeafs: Vector = {x: 400, y: 800}; 
        //let posStreet: Vector = { x: crc2.canvas.width / 2, y: horizon };
        //let posTreesStart: Vector = { x: posStreet.x - streetWidthBack / 2 - treesOffsetBack, y: horizon };
        //let posTreesEnd: Vector = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height };
        drawBackground();
    }
    function drawBackground() {
        console.log("Background");
        var gradient = L08_Canvas_Alley.crc2.createLinearGradient(0, 0, 0, L08_Canvas_Alley.crc2.canvas.height);
        gradient.addColorStop(0, "#e6f7ff");
        gradient.addColorStop(golden, "#ffa94d");
        gradient.addColorStop(1, "#267326");
        L08_Canvas_Alley.crc2.fillStyle = gradient;
        L08_Canvas_Alley.crc2.fillRect(0, 0, L08_Canvas_Alley.crc2.canvas.width, L08_Canvas_Alley.crc2.canvas.height);
    }
})(L08_Canvas_Alley || (L08_Canvas_Alley = {}));
//# sourceMappingURL=dings.js.map