
function handleMouseMove(event) {
        var eventDoc, doc, body;
        event = event || window.event; 
        var returnedFunction = debounce(function() {
            setElePosition(event.pageX,event.pageY);
        }, 100);
      
        returnedFunction();
        throttleSrcChange();
}
var throttleSrcChange = throttle(setEleSrc, 300);
function setEleSrc(){
    var img = document.querySelector('.memoji');
    const randomNum = Math.floor(Math.random()*10);
    img.src= `./assets/images/${randomNum}.png`;
}

function setElePosition(x,y){
    var img = document.querySelector('.memoji');
    img.style.position = 'absolute';
    img.style.top = (y - 100) +'px';
    img.style.left = (x -100) +'px';  
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
    toggle.checked = hours > 7 && hours < 20;
}
setMode();

let intervalId;
window.onresize = function(){
    clearInterval(intervalId);
    if(touchDevice){
        intervalId= setInterval(setEleSrc,500);
    }
}
const touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
// if(touchDevice){
    intervalId= setInterval(setEleSrc,1000);
// }else{
    // document.onmousemove = handleMouseMove;
// }



//toggle click

const inputEl = document.querySelector(".toggle");
 
// Listen for a click on the button
inputEl.addEventListener("click", function() {
    console.log('asdasd');
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});