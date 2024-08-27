const body = document.querySelector('body');
const bttn = document.querySelectorAll('.button');

let clickCount = 0 ; 
const defaultBgColor = body.style.backgroundColor || '#212121';
bttn.forEach(function(btt){
btt.addEventListener('click', function (e) {
  if (e.target.id == 'grey') {
    body.style.backgroundColor = e.target.id;
    changeBackground();
  } else if (e.target.id == 'purple') {
    body.style.backgroundColor = e.target.id;
    changeBackground();
  } else if (e.target.id == 'yellow') {
    body.style.backgroundColor = e.target.id;
    changeBackground();
  } else if (e.target.id == 'white') {
    body.style.backgroundColor = e.target.id;
    changeBackground();
  } else if (e.target.id == 'blue') {
    body.style.backgroundColor = e.target.id;
    changeBackground();
  }
});
});


function changeBackground(){
  clickCount++;
    if(clickCount % 2 === 0){
      body.style.backgroundColor = "#212121"
    }
}
