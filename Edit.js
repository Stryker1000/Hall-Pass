var passPage = false;
var bodyCanvas = document.getElementById("bodyCanvas");

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

document.body.style.margin = 0;
canvas.style.position = "fixed";
var ctx = canvas.getContext("2d");
resize();

var pos = { x: 0, y: 0 };

if (passPage == false){
  window.addEventListener("resize", resize);
  document.addEventListener("pointermove", draw);
  document.addEventListener("pointerdown", setPos);
}

function setPos(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = 530;
  ctx.canvas.height = 100;
}

function draw(e) {
  console.log("hi")
  
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "000000";
  ctx.moveTo(pos.x, pos.y - 260);
  setPos(e);
  ctx.lineTo(pos.x, pos.y - 260);

  ctx.stroke();
}

setInterval(update, 1000);

var hourTime;

function update() {
  const d = new Date();
  if (d.getHours() - 12 < 0) {
    hourTime = d.getHours();
  } else {
    hourTime = d.getHours() - 12;
  }
  document.getElementById("time").innerHTML =
    "The Current Time is: " +
    hourTime +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds();
  document.getElementById("date").innerHTML =
    "The Current Date is: " +
    d.getUTCDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear();
}

var dest = document.getElementById("destOption").value;
document.addEventListener('change', optionChange)
function optionChange() {
  dest = document.getElementById("destOption").value;
  console.log(dest)
  if (dest == "Another Classroom") {
    dest = prompt("Enter a teacher's name or room number.");
  }
  else if (dest == "Other") {
    dest = prompt("Enter Your destination");
  } 
  else if (dest == "Multiple") {
    dest = prompt("Enter Your Destinations");
  }
  else{
    dest = document.getElementById("destOption").value;
  }
}

function loadPass(){
  
  document.getElementById("main").innerHTML = "";
  passPage = true;
  const d = new Date();

  if (d.getHours() - 12 < 0) {
    hourTime = d.getHours();
  } else {
    hourTime = d.getHours() - 12;
  }
  var passDest = document.createElement("h4");
  var passTime = document.createElement("h4");
  var passDate = document.createElement("h4");
  passTime.innerHTML = hourTime + ":" + d.getMinutes() + ":" + d.getSeconds();
  passDate.innerHTML = d.getUTCDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  passDest.innerHTML = dest
  document.body.appendChild(passTime);
  document.body.appendChild(passDate);
  document.body.appendChild(passDest);
  
  

}
