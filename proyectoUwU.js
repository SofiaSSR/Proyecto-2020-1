  var guardadisimo =[];//arreglo de las alas
  var t = 0;//el punto inicial
  var colorin =[];//colores
  var aumento =0.05;//variacion entre los valores de t
  var grande =[] ;//guarda los puntos para hacer la curva entera
  var nvieja = 4;
  var pp = true;
  function setup() {
    colorin =[0,0,0,random(255),random(255),random(255)];
    slidern = createSlider(1,25,4);
    speed = createSlider(6.5,65,6.5);
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
function colores(r,g,b){
  colorin =[r,g,b,random(r),random(g),random(b)];}

function draw() {
  //camera(0,0,(height/2)/ tan(PI/6),0,0,0,0,mouseX,0);
  rotateX(PI/4);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  stroke(colorin[3],colorin[4],colorin[4]);
  noFill();
  n = slidern.value();// numero de ejes
  var aumento = (speed.value())/1000; 
  var discriminante = 0.0039*4/n; //variacion entre los valores de t
  if (n != nvieja){
   background(190);
   grande = [];
   discriminante = ((aumento*1000)**(Math.log(n)))/2000*n;
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
  }else{
    guardadisimo.push([grande,colorin[3],colorin[4],colorin[5]]);
    grande = [];
    colorin[3]=random(colorin[0]);
    colorin[4]= random(colorin[1]);
    colorin[5]= random(colorin[2]);
   }
  /* beginShape();
  for(var i = 0; i<guardadisimo.length; i++){
    for(var j =0; j<guardadisimo[i][0].length;j+=5){
      stroke(guardadisimo[i][1],guardadisimo[i][2],guardadisimo[i][3]);
      curveVertex(guardadisimo[i][0][0],guardadisimo[i][0][1],guardadisimo[i][0][2]);
    }
  }
  endShape(); */
  for(var i = 0; i<guardadisimo.length; i++){
    for(var j =0; j<guardadisimo[i][0].length;j+=5){
      console.log(guardadisimo[i][1]+"  "+guardadisimo[i][2]+"  "+guardadisimo[i][3]);
      console.log(guardadisimo[i][0][0]+"  "+guardadisimo[i][0][1]+"  "+guardadisimo[i][0][2]);
  t+=aumento;
  nvieja = n;
  console.log(discriminante);
  }
