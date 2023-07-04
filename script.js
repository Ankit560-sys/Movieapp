
//Most popular Watched Movies:------

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

 const moviebox =document.querySelector('#movie-box')
 const searchbtn =document.querySelector('#search-btn')
 
  const getMovies = async (api)=>{
    const response = await fetch(api);
    const data  = await response.json();
    
    showMovies(data.results);
    // console.log(data.results);

}
getMovies(APIURL);



//Show movies function show movie data on card
const showMovies =(data)=>{

    moviebox.innerHTML ="";
    
    data.forEach(item => {
        
        const box =document.createElement('div')
        box.classList.add("box");

        console.log(item)
        box.innerHTML = `
        <img src=${IMGPATH + item.poster_path} alt="Image">
        <div class="overlay">
            <div class="title">
            <h2>${item.title}</h2>
                <span>Rating: ${item.vote_average}</span>
            </div>
            <h3>Overview:</h3>
            <p>${item.overview}</p>
        </div>`

        moviebox.appendChild(box)
    });
    
}

document.querySelector('#movie-search').addEventListener("keyup",
function(event){
    // console.log(event.target.value)

    if(event.target.value !== ""){
        getMovies(SEARCHAPI + event.target.value)
        //Searched Movies
    }

    else{
        getMovies(APIURL)
    }



})
