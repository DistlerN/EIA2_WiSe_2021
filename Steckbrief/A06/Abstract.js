var Canvas;
(function (Canvas) {
    window.addEventListener("load", hndlLoad);
    var crc2;
    function hndlLoad(_event) {
        var canvas = document.querySelector("canvas");
        console.log(canvas);
        function gradient() {
            var gradient = crc2.createLinearGradient(0, 0, 0, 2000); //Farbverlauf in pastell 
            gradient.addColorStop(.0, "#ffcccc");
            gradient.addColorStop(.30, "#ffe6cc"); //Farben 
            gradient.addColorStop(.60, "#ffffcc");
            gradient.addColorStop(.105, "#d9ffcc");
            gradient.addColorStop(.180, "#ccffff");
            gradient.addColorStop(.255, "#d9ccff");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, 200, 200); //Höhe des farbverlaufs in pixel 
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Abstract.js.map