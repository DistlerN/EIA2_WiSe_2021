var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            // console.log("Moveable constructor");
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbst.Vector(0, 0);
        }
        Moveable.prototype.move = function (_timeslice) {
            // console.log("Moveable move");
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        };
        Moveable.prototype.draw = function () {
            // console.log("Moveable move");
        };
        return Moveable;
    }());
    L10_2_GoldenerHerbst.Moveable = Moveable;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=moveable.js.map