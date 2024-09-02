const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const show_More_Bttn = document.getElementById("show-more");

let keyword = "";
let page = 1;
const access_key = "sQN0B9nv4wTsxudXZ4VTxMg2VG96h5mnP38iqMlBhYc";



async function searchImage() {
keyword = searchBox.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=15`

const response = await fetch(url);
const data = await response.json();


const results = data.results;


if (page === 1){searchResult.innerHTML="";}

results.map((results)=>{

   
    
    const image = document.createElement("img");
    image.src = results.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;  
    imageLink.target = "_blank";
   

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
});
show_More_Bttn.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{ 
    try {
        e.preventDefault(); 
        page =1; 
        searchImage();
    } catch (error) {
       console.log(error);
        
    }
   
    
 });
 
show_More_Bttn.addEventListener("click", function (e){
    try {
    page++;
    searchImage();
    } catch (error) {
        console.log(error);
        
    }
    
    
});
// sQN0B9nv4wTsxudXZ4VTxMg2VG96h5mnP38iqMlBhYc

