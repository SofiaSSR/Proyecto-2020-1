var ac = true;//abrir y cerrar el canvas
var pp = true;//play y pausa
var c;
var bool= true;//pausary reanudar la rotacion automatica
function mostrar(){
 if (ac==true){      
    document.getElementById('planes').style.display = 'block';
    ac=false;
    document.getElementById("pp").innerHTML= "cerrar";
    loop();
 }else{
    document.getElementById('planes').style.display = 'none';
    document.getElementById("pp").innerHTML= "abrir";
    noLoop();
    ac=true;
}}
function mecanismo(){
  if(pp){
    document.getElementById("ad").innerHTML = "play";
    noLoop();
    pp = false;
  }else{
    document.getElementById("ad").innerHTML = "pausa";
    Loop();
    pp= true;
}}
function setup(){ /*la principal para cargar*/
    canvas2= createCanvas(500,500);
    canvas2.parent("planop");
    noLoop();
}
function pendiente(x,pendiente){
  return((pendiente*x)-(pendiente*250)+250);
}
function draw(){
  background(190,100,100);
  stroke(155);
  for (var j =0;j<=12;j++){/*las lineas del plano */
    line(250,250,cos((j/12)*PI)*200+250,sin((j/12)*PI)*200+250);
    line(250,250,cos((j/12)*PI)*200+250,-sin((j/12)*PI)*200+250);
  }
  let count = 15;
  textSize(10);
  for(var i=40;i<=400;i+=40){
    stroke(155);
    noFill();
    circle(width/2,height/2,i);
    stroke(0);
    if((i/40)%2==1){
      let med= i/2;
      text(med,width/2+med+1,height/2);
      text(-med,width/2-med-count,height/2);
      text(med,width/2,height/2-med);
      text(-med,width/2,height/2+med+7);}
    count++;
  }
  line(width/2,0,width/2,height);/*las lineas de los ejes */
  line(0,height/2,width,height/2);
  text("y",width/2+20,20);    /*las marquitas de los ejes */
  text("x",width-20,height/2-20);
  fill(0);
  triangle(width-15,height/2-7,width-15,height/2+7,width,height/2);
  triangle(width/2+7,15,width/2-7,15,width/2,0);
  noFill();
  //let legend = 'your point is( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
  //document.getElementById("texto").innerHTML= legend;
  var mdiente= (mouseY-250)/(mouseX-250);
  if(mouseX<250) line(mouseX,mouseY,0,pendiente(0,mdiente));
  else if(mouseX>250) line(mouseX,mouseY,500,pendiente(500,mdiente));
  stroke(255,0,0);
  line(mouseX,mouseY,250,250);
  strokeWeight(5);
  point(mouseX,mouseY);
  strokeWeight(1);
  
  
}