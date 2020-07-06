let t=0; //Variable de control
var colorin =[];
var kvieja ;
function setup() {
    canvas = createCanvas(400, 400);
    petalo = createSlider(2,25,4);
    canvas.parent("roses");
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
  let  amplitud = 200;
  let paso= 0.2/k;
stroke(random(colorin[0]),random(colorin[1]),random(colorin[2]));
  translate(width/2,height/2);
  line(ecuacion(k,t,amplitud,true),ecuacion(k,t,amplitud,false),ecuacion(k,t-paso/2,amplitud,true),ecuacion(k,t-paso/2,amplitud,false));
  t+= paso;
  if(t>PI*k/2 || kvieja != k){
    background(220);
    t=0;
  }
  kvieja = k;
}