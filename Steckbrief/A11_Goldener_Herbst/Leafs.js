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
    var Leaf = /** @class */ (function (_super) {
        __extends(Leaf, _super);
        function Leaf() {
            var _this = _super.call(this) || this;
            _this.position = new Vector(0, Math.random() * L11_Autumn.crc2.canvas.height);
            _this.velocity = new Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            _this.velocity.scale(drawLeafs.speed);
            _this.LeafRadius = 25;
            return _this;
        }
        Leaf.speed = 50;
        return Leaf;
    }(L11_Autumn.Moveable));
    L11_Autumn.Leaf = Leaf;
})(L11_Autumn || (L11_Autumn = {}));
//# sourceMappingURL=Leafs.js.map