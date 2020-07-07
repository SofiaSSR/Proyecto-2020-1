var pp = true;//play y pausa
var c;
var bool= true;//pausar y reanudar la rotacion automatica

function texto(nombre,string){//Para el texto al lado de las flechas 
  nombre.textAlign(CENTER);
  nombre.stroke(0)
  nombre.textSize(29);
  nombre.text(string,25,75);
}

function setup(){ 
  canvas2= createCanvas(400,400,WEBGL);
  canvas2.parent("plano3");
  X=createGraphics(100,100);
  texto(X,"X");
  Y=createGraphics(100,100);
  texto(Y,"Y");
  Z=createGraphics(100,100);
  texto(Z,"Z");
}

function escritos(textura,c1,c2,c3,cons,roty,rotx){//Ubica los conos y sus textos
  rotateZ(cons*PI/2);
  fill(0);
  texture(textura);
  plane(100,100,2,2); 
  fill(c1, c2,c3);
  if (cons!=1) 
    rotateZ(-cons*PI/2);
  rotateY(roty*PI/2);
  rotateX(rotx*PI/2);
  cone(7,20);
  rotateX(-rotx*PI/2);
  rotateY(-roty*PI/2);
}


function pr(){
  if (bool) {
    bool=false;
    document.getElementById("pr").innerHTML= "reanudar rotacion";
  }
  else{ 
    bool=true;
    document.getElementById("pr").innerHTML= "pausar rotacion";
  }       
}

function mecanismo(){
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
  fill(colorcitop);//es el color del stroke
  plane(width/2,height/2,2,2);
  line(x1,y1,z1,x2,y2,z2);//es el punto de inicio y del final de los ejes
}

function draw(){
  background(195);
  rotateX(-mouseX* 0.01);
  rotateY(-mouseY * 0.01);
  if(bool){
    rotateX(frameCount*0.001);
    rotateY(frameCount*0.001);
  }
  
  //Colorea los planos X Y Z
  
  //la textura o image es un color dado en hsba()
  
  //Plano X = textura(amarillo pollito), línea x1 y1 z1 x2 y2 z2
  dibujandop('hsba(58,63%,100%,0.5)', 0,-(width*5/10),0,  0,(width*5/10),0);
  rotateX(PI/2);
  //Plano Y = textura(menta mágica), línea x1 y1 z1 x2 y2 z2
  dibujandop('hsba(174,47%,100%,0.5)', 0,-(width*5/10),0,  0,(width*5/10),0);
  rotateY(PI/2);
  //Plano Ztextura(rosita), línea  x1 y1 z1  x2 y2 z2
  dibujandop('hsba(9,30%,100%,0.5)',  0,0,-(width*5/10),  0,0,(width*5/10));
  
  
  //Escribe X Y Z junto a los ejes
  
  translate(0,(width*5/10));
  escritos(X,254,237,95,0,-1,0);
  translate(0,-(width*5/10));
  
  translate(-(width*5/10),0);
  escritos(Y,155,239,250,-1,-1,1)
  
  translate((width*5/10),0,(width*5/10));
  rotateY(-3*PI/2);
  escritos(Z,254,165,150,1,0,0);
}
