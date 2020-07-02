  var guardadisimo =[];//arreglo de las alas
  var t = 0;//el punto inicial
  var aumento =0.05;//variacion entre los valores de t
  var grande =[] ;//guarda los puntos para hacer la curva entera
  var colorin1 = random(200);//parametro 1 del rgb
  var colorin2= random(240);//parametro 2 del rgb
  var colorin3= random(195);//parametro 3 del rgb
  var nvieja = 4;
  var pp = true;
  var discriminante = 0.009;
function setup() {
  slidern = createSlider(1,25,4);
  speed = createSlider(6.5,65,35.75);
  canvas = createCanvas(500,500,WEBGL);
  canvas.parent("butterfly");
  slidern.parent("slider");
  speed.parent("speed");
  }
function mecanismo(){
 if(pp){
  document.getElementById("pp").innerHTML = "play";
  noLoop();
  pp = false;
  console.log("esta pausado");
 }else{
  document.getElementById("pp").innerHTML = "pausa";
  loop();
  console.log("esta corriendo");
  pp= true;
}}
function draw() {
  camera(0,0,(height/2)/ tan(PI/6),0,0,0,0,1,0);
  rotateX(PI/4);
  rotateX(frameCount*0,9999999999999999);
  stroke(colorin1,colorin2,colorin3);
  noFill();
  n = slidern.value();// numero de ejes
  var aumento = (speed.value())/1000;  //variacion entre los valores de t
  if (n != nvieja){
   background(190);
   grande = [];
   discriminante = 0.039*n/4;
   t=0;}
  strokeWeight((n/(n/5))-1.5);//grueso de las lineas y puntos
  var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);//ecuacion parametrica de la curva maiposa(una parte)
  var py1 = -cos(t+aumento)*equation*100 ;
  var px1 = -sin(t+aumento)*equation*100 ;
  let legend = 'El punto actual es ( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
  document.getElementById("texto").innerHTML= legend;
  var py2 = -cos(t)*equation*100 ;
  var px2 = -sin(t)*equation*100 ;
  var distancia = sqrt(((py1-py2)**2)+((px1-px2)**2));
  if(distancia>discriminante &&(( 499<=int(px1)<= 501)||(499<=int(py1)<= 501)) ){
    var chiquito = [px1,py1,t+aumento];
    grande.push(chiquito); 
    stroke(colorin1,colorin2,colorin3);
  }else{
    stroke(colorin1,colorin2,colorin3);
    noFill();
    beginShape();
    for (i=0;i<grande.length;i++)
      curveVertex(grande[i][0],grande[i][1],grande[i][2]);
    curveVertex(px2,py2,t);
    endShape();
    guardadisimo.push(grande);
    guardadisimo.push([colorin1,colorin2,colorin3]);
    grande = [];
    stroke(colorin1 = random(200),colorin2= random(240),colorin3= random(195));
   }
  point(px1,py1,t);
  t+=aumento;
  nvieja = n;
  }
