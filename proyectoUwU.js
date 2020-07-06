  var conjunto =[];//Arreglo de todas las alas 
  var t = 0;//Variable de control
  var colorin =[];//Arreglo de colores
  var aumento;//Aumento de la variable t en cada loop
  var delta = 0.1;//delta alrededor del centro
  var ala =[] ;//guarda los puntos para hacer la curva entera
  var nvieja = 4;//Número inicial de alas. 
  var lento = 6.5;//Velocidad inicial
  var pp = true;//Play Pause Controla si la mariposa grafica
  var rotacion = false;//Controla si la mariposa rota
  function setup() {
    colorin =[0,0,0,random(255),random(255),random(255)];
    slidern = createSlider(1,25,4);
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
  }
}

function colores(r,g,b){
  colorin =[r,g,b,random(r),random(g),random(b)];
}


function draw() {
  
  if(rotacion){ //Si rotacion==true entonces 
    background(255,226,188);//Borra lo anterior
    rotateX(-mouseX* 0.01);//Rote
    rotateX(frameCount*0.02);
    rotateY(frameCount*0.02);
    rotateY(-mouseY * 0.01);
    beginShape();//Dibuje todos los puntos con la nueva rotación
    for(var i = 0; i<conjunto.length; i++){
      for(var j =0; j<conjunto[i][0].length;j+=10){
        stroke(conjunto[i][1],conjunto[i][2],conjunto[i][3]);
        curveVertex(conjunto[i][0][j][0],conjunto[i][0][j][1],conjunto[i][0][j][2]);
      }
    }
    endShape();
  }
  
  else{
    rotateX(PI/4);
    stroke(colorin[3],colorin[4],colorin[4]);
    noFill();
    n = slidern.value();// Número de ejes, modificado por slidern
    var aumento = (speed.value())/1000; 
    var discriminante = 0.00559; //variacion entre los valores de t
    if (n != nvieja ){
      background(255,226,188);
      ala = [];
      conjunto = [];
      discriminante = 0.00559/* ((aumento*1000)**(Math.log(n)))/2000*n */;
      t=0;
    }
    if(speed.value() != lento){
      discriminante = 0.00559*4/n;
    }
    strokeWeight((n/(n/5))-1.5);//grueso de las lineas y puntos
    var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);//Ecuación parcial de la curva mariposa
    var py1 = -cos(t+aumento)*equation*100 ;//Coordenada y del punto la curva mariposa, está dada por cos porque está rotada
    var px1 = -sin(t+aumento)*equation*100 ;//Coordenada x del punto la curva mariposa, está dada por sin porque está rotada
    let legend = 'El punto actual es ( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
    document.getElementById("texto").innerHTML= legend;//Escribe la ubicación del punto
    var py2 = -cos(t)*equation*100 ;//Coordenada y de la curva mariposa, está dada por cos porque está rotada
    var px2 = -sin(t)*equation*100 ;//Coordenada x de la curva mariposa, está dada por sin porque está rotada
    var distancia = sqrt( ((py1-py2)**2)+((px1-px2)**2) );
    if(distancia>discriminante &&(-delta>=px1 || px1>=delta)){
      var chiquito = [px1,py1,t+aumento];
      ala.push(chiquito); 
    }
    else{
      if(distancia<discriminante) console.log("fue la discriminante");
      if(-delta<=px1 && px1<=delta) console.log("fue el centro ");
      beginShape();
      for(var i = 0; i<ala.length; i++)
        curveVertex(ala[i][0],ala[i][1],ala[i][2]);
      endShape(); 
      conjunto.push([ala,colorin[3],colorin[4],colorin[5]]);
      ala = [];
      colorin[3]=random(colorin[0]);
      colorin[4]= random(colorin[1]);
      colorin[5]= random(colorin[2]);
    }
    
    point(px1,py1,t)
    t+=aumento;
    nvieja = n;
    lento=speed.value();
    if(distancia<0.09) console.log(distancia, " discriminante",discriminante);
    }
}
