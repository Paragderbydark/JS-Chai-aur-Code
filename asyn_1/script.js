
const body = document.querySelector('body');
let startStop;let interval;
document.querySelector("#start").addEventListener('click',function (e){

  if (!startStop){
startStop = setInterval(color,1000);
function color(){
   body.style.backgroundColor = getRandomColor();
}
  }
});

document.querySelector("#stop").addEventListener('click',function (e){
 clearInterval(startStop);
 startStop = null;
 });

function getRandomColor() {
    // Generate a random color in hexadecimal format
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    // Loop 6 times to generate the 6-character hex code
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

