var ac = true;
var c;
function mostrar2(){
    if (ac==true){
    document.getElementById('planes').style.display = 'block';
    document.getElementById("ac").innerHTML= "cerrar";
    loop();
    ac=false;
    }else{
    document.getElementById('planes').style.display = 'none';
    document.getElementById("ac").innerHTML= "abrir";
    noLoop();
    ac=true;
    }
}
function setup(){
    canvas = createCanvas(400,400,WEBGL);
    canvas.parent("planes");
}
function draw(){
    background(195);
     rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
   c= color('hsba(58,63%,100%,0.5)');
    fill(c);
    plane(width/2,height/2,2,2);//planox es amarillo pollito
    stroke(0);
     line(0,-(width*3/2),0,0,(width*3/2),0);// x
    c= color('hsba(174,47%,100%,0.5)');
    fill(c);
    rotateX(PI/2);
    plane(width/2,height/2,2,2);//planoy verde menta magica (literalmente asi decia en el picker de colores)
    stroke(0);
    line(0,-(width*3/2),0,0,(width*3/2),0);// y
    c= color('hsba(9,30%,100%,0.5)');
    fill(c);
    rotateY(PI/2);
    plane(width/2,height/2,2,2);//planozz es rosita
    stroke(0);
     line(0,0,-(width*3/2),0,0,(width*3/2));// z 
    

}