let updateScale = true;
function handleMouseMove(event) {
        var eventDoc, doc, body;
        event = event || window.event; 
        var returnedFunction = debounce(function() {
            setElePosition(event.pageX,event.pageY);
            setBoundsforCursor(event.pageX,event.pageY);
        }, 100);
      
        returnedFunction();
        throttleSrcChange();
        if(updateScale){
            document.querySelector('.memoji-float').style.transform ="scale(1)";
            updateScale = false;
        }
        
}
var throttleSrcChange = throttle(setEleSrc, 300);
function setEleSrc(){
    // var img = document.querySelector('.memoji-float');
    // const randomNum = Math.floor(Math.random()*10);
    // img.src= `./assets/images/${randomNum}.png`;
    var ele = document.querySelector('.memoji-float');
    const randomNum = Math.floor(Math.random()*10);
    ele.style.backgroundImage= "url('./assets/images/"+randomNum+".png')";
}

function setElePosition(x,y){
    var ele = document.querySelector('.memoji-float');
    ele.style.top = (y - 90) +'px';
    ele.style.left = (x -90) +'px';  
}

function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;    
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }
      var callNow = immediate && !timeout;        
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);       
      if (callNow) func.apply(context, args);
    }
}

function throttle ( func,delay){
    let last = 0;
    return function (...args){
        var now = new Date().getTime();
        if(now - last < delay){
            return;
        }
        last = now;
        func(args);
    }
}



function setMode(){
    const toggle = document.querySelector('.toggle');
    const hours = new Date().getHours();
    if(hours > 7 && hours < 20){
        toggle.checked = false;
        toggle.setAttribute("title","Turn off the light");
    }else{
        toggle.checked = true;
        document.body.classList.add("dark-theme");
        toggle.setAttribute("title","Turn on the light");
        
        
    }
    
}
setMode();

let intervalId;

const touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
if(touchDevice){

    intervalId = setInterval(()=>{
        const  img = document.querySelector('.memoji');
        const randomNum = Math.floor(Math.random()*10);
        img.src= `./assets/images/${randomNum}.png`;
    },1000);
}else{
   
    // document.onmousemove = handleMouseMove;
}
    




//toggle click

// document.querySelector('#text-path').style.display = 'none';
const inputEl = document.querySelector(".toggle");
// Listen for a click on the button
inputEl.addEventListener("click", function() {
    document.querySelector('#animation-path').beginElement();
    document.querySelector('#animation-opacity').beginElement();
  document.body.classList.toggle("dark-theme");
  console.log(document.getElementById("text-path").childNodes);
  if(document.body.classList.contains('dark-theme')){
    toggle.setAttribute("title","Turn on the light");
    document.getElementById("text-path").childNodes[0].textContent = "Andhera kayam rahe ";
    }else{
    toggle.setAttribute("title","Turn off the light");
    document.getElementById("text-path").childNodes[0].textContent = "Jab jago tab savera";
   
}
});


function setBoundsforCursor(x,y){
    const dimensions = document.querySelector('.toggle-mode').getBoundingClientRect();
    console.log(window.innerWidth,x,y);
    var coordinates = {
        x:window.innerWidth - 100,
        y:0,
        x1: window.innerWidth,
        y1: 100
    }
    var ele = document.querySelector('.memoji-float');
    if(x > coordinates.x && x < coordinates.x1 && y > coordinates.y && y < coordinates.y1){
        ele.classList.add('cursor-circle');
    }else{
        ele.classList.remove('cursor-circle');
    }
}