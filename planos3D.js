var ac = true;
var c;
function setup(){
    canvas2= createCanvas(400,400,WEBGL);
    canvas2.parent("planes"); 
}
function mostrar2(){
    if (ac==true){
        document.getElementById('planes').style.display = 'block';
        document.getElementById("ac").innerHTML= "cerrar";
        ac=false;
    }else{
        document.getElementById('planes').style.display = 'none';
        document.getElementById("ac").innerHTML= "abrir";
    ac=true;
}
}
function dibujandop(colorcitop,x1,y1,z1,x2,y2,z2){
    fill(colorcitop);//es el color del stroke
    plane(width/2,height/2,2,2);
    /* for(i=-(width/2);i>=(width/2);i+=(width*1/10)){
        if(z2>y2){
            console.log(dibujo);
            line(0,0,-(i),0,0,i);
        }else{
            line(-(i),-width/2,0,i,width/2,0); }
        } */
        line(x1,y1,z1,x2,y2,z2);//es el punto de inicio y del final de las lineas de los ejes
    }
    function draw(){
        if(ac==false){
            background(195);
             rotateX(-mouseX* 0.01);
             rotateX(frameCount*0.001);
            rotateY(-mouseY * 0.01);
            rotateY(frameCount*0.001);
            dibujandop('hsba(58,63%,100%,0.5)',0,-(width*5/10),0,0,(width*5/10),0);//planox es amarillo pollito y eje x es 0,-(width*5/10),0,0,(width*5/10),0
            rotateX(PI/2);
            dibujandop('hsba(174,47%,100%,0.5)',0,-(width*5/10),0,0,(width*5/10),0);//planoy verde menta magica (literalmente asi decia en el picker de colores) eje y es 0,-(width*5/10),0,0,(width*5/10),0
            rotateY(PI/2);
            dibujandop('hsba(9,30%,100%,0.5)',0,0,-(width*5/10),0,0,(width*5/10),"z");//planozz es rosita y su eje es 0,0,-(width*5/10),0,0,(width*5/10)
            translate(0,(width*5/10));
            fill(254, 237, 95);
            rotateY(-PI/2);
            cone(7,20);
            rotateY(PI/2);
            translate(0,-(width*5/10));
            translate(-(width*5/10),0);
            fill(155, 239, 250);
            rotateY(-PI/2);
            rotateX(PI/2);
            cone(7,20);
            rotateX(-PI/2);
            rotateY(PI/2);
            translate((width*5/10),0);
            translate(0,0,(width*5/10));
            fill(254, 165, 150);
            rotateX(PI/2);
            cone(7,20);
            rotateX(-PI/2);
            translate(0,0,-(width*5/10));
            noFill();

}} 
