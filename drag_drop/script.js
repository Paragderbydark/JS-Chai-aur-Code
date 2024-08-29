const dropArea = document.querySelector('#drop-area');
const inputFile = document.querySelector('#input-file');
const imagView  = document.querySelector('#img-view');
let count = 0;
inputFile.addEventListener('change',updatePic);

function updatePic(){
       
        
            let imagLink = URL.createObjectURL(inputFile.files[0]);
            imagView.style.backgroundImage = `url(${imagLink})`;
            imagView.style.border = 0;
            imagView.textContent = "";
  
}
dropArea.addEventListener('dragover',function(e){
    e.preventDefault();
});

dropArea.addEventListener('drop',function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    updatePic();
} )