window.onload = init;
var canvas;
var ctx;

function init(){
  var header = document.createElement("div");
  canvas = document.createElement("canvas");

  header.setAttribute("id","header");
  canvas.setAttribute("id","cnv");

  var wrapperDiv = document.getElementById('wrapperDiv');
  wrapperDiv.appendChild(header);
  wrapperDiv.appendChild(canvas);




}
