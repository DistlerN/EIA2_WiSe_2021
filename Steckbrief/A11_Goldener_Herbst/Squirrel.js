var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L11_Autumn;
(function (L11_Autumn) {
    var Squirrel = /** @class */ (function (_super) {
        __extends(Squirrel, _super);
        function Squirrel(_size, _position) {
            var _this = _super.call(this, _position) || this;
            console.log("Squirrel walking");
            if (_position)
                _this.position = _position.copy();
            else
                _this.position = new Vector(0, 0);
            _this.velocity = new Vector(0, 0);
            _this.velocity.random(100, 200);
            _this.type = Math.floor(Math.random() * 4);
            _this.size = _size;
            return _this;
        }
        return Squirrel;
    }(L11_Autumn.Moveable));
    L11_Autumn.Squirrel = Squirrel;
})(L11_Autumn || (L11_Autumn = {}));
//# sourceMappingURL=Squirrel.js.map