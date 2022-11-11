const gameArea = document.getElementById("gameArea");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const border = document.getElementById("border");
const cursor1=document.getElementById("cursor1")
const cursor2=document.getElementById("cursor2")
const background=document.getElementById("background")

function resizeGame() {
  let widthToHeight = 16 / 18;
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;
  let newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
    gameArea.style.height = newHeight +"px"
    gameArea.style.width = newWidth + "px";
  } else {
    newHeight = newWidth / widthToHeight;
    gameArea.style.width = newWidth + "px";
    gameArea.style.height = newHeight + "px";
  }
  
  cursor1.style.width = newWidth * 0.01 + "px"
  cursor1.style.height = newWidth * 0.01 + "px"
  cursor2.style.width = newWidth * 0.01 + "px"
  cursor2.style.height = newWidth * 0.01 + "px"
}
imagesH()

window.addEventListener("resize", resizeGame);
window.addEventListener("orientationchange", resizeGame);
resizeGame();

function imagesH() {
  gameArea.style.height = "80%";
  gameArea.style.width = "100%";
  gameArea.style.flexDirection = "column";
  image1.style.height = "49%";
  image1.style.width = "100%";
  image2.style.height = "49%";
  image2.style.width = "100%";
  border.style.height = "2%";
  border.style.width = "100%";
}
function imagesV() {
  gameArea.style.height = "100%";
  gameArea.style.width = "80%";
  gameArea.style.flexDirection = "row";
  image1.style.height = "100%";
  image1.style.width = "49%";
  image2.style.height = "100%";
  image2.style.width = "49%";
  border.style.height = "100%";
  border.style.width = "2%";
}

let diffFound=0
function setDiff(width, height, left, top){
  const div = document.createElement("div")
  div.classList.add("diff")
  div.style.width = width +"%"
  div.style.height = height +"%"
  div.style.left=left+"%"
  div.style.top=top+"%"
  const div2 = div.cloneNode()
  div.onclick=()=>{
    div.classList.add("diffFound")
    div2.classList.add("diffFound")
    div.onclick=null
    div2.onclick=null
    diffFound+=1
    if(diffFound==4){
      scare()
    }
  }
  div2.onclick=()=>{
    div.classList.add("diffFound")
    div2.classList.add("diffFound")
    div.onclick=null
    div2.onclick=null
    diffFound+=1
    if(diffFound==4){
      scare()
    }
  }
  image1.appendChild(div)
  image2.appendChild(div2)
}

setDiff(15,13,77,47)
setDiff(2.5,4,7,65)
setDiff(2,2.5,48,28.5)
setDiff(6.5,6.5,22,61.5)

const scream=new Audio("./pictures/scream.mp3")
function scare(){
  background.style.backgroundImage="url(./pictures/scary.jpg)"
  gameArea.classList.add("hidden")
  scream.play()
}

function cursorMove1(e){
  cursor2.style.left= e.clientX - image1.offsetLeft + "px";
  cursor2.style.top= e.clientY - image1.offsetTop + "px";
}
function cursorMove2(e){
  cursor1.style.left= e.clientX - image2.offsetLeft + "px";
  cursor1.style.top= e.clientY - image2.offsetTop + "px";
}
image1.addEventListener("mousemove", cursorMove1);
image2.addEventListener("mousemove", cursorMove2);
image1.onmouseover=()=>{
  cursor1.classList.add("hidden")
  cursor2.classList.remove("hidden")
}
image2.onmouseover=()=>{
  cursor2.classList.add("hidden")
  cursor1.classList.remove("hidden")
}
image1.onmouseout=()=>{
  cursor2.classList.add("hidden")
}
image2.onmouseout=()=>{
  cursor1.classList.add("hidden")
}

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

preloadImage("./pictures/scary.jpg")