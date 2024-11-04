let input = document.getElementById("input");
let addbutton = document.getElementById("addbutton");
let moviebox = document.getElementById("movieList");

let movies = [];

addbutton.addEventListener("click", function(event) {
    event.preventDefault();
    movies.push(input.value);
    input.value = "";
    displayMovies();
});

function displayMovies() {
    moviebox.innerHTML = "";
    movies.forEach((movie, index) => {
        let moviename = document.createElement("div");
        moviename.innerHTML = `${movie} <button class="remove">X</button>`;
        moviebox.appendChild(moviename);

        let s = moviename.querySelector(".remove");
        s.addEventListener("click", function(event){
            splice(index);
        });
    });
};
function splice (index){
    movies.splice(index,1);
    displayMovies();
};