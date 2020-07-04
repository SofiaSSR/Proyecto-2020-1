let t=0; //Variable de control
var kvieja ,amplitudvieja;
var colorin =[];
function setup() {
    canvas = createCanvas(400, 400);
    amplitu = createSlider(100,300,200);
    petalo = createSlider(2,25,4);
    canvas.parent("roses");
    amplitu.parent("rose");
    petalo.parent("rose");
    background(220);
}
function ecuacion(k,t,amplitud,xoy){
 if(xoy) return(cos(k*t)*cos(t)*amplitud)
 else return(cos(k*t)*sin(t)*amplitud)
}
function colores(r,g,b){
    colorin =[r,g,b];
}
function draw() {
  let  k=petalo.value();
  let  amplitud = amplitu.value();
  let paso= 0.2/k;
stroke(random(colorin[0]),random(colorin[1]),random(colorin[2]));
  translate(width/2,height/2);
  line(ecuacion(k,t,amplitud,true),ecuacion(k,t,amplitud,false),ecuacion(k,t-paso/2,amplitud,true),ecuacion(k,t-paso/2,amplitud,false));
  t+= paso;
  if(t>PI*k/2 || kvieja != k || amplitudvieja != amplitud){
    background(220);
    t=0;
  }
  kvieja = k;
  amplitudvieja = amplitud;
}