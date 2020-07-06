var conjunto =[];//Arreglo de todas las alas 
var t = 0;//Variable de control
var colorin =[];//Arreglo de colores
var aumento;//Aumento de la variable t en cada loop
var delta = 0.1;//delta alrededor del centro
var ala =[] ;//guarda los puntos para hacer la curva entera
var nvieja = 4;//Número inicial de alas. 
var lento = 6.5;//Velocidad inicial
var discriminante = 0.00559; //ver si se termina el ala
var pp = true;//Play Pause Controla si la mariposa grafica
var rotacion = false;//Controla si la mariposa rota

function setup() {
  colorin =[255,255,255,random(255),random(255),random(255)];
  slidern = createSlider(1,25,4); //Slider da el número de ejes
  speed = createSlider(5,65,6.5); //Slider da la velocidad o distancia entre puntos
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

function colores(r,g,b){ //Permite graficar en un rango específico de colores
  if(r==g && r != b) {//Si se quiere graficar en amarillos
    colorin =[r,g,b,r-random(5),r-random(15),random(20)];
  }//Si se quiere graficar en otros colores
  else colorin =[r,g,b,random(r),random(g),random(b)];
}



function draw() {
  
  //Controla si rota la mariposa o no
  if(rotacion){ //Si sí gira entonces
    background(255,226,188);//Borre lo anterior
    rotateX(frameCount*0.02);//Rote
    rotateY(frameCount*0.02);
    //Grafique la mariposa en la nueva rotación
    for(var i = 0; i<conjunto.length; i++){//Grafica cada ala con sus colores en conjunto
      beginShape();//Cada ala
      stroke(conjunto[i][1],conjunto[i][2],conjunto[i][3]);
      for(var j =0; j<conjunto[i][0].length;j+=10)//Ubique cada punto y únalo con una curva
        curveVertex(conjunto[i][0][j][0],conjunto[i][0][j][1],conjunto[i][0][j][2]);
      endShape();
    }
  }
  
  else{//Si no gira la mariposa
    rotateX(PI/4);
    stroke(colorin[3],colorin[4],colorin[4]);
    noFill();
    n = slidern.value();//revise el número de ejes
    aumento = (speed.value())/1000; 
    if (n != nvieja ){//Si cambió el número de ejes entonces 
      nvieja = n;
      background(255,226,188);//Borre lo anterior
      ala = [];//Borre los puntos guardados en ala
      conjunto = [];//Borre las alas guardadas en conjunto
      discriminante = 0.00559/((n*speed.value()/26));//Cambie discriminante
      t=0;//Reinicie t en 0
    }
    //Si el slider cambia velocidad
    if(speed.value() != lento){
      discriminante = 0.00559/(n*speed.value()/26);//Cambie el discriminante
      lento =speed.value();
      console.log("cambio la velocida nueva discriminante es ",discriminante);
    }

    strokeWeight((n/(n/5))-1.5);//Grueso de las líneas y puntos
    var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);//Ecuación parcial de la mariposa 
    var py1 = -cos(t+aumento)*equation*100 ;//Coordenada x de la mariposa, está dado por cos porque la mariposa está girada
    var px1 = -sin(t+aumento)*equation*100 ;//Coordenada y de la mariposa, está dado por sin porque la mariposa está girada
    let legend = 'El punto actual es ( ' + nfc(px1,3) + ' , ' + nfc(py1,3) + ' , ' + nfc(py1,3) +' ) \t\t\t' /*esas t's se cambian en el style*/+"n = "+n; 
    document.getElementById("texto").innerHTML= legend;
    var py2 = -cos(t)*equation*100 ;//Coordenada x anterior
    var px2 = -sin(t)*equation*100 ;//Coordenada y anterior
    console.log(discriminante);
    var distancia = sqrt(((py1-py2)**2)+((px1-px2)**2));//Distancia entre el punto inmediatamente anterior y el nuevo
 
    if(distancia>discriminante &&(-delta>=px1 || px1>=delta)){    //Si no se ha terminado un ala
      ala.push([px1,py1,t+aumento]); //Pone las coordenadas x y z en una lista y la añade como un elemento en ala
    }

    else{//Si se termina el de graficar un ala
      //Es decir, si los puntos estan muy unidos o el punto esta entre un intervalo cercano al centro
      
      beginShape();//Inicia figura
      for(var i = 0; i<ala.length; i++)//Para cada elemento o punto en ala
        curveVertex(ala[i][0],ala[i][1],ala[i][2]);//Grafica punto con coordenadas x y z. Los une con una curva
      endShape(); 
      conjunto.push([ala,colorin[3],colorin[4],colorin[5]]);//Guarda ala y su color en el conjunto (de alas)
      ala = []; // Vacía el ala 
      if(colorin[0]==colorin[1] && colorin[0] != colorin[2]){//Si se quiere graficar en amarillo
        colorin[3]=colorin[0]-random(5);
        colorin[4]= colorin[0]-random(15);
        colorin[5]= random(colorin[2]);
      }
      else{//Si se quiere grafiar en otro color
        colorin[3]=random(colorin[0]);
        colorin[4]= random(colorin[1]);
        colorin[5]= random(colorin[2]);
      }
    }

    point(px1,py1,t);//Grafique punto  
    t+=aumento;//Aumente t
    if(distancia<0.09) console.log(distancia, " discriminante ",discriminante);
  }
}
