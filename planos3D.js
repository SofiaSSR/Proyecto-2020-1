var pp = true;//Variable controlar play y pausa
var c;
var bool= true;//Pausar y reanudar la rotación automática

function texto(nombre,string){//Para el texto al lado de las flechas 
  nombre.textAlign(CENTER);
  nombre.stroke(0)
  nombre.textSize(29);
  nombre.text(string,25,75);
}

function setup(){ 
  canvas2= createCanvas(400,400,WEBGL);
  canvas2.parent("plano3");
  X=createGraphics(100,100);//Crea un plano o espacio de escritura llamado X de 100x100
  Y=createGraphics(100,100);
  Z=createGraphics(100,100);
  texto(X,"X");//x se debe escribir según la función texto()
  texto(Y,"Y");
  texto(Z,"Z");
}


function escritos(textura,c1,c2,c3,cons,roty,rotx){//Ubica los conos y sus textos
  //(textura, R, G, B, constante rotación Z, rotación Y, rotación X)
  rotateZ(cons*PI/2);
  fill(0);
  //Escribe respectivamente X Y o Z en negro 
  texture(textura);//textura puede ser X Y o Z
  
  plane(100,100,2,2); 
  fill(c1, c2,c3);
  
  if (cons==1) 
    rotateZ(cons*PI/2);
  
  rotateY(roty*PI/2);
  rotateX(rotx*PI/2);
  cone(7,20);//Crea cono de radio 7 y altura 20
  rotateX(-rotx*PI/2);
  rotateY(-roty*PI/2);
}


function pr(){//Activa/desactiva rotación automática
  if (bool) {
    bool=false;
    document.getElementById("pr").innerHTML= "reanudar rotacion";
  }
  else{ 
    bool=true;
    document.getElementById("pr").innerHTML= "pausar rotacion";
  }       
}


function mecanismo(){//Desactiva/Activa automática (si está activada) y rotación manual
  if(pp){
    document.getElementById("ad").innerHTML = "play";
    noLoop();
    pp = false;
  }
  else{
    document.getElementById("ad").innerHTML = "pausa";
    loop();
    pp= true;
  }
}

function dibujandop(colorcitop,x1,y1,z1,x2,y2,z2){//Para dibujar los planos
  fill(colorcitop);//color del plano
  plane(width/2,height/2,2,2);
  line(x1,y1,z1,x2,y2,z2);//Dibuja los ejes
}

function draw(){
  background(195);
  rotateX(-mouseX* 0.01);//Rotación manual
  rotateY(-mouseY * 0.01);
  if(bool){//Si está activada, rotación automática
    rotateX(frameCount*0.001);
    rotateY(frameCount*0.001);
  }
  
  //Colorea los planos X Y Z
  
  //La textura o imagen es un color dado en hsba() h=color, s=saturación, b=brillo, a=transparencia
  
  //Plano YZ = textura(amarillo pollito), línea x1 y1 z1 x2 y2 z2 = eje X
  dibujandop('hsba(58,63%,100%,0.5)', 0,-(width*5/10),0,  0,(width*5/10),0);
  rotateX(PI/2);
  //Plano XZ = textura(menta mágica), línea x1 y1 z1 x2 y2 z2 = eje Y
  dibujandop('hsba(174,47%,100%,0.5)', 0,-(width*5/10),0,  0,(width*5/10),0);
  rotateY(PI/2);
  //Plano XY =textura(rosita), línea  x1 y1 z1  x2 y2 z2 = eje Z
  dibujandop('hsba(9,30%,100%,0.5)',  0,0,-(width*5/10),  0,0,(width*5/10));
  
  
  //Escribe X Y Z junto a los ejes
  
  //escritos(  textura,  R,G,B, cons,roty,rotx){
  translate(0,(width*5/10));//Traslada
  escritos(  X,  254,237,95,  0,-1,0);
  translate(0,-(width*5/10));//Revierte el traslado
  
  translate(-(width*5/10),0);
  escritos(  Y,  155,239,250,  -1,-1,1)
  translate((width*5/10),0);
  
  translate(0,0,(width*5/10));
  rotateY(-3*PI/2);
  escritos(  Z,  254,165,150,  1,0,0);
}
