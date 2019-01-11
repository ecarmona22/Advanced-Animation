


window.onload = function() {
  styleDiv();
  addElement();
};

function styleDiv(){
  console.log('Inside styleDiv');
  var elmt = document.getElementById("myDiv");
  elmt.style.border = "thick solid #888888";
  elmt.style.width = "300px";
  elmt.style.margin = "auto";
  elmt.style.textAlign = "center";
  elmt.style.color = "red";
};

function setBorder() {
  console.log('Inside setBorder');
  document.getElementById("myDiv").style.border = "thick solid #992200";
};

function addElement () {
  console.log('Inside addElement');
  // create a couple of elements in an otherwise empty HTML page
  var heading = document.createElement("h1");
  var heading_text = document.createTextNode("Big Head!");
  // places heading_text in node tree as child of heading
  heading.appendChild(heading_text);
  // places heading in node tree as child of div element myDiv
  document.getElementById("myDiv").appendChild(heading);
  heading.style.color = "green";

};
