var L11_Autumn;
(function (L11_Autumn) {
    var main;
    (function (main) {
    })(main = L11_Autumn.main || (L11_Autumn.main = {}));
    window.addEventListener("load", handleLoad);
    L11_Autumn.linewidth = 2;
    var moveables = [];
    function handleLoad(_event) {
        console.log("Squirrel walking");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Autumn.crc2 = canvas.getContext("2d");
        L11_Autumn.createPaths();
        createLeafs(5);
        createLeaf();
        createLeaf();
        createLeaf();
        window.setInterval(update, 20);
    }
    function throwNut(_origin) {
        console.log("throw Nut");
        var velocity = Vector.getRandom(200, 200);
        var nut = new Nut(_origin, velocity);
        nut.move(0.15);
        moveables.push(nut);
    }
})(L11_Autumn || (L11_Autumn = {}));
function createNuts(_nNuts) {
    console.log("Create Nuts");
    for (var i = 0; i < _nNuts; i++) {
        var Nuts = new Nut(1.0);
        moveables.push(Nuts);
    }
}
function createLeafs() {
    console.log("Create ufo");
    var leaf = new Leaf();
    moveables.push(leaf);
}
function update() {
    // console.log("Update");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
        var moveable = moveables_1[_i];
        moveable.move(1 / 50);
        moveable.draw();
    }
    deleteExpandables();
}
//# sourceMappingURL=main.js.map