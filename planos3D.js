var pp = true;//play y pausa
var c;
var bool= true;//pausary reanudar la rotacion automatica
function textito(nombre,string){/*para hacer el texto al lado de las flechas */
  nombre.textAlign(CENTER);
  nombre.stroke(0)
  nombre.textSize(29);
  nombre.text(string,25,75);
}
function setup(){ /*la principal para cargar*/
  canvas2= createCanvas(400,400,WEBGL);
  canvas2.parent("plano3");
  equis=createGraphics(100,100);
  textito(equis,"X");
  lle=createGraphics(100,100);
  textito(lle,"Y");
  zeta=createGraphics(100,100);
  textito(zeta,"Z");
}
function escritos(textura,c1,c2,c3,cons,roty,rotx){/*para posicionar el texto y los conos */
  rotateZ(cons*PI/2);
  fill(0);
  texture(textura);
  plane(100,100,2,2); 
  fill(c1, c2,c3);
  if (cons!=1) rotateZ(-cons*PI/2);
  rotateY(roty*PI/2);
  rotateX(rotx*PI/2);
  cone(7,20);
  rotateX(-rotx*PI/2);
  rotateY(-roty*PI/2);
}
//funciones de mecanismo de apertura y cierre
function pr(){
    if (bool) {bool=false;
      document.getElementById("pr").innerHTML= "reanudar rotacion";}
    else{ bool=true;
      document.getElementById("pr").innerHTML= "pausar rotacion";}       
}
function mecanismo(){
    if(pp){
      document.getElementById("ad").innerHTML = "play";
      noLoop();
      pp = false;
    }else{
      document.getElementById("ad").innerHTML = "pausa";
      loop();
      pp= true;
    }}
function dibujandop(colorcitop,x1,y1,z1,x2,y2,z2){/*para dibujar los planos y ejes */
  fill(colorcitop);//es el color del stroke
  plane(width/2,height/2,2,2);
  line(x1,y1,z1,x2,y2,z2);//es el punto de inicio y del final de los ejes
 }
function draw(){
 background(195);
 rotateX(-mouseX* 0.01);
 if(bool){
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);}
 rotateY(-mouseY * 0.01);
 dibujandop('hsba(58,63%,100%,0.5)',0,-(width*5/10),0,0,(width*5/10),0);//planox es amarillo pollito y eje x es 0,-(width*5/10),0,0,(width*5/10),0
 rotateX(PI/2);
 dibujandop('hsba(174,47%,100%,0.5)',0,-(width*5/10),0,0,(width*5/10),0);//planoy verde menta magica (literalmente asi decia en el picker de colores) eje y es 0,-(width*5/10),0,0,(width*5/10),0
 rotateY(PI/2);
 dibujandop('hsba(9,30%,100%,0.5)',0,0,-(width*5/10),0,0,(width*5/10),"z");//planozz es rosita y su eje es 0,0,-(width*5/10),0,0,(width*5/10)
 translate(0,(width*5/10));
 escritos(equis,254,237,95,0,-1,0);
 translate(0,-(width*5/10));
 translate(-(width*5/10),0);
 escritos(lle,155,239,250,-1,-1,1)
 translate((width*5/10),0,(width*5/10));
 rotateY(-3*PI/2);
 escritos(zeta,254,165,150,1,0,0);
}
