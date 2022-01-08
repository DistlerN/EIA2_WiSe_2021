namespace Autumm
//{interface: Vector; {
        //x: number;
        //y: number;}

    window.addEventListener("load", hndlLoad);
let crc2: CanvasRenderingContext2D;
let golden: number = 0.62;

function hndlLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    console.log(canvas);
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")

    let horizon: number = crc2.canvas.height * golden;

    drawBackground();
    drawSun({ x: 100, y: 75 }); //{}bedeuet das es als Vektorobjekt angegeben wird und an welcher position das objekt liegt 
    drawCloud({ x: 400, y: 200 }, { x: 250, y: 95 }); //das erste {} ist für die position das zweite {} steht für die Größe des Objekts
    drawCloud({ x: 200, y: 150 }, { x: 50, y: 25 });
    drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white"); //Funktion kann einfach kopiert werden, generiert werden 
    drawMountains({ x: 0, y: horizon }, 50, 130, "grey", "lightgrey"); //berge im vordergrund 
    drawTrees({ x: 0, y: horizon});
    drawSquirrel();
    drawLeafs();

}

function drawBackground(): void {
    console.log("background");
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height); //bestimmt, in welche Richtung der gradient angelegt werden soll 
    gradient.addColorStop(0, "#e6f7ff"); //die zahlen am anfang beziehen sich auf die position der farbe 
    gradient.addColorStop(golden, "#ffa94d");
    gradient.addColorStop(1, "#267326");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.height, crc2.canvas.width);

}
function drawSun(_position: Vector): void {
    console.log("sun");

    let r1: number = 10; //r = Rdaius 
    let r2: number = 60;
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

    gradient.addColorStop(0, "#ffe699");
    gradient.addColorStop(1, "#ff8c1a");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();

}
function drawCloud(_position: Vector, _size: Vector): void {
    console.log("Cloud");

    let nParticles: number = 30; //unbestimmte Anzahl an partikeln 
    let radiusParticle: number = 35;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

    gradient.addColorStop(0, "HSLA( 0, 100%, 100%, 0.5)");
    gradient.addColorStop(1, "HSLA( 0, 100%, 100%, 0.5)");

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.fillStyle = gradient;

    for (let drawn: number = 0; drawn < nParticles; drawn > drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * _size.x; //Wert zwischen 0 und 1, davon werden 0.5 abgezogen. Math random nimmt nur noch eine zahl zwischen o und 0.5 
        let y: number = - (Math.random() * _size.y); //Minus für die negative 

        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();

    }
    crc2.restore();



}
function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
console.log ("Mountains"); 

    let stepMin: number = 50;
    let stepMax: number = 150;
    let x: number = 0;

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.beginPath();

    do {
        x += stepMin + Math.random() * (stepMax - stepMin); //das soll getan werden während -----> 
        let y: number = - _min - Math.random() * (_max - _min);

        crc2.lineTo(x, y);
    }
    while (x < crc2.canvas.width);  // Soll stoppen wenn die anzahl größer ist als die breite des canvas 

    crc2.lineTo(x, 0);
    crc2.closePath();
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
    gradient.addColorStop(0, _colorHigh); //0 bestimmt das diese farbe ganz oben im gradienten auftaucht 
    gradient.addColorStop(0.7, _colorLow); //1 bestimmt das die farbe ganz unten im gradienten auftaucht 

    crc2.fillStyle = gradient;
    crc2.fill();

    crc2.restore();

}
function drawTrees( _position: Vector, _min:number, _max:number ): void{

}
function drawSquirrel(): void{

}
function drawLeafs(): void{
    crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(-116.729570, 83.888219);
	crc2.bezierCurveTo(-116.201790, 81.508562, -114.691390, 80.779127, -113.159850, 79.247594);
	crc2.bezierCurveTo(-112.678720, 78.766457, -113.048900, 78.121202, -112.445910, 77.819709);
	crc2.bezierCurveTo(-111.878230, 77.535870, -112.071580, 78.507613, -111.375000, 77.462739);
	crc2.bezierCurveTo(-111.242990, 77.264727, -111.507010, 76.946809, -111.375000, 76.748798);
	crc2.bezierCurveTo(-110.424540, 75.323112, -110.985300, 76.845968, -110.304080, 76.391827);
	crc2.bezierCurveTo(-109.377680, 75.774224, -109.759880, 75.754007, -109.233170, 74.963942);
	crc2.bezierCurveTo(-108.361150, 73.655903, -106.360280, 72.672476, -104.949520, 72.108173);
	crc2.bezierCurveTo(-104.728560, 72.019793, -104.473560, 72.108173, -104.235580, 72.108173);
	crc2.bezierCurveTo(-103.997590, 71.751202, -103.856650, 71.305268, -103.521630, 71.037259);
	crc2.bezierCurveTo(-103.444630, 70.975619, -101.429480, 70.422658, -101.379810, 70.323318);
	crc2.bezierCurveTo(-101.273380, 70.110460, -101.577820, 69.741382, -101.379810, 69.609374);
	crc2.bezierCurveTo(-101.082790, 69.411362, -100.647550, 69.722258, -100.308890, 69.609374);
	crc2.bezierCurveTo(-100.196010, 69.571744, -100.415320, 69.305616, -100.308890, 69.252403);
	crc2.bezierCurveTo(-99.380057, 68.787985, -97.755383, 69.046560, -96.739182, 68.538460);
	crc2.bezierCurveTo(-96.438158, 68.387949, -96.263221, 68.062498, -96.025239, 67.824518);
	crc2.bezierCurveTo(-95.549277, 67.586536, -95.091434, 67.308208, -94.597354, 67.110575);
	crc2.bezierCurveTo(-94.182876, 66.944784, -89.876576, 66.684400, -89.599758, 66.753604);
	crc2.bezierCurveTo(-89.417677, 66.799124, -89.242788, 68.441085, -89.242788, 68.895433);
	crc2.bezierCurveTo(-89.242788, 70.115889, -89.424898, 79.065484, -89.242788, 79.247594);
	crc2.bezierCurveTo(-88.279932, 80.210450, -85.260494, 76.611270, -84.602163, 76.391827);
	crc2.bezierCurveTo(-84.025996, 76.199771, -82.946461, 76.001966, -82.460334, 75.677884);
	crc2.bezierCurveTo(-82.180305, 75.491196, -82.047418, 75.114453, -81.746393, 74.963942);
	crc2.bezierCurveTo(-81.379850, 74.780668, -80.728906, 75.066540, -80.318508, 74.963942);
	crc2.bezierCurveTo(-76.819627, 74.089222, -73.251734, 73.893028, -69.609374, 73.893028);
	crc2.bezierCurveTo(-65.225096, 73.893028, -71.740894, 74.069796, -66.396634, 73.179084);
	crc2.bezierCurveTo(-65.575034, 73.042152, -64.727891, 73.248254, -63.897835, 73.179084);
	crc2.bezierCurveTo(-60.446173, 72.891448, -57.050468, 72.822114, -53.545673, 72.822114);
	crc2.bezierCurveTo(-53.069712, 72.822114, -52.454344, 72.485559, -52.117788, 72.822114);
	crc2.bezierCurveTo(-51.250775, 73.689127, -52.223939, 73.346298, -51.403845, 73.893028);
	crc2.bezierCurveTo(-51.182463, 74.040618, -50.808895, 74.012019, -50.689904, 74.249999);
	crc2.bezierCurveTo(-50.051670, 75.526468, -51.210458, 80.288706, -51.760818, 81.389423);
	crc2.bezierCurveTo(-51.879806, 81.627402, -52.327169, 81.525008, -52.474759, 81.746393);
	crc2.bezierCurveTo(-52.726544, 82.124073, -52.944127, 83.919093, -53.188700, 84.245192);
	crc2.bezierCurveTo(-53.446116, 84.588412, -53.956248, 84.655767, -54.259614, 84.959133);
	crc2.bezierCurveTo(-54.562983, 85.262502, -54.716142, 85.686827, -54.973558, 86.030048);
	crc2.bezierCurveTo(-56.480516, 88.039325, -62.216148, 91.231920, -64.254808, 91.741584);
	crc2.bezierCurveTo(-65.386399, 92.024482, -68.916636, 92.109159, -69.609374, 92.455528);
	crc2.bezierCurveTo(-71.003940, 93.152811, -72.400265, 93.584859, -73.893028, 93.883413);
	crc2.bezierCurveTo(-74.674549, 94.039715, -77.234562, 94.012207, -77.462739, 94.240383);
	crc2.bezierCurveTo(-78.316560, 95.094204, -74.397499, 95.877739, -73.536058, 96.739182);
	crc2.bezierCurveTo(-73.060096, 97.215144, -74.293306, 97.081717, -73.179084, 97.453123);
	crc2.bezierCurveTo(-72.603486, 97.644991, -71.969828, 97.618229, -71.394229, 97.810094);
	crc2.bezierCurveTo(-70.889396, 97.978372, -70.482599, 98.394974, -69.966344, 98.524038);
	crc2.bezierCurveTo(-69.504594, 98.639475, -69.005179, 98.430698, -68.538460, 98.524038);
	crc2.bezierCurveTo(-68.208439, 98.590038, -68.062498, 98.999999, -67.824518, 99.237979);
	crc2.bezierCurveTo(-67.229566, 99.832931, -66.686035, 100.484190, -66.039663, 101.022830);
	crc2.bezierCurveTo(-65.188139, 101.732440, -66.300018, 99.382902, -64.968749, 101.379810);
	crc2.bezierCurveTo(-64.618343, 101.905420, -65.167848, 103.281310, -64.968749, 103.878600);
	crc2.bezierCurveTo(-64.802868, 104.376250, -64.261023, 104.961950, -64.611778, 105.663460);
	crc2.bezierCurveTo(-64.780056, 106.000020, -65.346135, 105.852150, -65.682693, 106.020430);
	crc2.bezierCurveTo(-69.728365, 108.043270, -65.682693, 105.663460, -67.467548, 107.448320);
	crc2.bezierCurveTo(-67.753205, 107.733970, -71.311430, 107.794940, -71.394229, 107.805290);
	crc2.bezierCurveTo(-74.778610, 108.228340, -79.838385, 108.718240, -83.174278, 108.162260);
	crc2.bezierCurveTo(-83.436729, 108.118560, -83.624824, 107.842920, -83.888219, 107.805290);
	crc2.bezierCurveTo(-86.167626, 107.479660, -88.780259, 108.304700, -91.027643, 107.805290);
	crc2.bezierCurveTo(-91.547113, 107.689850, -91.961448, 107.288980, -92.455528, 107.091340);
	crc2.bezierCurveTo(-93.179944, 106.801580, -95.429042, 106.883420, -96.025239, 106.734370);
	crc2.bezierCurveTo(-103.820900, 104.785460, -94.549745, 107.064580, -99.237979, 105.306490);
	crc2.bezierCurveTo(-99.915685, 105.052350, -100.732430, 105.273190, -101.379810, 104.949520);
	crc2.bezierCurveTo(-102.995200, 104.141820, -105.266160, 103.849110, -107.091340, 103.164660);
	crc2.bezierCurveTo(-109.321370, 102.328400, -108.267200, 101.889030, -111.731970, 101.022830);
	crc2.bezierCurveTo(-112.770910, 100.763100, -113.960380, 101.444690, -114.944710, 101.022830);
	crc2.bezierCurveTo(-115.582440, 100.749520, -116.089110, 100.218780, -116.729570, 99.951922);
	crc2.bezierCurveTo(-116.857750, 99.898512, -120.299280, 99.296576, -120.299280, 98.881008);
	crc2.bezierCurveTo(-120.299280, 97.559954, -120.854540, 89.441082, -120.299280, 88.885817);
	crc2.bezierCurveTo(-120.215180, 88.801677, -120.026440, 88.969957, -119.942310, 88.885817);
	crc2.bezierCurveTo(-119.740600, 88.684115, -119.494280, 87.723849, -119.228360, 87.457932);
	crc2.bezierCurveTo(-119.040220, 87.269793, -118.702560, 87.289102, -118.514420, 87.100959);
	crc2.bezierCurveTo(-118.157450, 86.743989, -118.871390, 85.316104, -118.514420, 84.959133);
	crc2.bezierCurveTo(-118.346140, 84.790856, -117.968760, 85.127411, -117.800480, 84.959133);
	crc2.bezierCurveTo(-116.899540, 84.058195, -119.168410, 83.888219, -116.729570, 83.888219);
	crc2.stroke();
	
// #path74
	crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(-121.013220, 91.741584);
	crc2.bezierCurveTo(-121.489180, 91.741584, -121.989570, 91.892098, -122.441100, 91.741584);
	crc2.bezierCurveTo(-122.760390, 91.635158, -122.854020, 91.178157, -123.155050, 91.027643);
	crc2.bezierCurveTo(-123.367900, 90.921214, -123.635630, 91.074313, -123.868990, 91.027643);
	crc2.bezierCurveTo(-126.363520, 90.528737, -128.869550, 89.797415, -131.365380, 89.242788);
	crc2.bezierCurveTo(-132.370540, 89.019419, -138.081780, 88.819759, -138.147840, 88.885817);
	crc2.bezierCurveTo(-138.268540, 89.006525, -139.395110, 96.296159, -138.861780, 97.096153);
	crc2.bezierCurveTo(-138.729770, 97.294164, -138.360690, 96.989724, -138.147840, 97.096153);
	crc2.bezierCurveTo(-137.934980, 97.202581, -138.205540, 97.579218, -138.147840, 97.810094);
	crc2.bezierCurveTo(-138.056540, 98.175139, -137.999590, 98.567924, -137.790860, 98.881008);
	crc2.bezierCurveTo(-137.778560, 98.899478, -130.739060, 98.881008, -130.294470, 98.881008);
	crc2.bezierCurveTo(-129.434720, 98.881008, -126.392710, 99.373588, -125.653840, 98.881008);
	crc2.bezierCurveTo(-124.992480, 98.440096, -125.214090, 97.873898, -124.582930, 97.453123);
	crc2.bezierCurveTo(-124.361550, 97.305533, -124.016580, 97.317538, -123.868990, 97.096153);
	crc2.bezierCurveTo(-123.680160, 96.812903, -123.959490, 96.030287, -123.868990, 95.668268);
	crc2.bezierCurveTo(-123.516470, 94.258190, -122.872040, 94.125681, -122.084130, 92.812498);
	crc2.bezierCurveTo(-121.961690, 92.608433, -122.282140, 92.230563, -122.084130, 92.098557);
	crc2.bezierCurveTo(-121.771050, 91.889833, -121.370190, 91.860575, -121.013220, 91.741584);
	crc2.stroke();
	
// #path76
	crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(48.905048, 74.963942);
	crc2.bezierCurveTo(48.786057, 75.439904, 48.791486, 75.965856, 48.548075, 76.391827);
	crc2.bezierCurveTo(48.297610, 76.830144, 47.792531, 77.068531, 47.477163, 77.462739);
	crc2.bezierCurveTo(47.175922, 77.839289, 47.009261, 79.001556, 46.763220, 79.247594);
	crc2.bezierCurveTo(46.067458, 79.943358, 46.675290, 77.638610, 45.692308, 79.604567);
	crc2.bezierCurveTo(45.532664, 79.923851, 45.805193, 80.336828, 45.692308, 80.675479);
	crc2.bezierCurveTo(45.654678, 80.788363, 45.441764, 80.622269, 45.335335, 80.675479);
	crc2.bezierCurveTo(44.803194, 80.941549, 44.328146, 81.325698, 43.907450, 81.746393);
	crc2.bezierCurveTo(43.010722, 82.643122, 40.948144, 84.809236, 40.337739, 86.030048);
	crc2.bezierCurveTo(40.018456, 86.668617, 40.337739, 87.457932, 40.337739, 88.171873);
	crc2.bezierCurveTo(40.337739, 88.751110, 40.155886, 89.768142, 40.337739, 90.313702);
	crc2.bezierCurveTo(40.990411, 92.271717, 43.156888, 94.932353, 44.978364, 96.025239);
	crc2.bezierCurveTo(45.182432, 96.147680, 45.524030, 95.856961, 45.692308, 96.025239);
	crc2.bezierCurveTo(45.860586, 96.193516, 45.569867, 96.535114, 45.692308, 96.739182);
	crc2.bezierCurveTo(46.343085, 97.823813, 47.520717, 98.522331, 48.191105, 99.594952);
	crc2.bezierCurveTo(48.390534, 99.914037, 48.282005, 100.399790, 48.548075, 100.665860);
	crc2.bezierCurveTo(48.905048, 101.022830, 49.262019, 100.487380, 49.618989, 100.665860);
	crc2.bezierCurveTo(52.429896, 102.071320, 51.903759, 102.450720, 54.973558, 102.450720);
	crc2.bezierCurveTo(55.449520, 102.450720, 56.064885, 102.787280, 56.401443, 102.450720);
	crc2.bezierCurveTo(56.667513, 102.184650, 56.564818, 101.702460, 56.758413, 101.379810);
	crc2.bezierCurveTo(57.280042, 100.510420, 58.446915, 99.787656, 58.900239, 98.881008);
	crc2.bezierCurveTo(59.068517, 98.544453, 58.991139, 98.076167, 59.257210, 97.810094);
	crc2.bezierCurveTo(59.425487, 97.641816, 59.758296, 97.916523, 59.971153, 97.810094);
	crc2.bezierCurveTo(60.409968, 97.590688, 60.055983, 96.790421, 60.328124, 96.382209);
	crc2.bezierCurveTo(60.756159, 95.740155, 61.849375, 94.212919, 62.112979, 93.883413);
	crc2.bezierCurveTo(62.187309, 93.790493, 62.385812, 93.967553, 62.469950, 93.883413);
	crc2.bezierCurveTo(62.722368, 93.630995, 62.357068, 93.151152, 62.469950, 92.812498);
	crc2.bezierCurveTo(62.606634, 92.402452, 63.322194, 92.317228, 63.540864, 92.098557);
	crc2.bezierCurveTo(63.780119, 91.859303, 64.074706, 86.203688, 63.897835, 85.673077);
	crc2.bezierCurveTo(63.791409, 85.353791, 63.334404, 85.260158, 63.183894, 84.959133);
	crc2.bezierCurveTo(62.733515, 84.058378, 62.252629, 82.835013, 61.399038, 82.103364);
	crc2.bezierCurveTo(60.995006, 81.757051, 60.427459, 81.663206, 59.971153, 81.389423);
	crc2.bezierCurveTo(59.428795, 81.064006, 59.491194, 80.183145, 58.900239, 79.961538);
	crc2.bezierCurveTo(58.089133, 79.657373, 57.176251, 79.635000, 56.401443, 79.247594);
	crc2.bezierCurveTo(56.017710, 79.055729, 56.071232, 78.368548, 55.687499, 78.176683);
	crc2.bezierCurveTo(55.114367, 77.890115, 54.403010, 77.863032, 53.902644, 77.462739);
	crc2.bezierCurveTo(53.716811, 77.314075, 54.009072, 76.961652, 53.902644, 76.748798);
	crc2.bezierCurveTo(53.849434, 76.642369, 53.664175, 76.759568, 53.545673, 76.748798);
	crc2.bezierCurveTo(52.354744, 76.640530, 51.092091, 76.821108, 49.975960, 76.391827);
	crc2.bezierCurveTo(49.420666, 76.178250, 49.262019, 75.439904, 48.905048, 74.963942);
	crc2.stroke();
	
// #path78
	crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(48.905048, 74.963940);
	crc2.bezierCurveTo(48.561833, 76.369150, 48.225979, 78.155135, 48.548075, 79.604567);
	crc2.bezierCurveTo(48.687082, 80.230090, 49.136350, 80.761082, 49.262019, 81.389423);
	crc2.bezierCurveTo(49.378697, 81.972821, 49.155590, 82.588922, 49.262019, 83.174278);
	crc2.bezierCurveTo(50.988369, 88.353333, 49.430849, 82.928210, 49.975960, 86.743989);
	crc2.bezierCurveTo(50.279424, 88.868220, 50.339907, 86.764919, 51.046874, 88.885817);
	crc2.bezierCurveTo(51.312944, 89.684028, 51.137774, 90.586403, 51.403845, 91.384614);
	crc2.bezierCurveTo(51.766353, 92.472141, 52.910927, 93.129289, 53.188700, 94.240383);
	crc2.bezierCurveTo(53.315626, 94.748082, 53.745783, 97.296262, 53.902644, 97.453123);
	crc2.bezierCurveTo(54.090784, 97.641263, 54.523163, 97.560965, 54.616585, 97.810094);
	crc2.bezierCurveTo(55.716651, 100.743600, 54.453213, 99.734091, 55.687499, 101.379810);
	crc2.bezierCurveTo(55.822021, 101.559170, 56.758413, 104.041770, 56.758413, 102.807690);
	crc2.stroke();
	
// #path80
	crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(148.500000, 43.550480);
	crc2.bezierCurveTo(145.436720, 45.082118, 148.376410, 43.317093, 146.358170, 45.335335);
	crc2.bezierCurveTo(146.335970, 46.340474, 145.553330, 45.426235, 145.287260, 45.692308);
	crc2.bezierCurveTo(144.910980, 46.068588, 145.016080, 46.825013, 144.573320, 47.120193);
	crc2.bezierCurveTo(144.260230, 47.328915, 143.815490, 47.268439, 143.502400, 47.477163);
	crc2.bezierCurveTo(143.403400, 47.543163, 143.586500, 47.749994, 143.502400, 47.834134);
	crc2.bezierCurveTo(143.081710, 48.254829, 142.544140, 48.539783, 142.074520, 48.905048);
	crc2.bezierCurveTo(139.983600, 50.531315, 137.847740, 52.032468, 136.362980, 54.259614);
	crc2.bezierCurveTo(134.918180, 56.426811, 137.390590, 53.141890, 135.649040, 56.044470);
	crc2.bezierCurveTo(135.475880, 56.333064, 135.085610, 56.457389, 134.935090, 56.758413);
	crc2.bezierCurveTo(134.249060, 58.130474, 134.500780, 59.643909, 134.221150, 61.042068);
	crc2.bezierCurveTo(133.964220, 62.326755, 133.050200, 63.327091, 132.793270, 64.611778);
	crc2.bezierCurveTo(132.172600, 67.715124, 132.436300, 71.052935, 132.436300, 74.249999);
	crc2.bezierCurveTo(132.436300, 76.153845, 132.436300, 78.057692, 132.436300, 79.961538);
	crc2.bezierCurveTo(132.436300, 80.556491, 131.904160, 81.480323, 132.436300, 81.746393);
	crc2.bezierCurveTo(133.449380, 82.252933, 138.581680, 81.529472, 139.575720, 81.032452);
	crc2.bezierCurveTo(139.876750, 80.881939, 139.980320, 80.451083, 140.289660, 80.318508);
	crc2.bezierCurveTo(145.773430, 77.968323, 137.826290, 82.442620, 144.216340, 79.247594);
	crc2.bezierCurveTo(145.556810, 78.577362, 146.924030, 77.204492, 148.143030, 76.391827);
	crc2.bezierCurveTo(150.344490, 74.924181, 148.493860, 76.514909, 151.355770, 74.606969);
	crc2.bezierCurveTo(153.098800, 73.444951, 154.460130, 72.141645, 156.353360, 71.037259);
	crc2.bezierCurveTo(156.678390, 70.847661, 157.118090, 70.898995, 157.424280, 70.680288);
	crc2.bezierCurveTo(159.098720, 69.484255, 160.779310, 67.582372, 162.064900, 66.039663);
	crc2.bezierCurveTo(162.302880, 65.801681, 162.540860, 65.563702, 162.778850, 65.325719);
	crc2.bezierCurveTo(163.016820, 65.206731, 163.304650, 65.156889, 163.492790, 64.968749);
	crc2.bezierCurveTo(164.772580, 63.688954, 167.258080, 59.384406, 167.776440, 57.829325);
	crc2.bezierCurveTo(167.926950, 57.377790, 167.563580, 56.827155, 167.776440, 56.401443);
	crc2.bezierCurveTo(168.042510, 55.869300, 168.638450, 55.530628, 168.847350, 54.973558);
	crc2.bezierCurveTo(168.930650, 54.751443, 168.784850, 52.849578, 168.847350, 52.474759);
	crc2.bezierCurveTo(169.517630, 48.453119, 169.204330, 44.112534, 169.204330, 39.980769);
	crc2.bezierCurveTo(169.204330, 39.855565, 169.340890, 38.332481, 169.204330, 38.195914);
	crc2.bezierCurveTo(168.941030, 37.932614, 165.512320, 38.195914, 164.563700, 38.195914);
	crc2.bezierCurveTo(161.838150, 38.195914, 158.848520, 37.929095, 156.353360, 38.552884);
	crc2.bezierCurveTo(155.728930, 38.708994, 155.735590, 39.397225, 155.282450, 39.623798);
	crc2.bezierCurveTo(154.206310, 40.161868, 152.176120, 39.588328, 150.998800, 39.980769);
	crc2.bezierCurveTo(150.286550, 40.218185, 150.273060, 41.420446, 149.927880, 41.765624);
	crc2.bezierCurveTo(148.884650, 42.808858, 148.500000, 41.829774, 148.500000, 43.550480);
	crc2.stroke();
	
// #path82
	crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(169.204330, 37.481970);
	crc2.bezierCurveTo(169.370700, 36.196529, 167.877300, 31.312598, 169.204330, 29.985575);
	crc2.bezierCurveTo(169.485870, 29.704032, 170.775690, 28.841181, 170.989180, 28.200720);
	crc2.bezierCurveTo(171.328740, 27.182042, 171.178530, 25.792976, 172.774040, 26.058894);
	crc2.bezierCurveTo(175.898150, 26.579581, 177.564820, 29.571201, 180.627400, 30.699519);
	crc2.bezierCurveTo(182.008480, 31.208339, 183.461620, 31.514650, 184.911060, 31.770433);
	crc2.bezierCurveTo(185.731310, 31.915184, 186.820880, 31.181460, 187.409850, 31.770433);
	crc2.bezierCurveTo(188.073280, 32.433863, 186.095790, 35.940261, 185.981970, 36.054085);
	crc2.bezierCurveTo(185.188200, 36.847851, 184.177280, 37.444788, 183.126200, 37.838943);
	crc2.bezierCurveTo(180.744450, 38.732097, 169.339690, 38.909855, 166.705530, 38.909855);
	crc2.bezierCurveTo(166.586540, 38.909855, 167.009280, 39.016283, 167.062500, 38.909855);
	crc2.bezierCurveTo(167.428670, 38.177512, 166.988500, 37.481970, 168.133410, 37.481970);
	crc2.bezierCurveTo(170.156250, 37.481970, 172.179080, 37.481970, 174.201920, 37.481970);
	crc2.stroke();
	
// #path84
	crc2.beginPath();
	crc2.strokeStyle = 'rgb(0, 0, 0)';
	crc2.lineWidth = 0.070004;
	crc2.lineCap = 'butt';
	crc2.lineJoin = 'miter';
	crc2.moveTo(169.204330, 37.481970);
	crc2.bezierCurveTo(166.777470, 39.908826, 166.698730, 39.713699, 164.920670, 42.479568);
	crc2.bezierCurveTo(163.864150, 44.123046, 162.590420, 46.069157, 161.707930, 47.834134);
	crc2.bezierCurveTo(160.591160, 50.067683, 159.999070, 52.398763, 158.138220, 54.259614);
	crc2.bezierCurveTo(152.448350, 59.949487, 159.665550, 51.847040, 153.854570, 58.186298);
	crc2.bezierCurveTo(153.226590, 58.871368, 152.726860, 59.670978, 152.069710, 60.328124);
	crc2.bezierCurveTo(151.412560, 60.985270, 150.560260, 61.431963, 149.927880, 62.112979);
	crc2.bezierCurveTo(149.004720, 63.107159, 148.349310, 64.328814, 147.429090, 65.325719);
	crc2.bezierCurveTo(146.499860, 66.332382, 144.588240, 67.262946, 143.859370, 68.538460);
	crc2.bezierCurveTo(143.615960, 68.964428, 143.721810, 69.527530, 143.502400, 69.966344);
	crc2.bezierCurveTo(143.166970, 70.637206, 142.072950, 72.020887, 141.717550, 72.465143);
	crc2.bezierCurveTo(141.191940, 73.122157, 140.308970, 73.497439, 139.932690, 74.249999);
	crc2.bezierCurveTo(139.764800, 74.585776, 139.668460, 76.299088, 139.575720, 76.391827);
	crc2.bezierCurveTo(139.553320, 76.414187, 137.494480, 77.994927, 137.433890, 78.176683);
	crc2.bezierCurveTo(137.358690, 78.402449, 137.576680, 78.700240, 137.433890, 78.890624);
	crc2.bezierCurveTo(136.859490, 79.656494, 135.165780, 80.087818, 134.578120, 80.675479);
	crc2.bezierCurveTo(134.389980, 80.863619, 134.409290, 81.201283, 134.221150, 81.389423);
	crc2.stroke();

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, _colorHigh); //0 bestimmt das diese farbe ganz oben im gradienten auftaucht 
    gradient.addColorStop(0.7, _colorLow);
}
}