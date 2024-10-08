const accessKey = "ur5Tk-8xYECgRhGjinpdnuyo7IbWCLAu2blKwrrV0O4"


const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResults = document.getElementById("search-result")
const showMore = document.getElementById("show-more-btn")

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResults.innerHTML = "";
    }
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    });
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})
showMore.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})