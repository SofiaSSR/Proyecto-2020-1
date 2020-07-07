var j=3;
var k=4;
var t=0;
var aumento = 0.0035;
var avieja = 1;
var bvieja= 60;
var cvieja =1;
var dvieja = 120;
var ala =[];
var colorin=[];
var conjunto =[];//Arreglo de todas las alas 
var rotacion = false;//Controla si la mariposa rota
function setup(){
 canvas = createCanvas(1000,1000,WEBGL);
 colorin =[255,255,255,random(255),random(255),random(255)];
 canvas.parent("parametricacool");
 saa = createSlider(1,200,1); 
 sbb = createSlider(1,200,60); 
 scc = createSlider(1,200,1); 
  sdd = createSlider(1,200,120); 
    saa.parent("slidea");
    sbb.parent("slideb");
    scc.parent("slidec");
    sdd.parent("slided");
    loop();
    background(170);
}
function rotacion3D(){//Controla si se rota la mariposa o no
    if(rotacion){
      document.getElementById("giro").innerHTML = "iniciar a rotar";
      rotacion = false;}
    else{
      document.getElementById("giro").innerHTML = "seguir graficando";
      rotacion = true;
      background(255,226,188);
}}
function colores(r,g,b){ //Permite graficar en un rango específico de colores
    if(r==g && r != b) {//Si se quiere graficar en amarillos
      colorin =[r,g,b,r-random(5),r-random(15),random(20)];
    }//Si se quiere graficar en otros colores
    else colorin =[r,g,b,random(r),random(g),random(b)];
}
function cambiafuncion(){
j=+10-(j*2);
k++;
background(255,226,188);}

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
function draw() {
    if(rotacion){ 
      background(255,226,188);
      rotateX(frameCount*0.007);
      rotateY(frameCount*0.007);
       beginShape();
      for(var i = 0; i<conjunto.length; i++){
       stroke(conjunto[i][1],conjunto[i][2],conjunto[i][3]);
       for(var ñ =0; ñ<conjunto[i][0].length;ñ+=1)
          curveVertex(conjunto[i][0][j][0],conjunto[i][0][j][1],conjunto[i][0][j][2]);
      endShape();}
    }else{
      stroke(colorin[3],colorin[4],colorin[5]);
      if (saa.value() != avieja || sbb.value()!= bvieja || scc.value()!= cvieja || sdd.value() != dvieja){//Si cambió algun parametro entonces 
        avieja = saa.value();
        bvieja = sbb.value();
        cvieja = scc.value();
        dvieja = sdd.value();
        background(255,226,188);//Borre lo anterior
        conjunto = [];}//Borre las alas guardadas en conjunto
      var py1 = sin(t*scc.value())-((sin(sdd.value()*t))**k)*300;//Coordenada y de la ecuacion
      var px1 = cos(t*saa.value())-((cos(sbb.value()*t))**j)*300;//Coordenada y de la mariposa, está dado por sin porque la mariposa está girada
      ala.push([px1,py1,t]); //Pone las coordenadas x y z en una lista y la añade como un elemento en ala
      noFill();
       if(ala.length == 100){
        for(var i = 1; i<ala.length; i++)//Para cada elemento o punto en ala
          line(ala[i-1][0],ala[i-1][1],ala[i-1][2],ala[i][0],ala[i][1],ala[i][2]);//Grafica punto con coordenadas x y z. Los une con una curva 
        conjunto.push(ala);//Guarda ala y su color en el conjunto (de alas)
        ala = []; // Vacía el ala 
      }
      point(px1,py1,t);//Grafique punto  
      t+=aumento;//Aumente t
      console.log(saa.value()+" "+sbb.value()+" "+scc.value()+" "+sdd.value());
}}
