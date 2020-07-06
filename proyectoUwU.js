  var conjunto =[];//Arreglo de todas las alas 
  var t = 0;//Variable de control
  var colorin =[];//Arreglo de colores
  var aumento;//Aumento de la variable t en cada loop
  var delta = 0.1;//delta alrededor del centro
  var ala =[] ;//guarda los puntos para hacer la curva entera
  var nvieja = 4;//Número inicial de alas.
  var vuelta = false;
  var lento = 6.5;//Velocidad inicial
  var discriminante = 0.00559; //ver si se termina el ala
  var pp = true;//Play Pause Controla si la mariposa grafica
  var rotacion = false;//Controla si la mariposa rota
  function setup() {
    colorin =[255,255,255,random(255),random(255),random(255)];
    slidern = createSlider(1,40,4);
    speed = createSlider(5,65,6.5);
    canvas = createCanvas(500,500,WEBGL);
    canvas.parent("butterfly");
    slidern.parent("slider");
    speed.parent("speed");
  }

function mecanismo(){//Controla si se grafica la mariposa o no
 if(pp){
  document.getElementById("pp").innerHTML = "play";
  noLoop();
  pp = false;
 }
 else{
  document.getElementById("pp").innerHTML = "pausa";
  loop();
  pp= true;
 }
}

function rotacion3D(){//Controla si se rota la mariposa o no
  if(rotacion){
    document.getElementById("giro").innerHTML = "iniciar a rotar";
    rotacion = false;
   }
  else{
    document.getElementById("giro").innerHTML = "seguir graficando";
    rotacion = true;
    background(255,226,188);
}}
function colores(r,g,b){ 
  if(r==g && r != b) {
  colorin =[r,g,b,r-random(5),r-random(15),random(20)];}
  else colorin =[r,g,b,random(r),random(g),random(b)];}
function draw() {
 if(rotacion){
   background(255,226,188);
   rotateX(frameCount*0.02);
   rotateY(frameCount*0.02);
   for(var i = 0; i<conjunto.length; i++){
    beginShape();
     stroke(conjunto[i][1],conjunto[i][2],conjunto[i][3]);
     for(var j =0; j<conjunto[i][0].length;j+=10)
     curveVertex(conjunto[i][0][j][0],conjunto[i][0][j][1],conjunto[i][0][j][2]);
     endShape();
     }
 }else{
  //camera(0,0,(height/2)/ tan(PI/6),0,0,0,0,mouseX,0);
  rotateX(PI/4);
  stroke(colorin[3],colorin[4],colorin[4]);
  noFill();
  n = slidern.value();// numero de ejes
  var aumento = (speed.value())/1000; 
  if (n != nvieja ){
   background(255,226,188);
   ala = [];
   conjunto = [];
   discriminante = 0.00559/((n*speed.value()/26))/* ((aumento*1000)**(Math.log(n)))/2000*n */;
   t=0;}
  if(speed.value() != lento){
     discriminante = 0.00559/(n*speed.value()/26);
     console.log("cambio la velocida nueva discriminante es ",discriminante);}
  strokeWeight((n/(n/5))-1.5);//grueso de las lineas y puntos
  var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);//ecuacion parametrica de la curva maiposa(una parte)
  var py1 = -cos(t+aumento)*equation*100 ;
  var px1 = -sin(t+aumento)*equation*100 ;
  let legend = 'El punto actual es ( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
  document.getElementById("texto").innerHTML= legend;
  var py2 = -cos(t)*equation*100 ;
  var px2 = -sin(t)*equation*100 ;
  console.log(discriminante);
  var distancia = sqrt(((py1-py2)**2)+((px1-px2)**2));
  if(distancia>discriminante &&(-delta>=px1 || px1>=delta)){ 
    ala.push([px1,py1,t+aumento]); //mete las coordenadas del punto (x,y,z) en una lista y mete esa lista en la lista ala
  }
  else{//que pasa si los puntos estan muy unidos o el punto esta entre un intervalo cercano al centro? se cierra el ala 
    if(distancia<discriminante) console.log("fue la discriminante");
    if(-delta<=px1 && px1<=delta) console.log("fue el centro ");
   beginShape();//inicia la curva
    for(var i = 0; i<ala.length; i++)
        curveVertex(ala[i][0],ala[i][1],ala[i][2]);//este for va metiendo cada punto (ala[i]) con sus respectivas coordenadas para que la funcion shape las una en una curva continua
    endShape(); 
    conjunto.push([ala,colorin[3],colorin[4],colorin[5]]);//mete el ala en una lista de alas , junto con los colores de dicha ala , esta lista es llamada conjunto (conjunto es tooodo lo que se ha agraficado hasta el momento), 
    ala = []; // vacia el ala 
    if(colorin[0]==colorin[1] && colorin[0] != colorin[2]){
    colorin[3]=colorin[0]-random(5);
    colorin[4]= colorin[0]-random(15);
    colorin[5]= random(colorin[2]);

    }else{colorin[3]=random(colorin[0]);
    colorin[4]= random(colorin[1]);
    colorin[5]= random(colorin[2]);}
   }
  point(px1,py1,t)
  t+=aumento;
  nvieja = n;
  lento=speed.value();
  if(distancia<0.09) console.log(distancia, " discriminante ",discriminante);
  }}
