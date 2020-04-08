
function graficar(){
var n = document.getElementById("n");
n = Number(n);
return(n)

}
function setup() {
  var canvas = createCanvas(1000,1000);
  canvas.parent("canvas")
  background(246, 156, 100);
  
}
var n = 6;
var t = 0.005;
function draw() {
    if (n !=0 ) { 
   var equation = exp(cos(t)) - 2*cos(n*t) - pow(sin(t/12),5);
  var py = -cos(t)*equation*100 + width/2;
   var px = -sin(t)*equation*100 +height/2;
  let legend = 'your point is(' + nfc(px,3) + ',' + nfc(py,3) +' )';
   stroke('black');
  strokeWeight((n/(n/5))-1.5);
  point(px,py);
   fill(0);
  textSize(32);
  text(legend,145,985);
  noStroke();
  //10**-3 + (10**-2)*(n/2)
   t +=0.005;
  }
}