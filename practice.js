// // PAIR PROGRAMMING PRACTICE // //
// fork and clone this repo and follow the instructions in this file

// for all the instructions below work in this file, DO NOT amend the html to get your results, use DOM manipulation

// // DELIVERABLES // //

// 1. create a new div with an id of movie-posters and append it to the body

// const moviePosterDiv = document.createElement('div')
// moviePosterDiv.id = 'movie-posters'
// const body = document.querySelector('body')
// document.body.append(moviePosterDiv)

// 2. do this three times:

// 2.1 find a movie poster you like and add it as an <img> inside the movie-posters div

// const spiderman = document.createElement('img')
// spiderman.src = 'https://bradleybasement.wordpress.com/wp-content/uploads/2022/05/spider-man-2-dvd.jpg?w=212'
// moviePosterDiv.append(spiderman)
// // spiderman.className = "movie-poster-image"
// spiderman.style.width = "400px"

// 2.2 further refine the movie posters:
// change it so each movie poster is a <div> which has children for the poster <img>, the title <h2> and a short description <p>

// const spidermanTitle = document.createElement('h2')
// spidermanTitle.textContent = 'Spiderman 2'
// moviePosterDiv.append(spidermanTitle)

// const spidermanDescription = document.createElement('p')
// spidermanDescription.textContent = 'Web slinging guy'
// moviePosterDiv.append(spidermanDescription)

// 4. console.log the title and description for the first movie poster

// console.log(spidermanTitle, spidermanDescription)

// 5. change the <img> src, title text, and description text for the second movie poster

// spiderman.src = "https://images.squarespace-cdn.com/content/v1/58a13eba20099eb147e68d26/1605027191224-PL5BFAXB5NJ0O928K9WZ/spider-man+2.png"

// 6. delete the last movie poster

// spiderman.remove()
// spiderman.style.display = "none"

// // HINTS // //

// given that adding movie posters is a repetetive task, it may be easier to build
// a function that takes in certain arguments and does the work for you...

// remember that you need a few steps in order to finally see a dom element on the page:
// create the element
// change attributes like text or src
// append the element

const spidermenArray =[
    {
        title: "Spiderman",
        description: "Web slinging hero",
        image: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg"
    },
    {
        title: "Spiderman 2",
        description: "Web slinging hero again",
        image: "https://bradleybasement.wordpress.com/wp-content/uploads/2022/05/spider-man-2-dvd.jpg?w=212"
    },
    {
        title: "Spiderman 3",
        description: "He's doing again! Still doing it!",
        image: "https://m.media-amazon.com/images/I/A10tF8xUYGL._AC_UF894,1000_QL80_.jpg"
    },
]

function addMovie(title, description, image) {
    const divElement = document.createElement('div')

    const titleElement = document.createElement('h2')
    titleElement.textContent = title

    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = description

    const imageElement = document.createElement('img')
    imageElement.src = image

    document.body.append(divElement)
    divElement.append(titleElement, descriptionElement, imageElement)
}

spidermenArray.forEach( spiderMovie => addMovie(spiderMovie.title, spiderMovie.description, spiderMovie.image) )