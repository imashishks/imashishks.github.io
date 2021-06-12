document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
        var eventDoc, doc, body;
        event = event || window.event; 
        var returnedFunction = debounce(function() {
            setElePosition(event.pageX,event.pageY);
        }, 100);
        if(!mobileCheck()){
            returnedFunction();
            throttleSrcChange();
        }
       
}
var throttleSrcChange = throttle(setEleSrc, 300);
function setEleSrc(){
    var img = document.querySelector('.memoji');
    const randomNum = Math.floor(Math.random()*10);
    img.src= `./assets/images/${randomNum}.png`;
}

function setElePosition(x,y){
    var img = document.querySelector('.memoji');
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