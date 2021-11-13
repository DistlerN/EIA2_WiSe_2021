var colorPicker; // Color Einstellen 
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    document.querySelectorAll("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
}
var colorWell;
var defaultColor = "#0000ff";
window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}
function updateFirst(event) {
    var p = document.querySelector("p");
    if (p) {
        p.style.color = event.target.value;
    }
}
function updateAll(event) {
    document.querySelectorAll("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
}
document.getElementById('button').onchange = function () {
    document.getElementById('hidden_field_id');
    string = document.getElementById('span_id').innerHTML;
    function startTimer() {
        var _this = this;
        startTimer();
        this.counter = { min: 00, sec: 60 }; // choose whatever you want
        var intervalId = setInterval(function () {
            if (_this.counter.sec - 1 == -1) {
                _this.counter.min -= 1;
                _this.counter.sec = 59;
            }
            else
                _this.counter.sec -= 1;
            if (_this.counter.min === 0 && _this.counter.sec == 0)
                clearInterval(intervalId);
        }, 1000);
    }
    var covered = new Image; //Karten verdeckt
    covered.src = "covered.gif";
    var num_fields = new Array();
    var temp_numbers = new Array(); //zufällige position der karten
    function init() {
        for (var t = 0; t < num_fields; t++) {
            temp_numbers[('M' + t)] = t;
        }
    }
};
//# sourceMappingURL=Memory.js.map