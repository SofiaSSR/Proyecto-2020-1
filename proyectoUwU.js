
function graficar(){
var n = document.getElementById("n");
n = Number(n);
return(n)

}
function texto(c1,c2,c3,texto){
  stroke(c1,c2,c3);
  textSize(32);
  text(texto,145,985);
  noStroke();
  noFill();
}
var fondo = 90;
function setup() {
  var canvas = createCanvas(1000,1000);
  canvas.parent("canvas")
  background(fondo,fondo,fondo);
  /* var button = createButton("stop");
  button.mousePressed(pausa(1)); */
}
var guardado ;//guarda el punto anterior 
var n = 4;// numero de ejes
var t = 0;//el punto inicial
/* function pausa(n){
  
  if (ano == true){
    var aumento = 0;
  }else{
    aumento =0.005;
  }
  return(aumento) } */
 var aumento =0.0065;//variacion entre los valores de t
  var grande =[] ;//guarda los puntos para hacer la curva entera
  var colorin1 = random(200);//parametro 1 del rgb
  var colorin2= random(240);//parametro 2 del rgb
  function draw() {
    strokeWeight((n/(n/5))-1.5);
      texto(fondo,fondo,fondo,guardado);
   var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);
  var py1 = -cos(t+aumento)*equation*100 + width/2;
   var px1 = -sin(t+aumento)*equation*100 +height/2;
  let legend = 'your point is( ' + nfc(px1,3) + ' , ' + nfc(py1,3) +' )'; 
  guardado = legend;
   var py2 = -cos(t)*equation*100 + width/2;
   var px2 = -sin(t)*equation*100 +height/2;
   var distancia = sqrt(((py1-py2)**2)+((px1-px2)**2));
    if(distancia>0.03 || px1 == 500.000 ){
      var chiquito = [px1,py1];
    grande.push(chiquito); 
   stroke(colorin1,0,colorin2);
  }else{
    stroke(colorin1,0,colorin2);
     beginShape();
     for (i=0;i<grande.length;i++){
     curveVertex(grande[i][0],grande[i][1]);
     }
     endShape();
     grande = [];
    stroke(colorin1 = random(200),colorin2= random(200),0);
   }
  point(px1,py1);
  texto(0,39,39,legend);
  //10**-3 + (10**-2)*(n/2)
  t+=aumento;
  }
