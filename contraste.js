var radiux = 15;
function encuentralalle(laequis){
    return(265/(laequis**2))}
function setup(){ /*la principal para cargar*/
      canvas2= createCanvas(1000,500);
      canvas2.parent("contraste");}
function pendiente(x,pendiente){
    return((pendiente*x)-(pendiente*250)+250);}
function contando(texto,x,y){
text(texto,x,y);
text(texto,x+500,y);
}
function draw(){
    fill(190,100,100);
    square(0,0,height);
    fill(105, 189, 210);
    square(width/2,0,height);
    noFill();
    stroke(155);
    for (var j =0;j<=12;j++){/*las lineas del plano grises*/
      line(250,250,cos((j/12)*PI)*200+250,sin((j/12)*PI)*200+250);
      line(250,250,cos((j/12)*PI)*200+250,-sin((j/12)*PI)*200+250);
    }
    let count = 15;
    textSize(10);
    for(var i=40;i<=400;i+=40){/*los circulos con las marcas de medida  */
      stroke(155);
      noFill();
      circle(width/4,height/2,i);
      stroke(0);
      if((i/40)%2==1){
        let med= i/2;
        contando(med,width/4+med+1,height/2);
        contando(-med,width/4-med-count,height/2);
        contando(med,width/4,height/2-med);
        contando(-med,width/4,height/2+med+7);}
      count++;
    }
    line(width/4,0,width/4,height);/*las lineas de los ejes */
    line(width*3/4,0,width*3/4,height);
    line(0,height/2,width,height/2);
    text("y",width/4+20,20);
    text("y",width*3/4+20,20);    /*las marquitas de los ejes */
    text("x",width-20,height/2-20);
    fill(0);
    triangle(width-15,height/2-7,width-15,height/2+7,width,height/2);
    triangle(width/4+7,15,width/4-7,15,width/4,0);
    triangle(width*3/4+7,15,width*3/4-7,15,width*3/4,0);
    noFill();
    //let legend = 'your point is( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
    var mdiente= (mouseY-250)/(mouseX-250);
    if(mouseX<500){
    if(mouseX<250) line(mouseX,mouseY,0,pendiente(0,mdiente));
    else if(mouseX>250) line(mouseX,mouseY,500,pendiente(500,mdiente));
    stroke(255,0,0);
    line(mouseX,mouseY,250,250);
    strokeWeight(5);
    point(mouseX,mouseY);
    point(mouseX+(width/2),mouseY);}
    strokeWeight(1);
    let medida= sqrt(((mouseX-250)**2) +(mouseY-250)**2 );
    let angler = Math.atan2((mouseY-250),(mouseX -250));
    if(angler<0) angler*=-1;
    else angler= (PI*2)-angler;
    fill('hsba(9,30%,100%,0.5)');
    arc(250,250,20,20,-angler,0,PIE);
    noFill();
    let angled = angler * 180 / PI;
    angler /= PI;
    document.getElementById("texto").innerHTML = 'Tu punto polar es :( ' + nfc(medida,3)+'  ,  '+ nfc(angled,3) +'°)\t\t\t';
    document.getElementById("texto").innerHTML += 'y tu punto coordenado es:( ' + nfc(mouseX-250,3)+'  ,  '+ nfc(-(mouseY-250),3) +')\t\t\t';
  }