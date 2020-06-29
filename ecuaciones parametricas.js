var pp = true;//play y pausa
let t = 0;
function mecanismo(){
 if(pp){
    document.getElementById("ad").innerHTML = "play";
    noLoop();
    pp=false;
 }else{
   document.getElementById("ad").innerHTML = "pausa";
   loop();
   pp= true;
}}
function setup() {
  canvas = createCanvas(300, 300, WEBGL);
  canvas.parent("helice");
  noLoop();
}
function draw() {
  rotateX(PI / 3);
  translate(0,0,2*t);
  stroke(0,0,0);
  point(0,0);
  stroke(255,0,0);
  let equis =sin(t) * 100;
  let lle = cos(t) * 100;
  point(equis,lle);
  let legend = 'your point is( ' + nfc(equis,3) + ' , ' + nfc(lle,3) + ' , ' + nfc(2*t,3) +' ) \t\t\t'; 
  document.getElementById("texto").innerHTML= legend;
  t += 0.025; //0.01;
  if(nfc(2*t,3)<100){
      t += 0.025; //0.01;
  }
  else{
      t = 0;
      equis = 0;
      lle = 0;
      background(250,250,180);
  }
}