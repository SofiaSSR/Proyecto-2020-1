
function graficar(){
var n = document.getElementById("n");
n = Number(n);
return(n)

}
function setup() {
  var canvas = createCanvas(1000,1000);
  canvas.parent("canvas")
  background(3);
  /* var button = createButton("stop");
  button.mousePressed(pausa(1)); */
}
var guardado ;
var n = 20;// numero de ejes
var t = 0;//el punto inicial
/* function pausa(n){
  
  if (ano == true){
    var aumento = 0;
  }else{
    aumento =0.005;
  }
  return(aumento) } */
 var aumento =0.005;//variacion entre los valores de 
  var grande =[]
  var color1 = random(250);
  var color2= random (250);
function draw() {
    if (n ==0 ) {
      console.allert("eso no se puede");
    }else{
      stroke(3);
      textSize(32);
      text(guardado,145,985);
   var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);
  var py1 = -cos(t+aumento)*equation*100 + width/2;
   var px1 = -sin(t+aumento)*equation*100 +height/2;
  let legend = 'your point is( ' + nfc(px1,3) + ' , ' + nfc(py1,3) +' )'; 
  guardado = legend;
   var py2 = -cos(t)*equation*100 + width/2;
   var px2 = -sin(t)*equation*100 +height/2;
   var distancia = sqrt(((py1-py2)**2)+((px1-px2)**2));
    console.log(distancia);
   var chiquito = [px1,py1];
    grande.push(chiquito); 
   if(distancia>0.04){
   stroke(0,color1,color2);
   }else{
    stroke(color1 = random(250),0,color2= random(250));
   }
  strokeWeight((n/(n/5))-1.5);
  point(px1,py1);
  stroke("white");
  fill("white");
  textSize(32);
  text(legend,145,985);
  noStroke();
  //10**-3 + (10**-2)*(n/2)
  t+=aumento;
  }
}