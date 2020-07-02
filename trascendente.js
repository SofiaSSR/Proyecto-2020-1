var pp = true;//play y pausa
let x;
function mecanismo(){
  if(pp){
    document.getElementById("ad").innerHTML = "play";
    noLoop();
    pp = false;
  }else{
    document.getElementById("ad").innerHTML = "pausa";
    loop();
    pp = true;}}
function base(){
  x=0;
  background(220);
  line(-width/2,0,width/2,0);
  line(0,-height/2,0,height/2);
  text("y",20,-height/2+20);    /*las marquitas de los ejes */
  text("x",width/2-20,-20);
  triangle(width/2-15,-7,width/2-15,7,width/2,0);
  triangle(7,-height/2+15,-7,-height/2+15,0,-height/2);
}
function setup() {
  canvas = createCanvas(500,500);
  canvas.parent("iluminati");
  translate(width/2,height/2);
  base();
}
function draw() {
  translate(width/2,height/2);  
  point(x*10,sin(x)*40);
  point(-x*10,-sin(x)*40);
  x+=0.03;
 
  if(x>width/2/10){
    base();
  }
}