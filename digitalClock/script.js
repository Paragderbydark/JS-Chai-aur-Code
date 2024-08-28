const clock = document.querySelector("#clock");
setInterval(function (e){
const date = new Date();

clock.innerHTML = date.toLocaleTimeString();
clock.style.color = 'black';
clock.style.fontWeight  = 'bold';
clock.style.fontSize = '200%'
clock.style.padding = '2vh'
},1000);