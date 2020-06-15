  var guardado;
  var t = 0;//el punto inicial
  var aumento =0.0065;//variacion entre los valores de t
  var grande =[] ;//guarda los puntos para hacer la curva entera
  var colorin1 = random(200);//parametro 1 del rgb
  var colorin2= random(240);//parametro 2 del rgb
  var colorin3= random(195);
  var nvieja = 4;
  var abrir= true;
  var pp = true;
  var discriminante = 0.009;
function setup() {
  slider = createSlider(1,25,4);
  canvas = createCanvas(1000,1000,WEBGL);
  canvas.parent("butterfly");
  slider.parent("slider");;
  noLoop();}
function mostrar(){
  if(abrir==true){
   document.getElementById('super').style.display = 'block';
   abrir=false;
   document.getElementById("oc").innerHTML= "CERRAR";
   loop();
  }else{
    document.getElementById('super').style.display = 'none';
    document.getElementById("oc").innerHTML= "ABRIR"; 
    noLoop();
    abrir=true;
  }}
function mecanismo(){
 if(pp){
  document.getElementById("pp").innerHTML = "Play";
  noLoop();
  pp = false;
 }else{
  document.getElementById("pp").innerHTML = "Pausa";
  loop();
  pp= true;
}}
function draw() {
  console.log(abrir);
  camera(0,0,(height/2)/ tan(PI/6),0,0,0,0,1,0);
  rotateX(PI/4);
  rotateX(frameCount*0,9999999999999999);
  stroke(colorin1,colorin2,colorin3);
  noFill();
  n = slider.value();// numero de ejes
  if (n != nvieja){
   background(190);
   grande = [];
   discriminante = 0.039;
   t=0;}
  strokeWeight((n/(n/5))-1.5);//grueso de las lineas y puntos
  var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);//ecuacion parametrica de la curva maiposa(una parte)
  var py1 = -cos(t+aumento)*equation*100 ;
  var px1 = -sin(t+aumento)*equation*100 ;
  let legend = 'your point is( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
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
    grande = [];
    stroke(colorin1 = random(200),colorin2= random(240),colorin3= random(195));
   }
  point(px1,py1,t);
  t+=aumento;
  nvieja = n;
  }
