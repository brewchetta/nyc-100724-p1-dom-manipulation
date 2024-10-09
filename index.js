// querySelector gets a single item
// querySelectorAll gets all of an item
const mainTitle = document.querySelector('#main-title')
mainTitle.textContent = "Really Awesome Good Movies"

const bestMoviesList = document.querySelector("#best-movies-list")

// DOM TRAVERSAL -- GOING FROM PARENT TO CHILD OR CHILD TO PARENT

const firstMovie = document.querySelector("li")

const firstMovieParent = firstMovie.parentElement

const allMovieChildren = Array.from(firstMovieParent.children)


// STEPS FOR CREATING NEW ELEMENTS

// STEP ONE - MAKE THE ELEMENT
const newLI = document.createElement("li")

// STEP TWO - CHANGE THE TEXT CONTENT OR GIVE CLASS NAMES OR WHATEVER
newLI.textContent = "Part 2"

// STEP THREE - APPEND TO ANOTHER ELEMENT
mainTitle.append(newLI)

const newTwilightMovie = document.createElement("li") 
newTwilightMovie.textContent = "New Twilight Movie: Coming of the DOM" 
newTwilightMovie.className = "movie-title" 
bestMoviesList.append(newTwilightMovie)

const allMovieTitles = document.querySelectorAll('.movie-title')

allMovieTitles.forEach( hamburger => hamburger.style.backgroundColor = "purple" ) 

const movieListChildren = Array.from(bestMoviesList.children)

movieListChildren.forEach( movie => movie.style.color = "black" )

// removes the movie
newTwilightMovie.remove()

// hides the list
bestMoviesList.style.display = "none"

// shows the list again
bestMoviesList.style.display = ""

// reset styles on movie titles
allMovieTitles.forEach( movie => movie.style.backgroundColor = "")
allMovieTitles.forEach( movie => movie.style.color = "")

// SHENANIGANS

const navbar = document.createElement("div")
navbar.id = "navbar"
const body = document.querySelector('body')
body.prepend(navbar)

const buttonOne = document.createElement('button')
buttonOne.textContent = "Actors"
navbar.append(buttonOne)

const buttonTwo = document.createElement('button')
buttonTwo.textContent = "Cast"
navbar.append(buttonTwo)

const buttonThree = document.createElement('button')
buttonThree.textContent = "Team"
navbar.append(buttonThree)

const buttonFour = document.createElement('button')
buttonFour.textContent = "Characters"
navbar.append(buttonFour)

function disableButtonOne(event) {
    event.target.disabled = true
}

buttonOne.addEventListener('click', disableButtonOne)
buttonTwo.addEventListener('click', disableButtonOne)
buttonThree.addEventListener('click', disableButtonOne)
buttonFour.addEventListener('click', disableButtonOne)

navbar.style.display = 'flex'
navbar.style.justifyContent = 'space-between'

// add link to imdb with an image inside of it

// body
//  |
// navbar-----
//  |         |
// buttons   link (a)
//            |
//           img


const linkToIMDB = document.createElement("a")
linkToIMDB.href = "https://www.imdb.com/title/tt1099212/"
navbar.append(linkToIMDB)

const linkImage = document.createElement("img")
linkImage.src = "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Bella_Swan.jpg/220px-Bella_Swan.jpg"
linkToIMDB.append(linkImage)