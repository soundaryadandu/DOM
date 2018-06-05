function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName("class1"));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    var x=document.getElementById('block1');
    x.style.backgroundColor="blue";
}

function increaseFont() {
    var x=document.getElementById('block2');
    x.style.fontSize="50px";
}

function changeFontColor() {
        var x=document.getElementById('block3');
        x.style.color="green";
}

function revertColor() {
      var x=document.getElementById('block3');
      x.style.color="black";
}

function hide() {
      var x=document.getElementById('block4');
      x.style.visibility="hidden";
}

function changeBackColor() {
      document.getElementsByClassName("box1")[0].style.backgroundColor="green";
      document.getElementsByClassName("box1")[1].style.backgroundColor="green";
      document.getElementsByClassName("box1")[2].style.backgroundColor="green";
}
function changeBackColor1(){
    document.getElementsByClassName("box2")[0].style.backgroundColor="blue";
    document.getElementsByClassName("box2")[1].style.backgroundColor="blue";
    document.getElementsByClassName("box2")[2].style.backgroundColor="blue";
}
function numbersOnly(evt)
{
    var charCode =evt.keyCode;
    if (charCode < 48 || charCode > 57)
       return false;

    return true;
}
function addAdjacent() {
    document.getElementById('para2').innerHTML+="<br>I got generated on the fly.";
}

function removePara() {
    var x=document.getElementById('para3');
    x.parentNode.removeChild(x);
}

function animatePara() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
}
function func(){
  var x=document.getElementById('get');
  x.style.background="green";
}