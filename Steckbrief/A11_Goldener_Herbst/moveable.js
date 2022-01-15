var L11_Autumn;
(function (L11_Autumn) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            // console.log("Moveable constructor");
            this.expendable = false;
            this.hitRadius = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
        }
        Moveable.prototype.move = function (_timeslice) {
            // console.log("Moveable move");
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Autumn.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Autumn.crc2.canvas.height;
            if (this.position.x > L11_Autumn.crc2.canvas.width)
                this.position.x -= L11_Autumn.crc2.canvas.width;
            if (this.position.y > L11_Autumn.crc2.canvas.height)
                this.position.y -= L11_Autumn.crc2.canvas.height;
        };
        return Moveable;
    }());
    L11_Autumn.Moveable = Moveable;
})(L11_Autumn || (L11_Autumn = {}));
//# sourceMappingURL=moveable.js.map