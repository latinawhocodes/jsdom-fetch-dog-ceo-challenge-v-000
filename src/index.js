console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImage()
});

function fetchImage() {
    const imageURL = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imageURL)
        .then( response => response.json() )
        .then( json => addImageElements(json) )
}

function addImageElements(json) {
    const imageLink = json.message
    const imageDiv = document.querySelector("#dog-image-container")

    imageLink.forEach(link => {
        const img = document.createElement("img")
        img.src = link
        img.alt = "dog ceo image"
        imgDiv.appendChild(img)
    })
}

function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then( response => response.json() )
        .then( json => addBreeds(json) )
}

function addBreeds(json) {
    const breed = Object.defineProperties(json.message)
    const breedUl = document.querySelector("#dog-breeds")

    breed.forEach(breed => {
        const liElement = document.createElement("li")
        liElement.textContent = breed
        breedUl.appendChild(liElement)
    })
}

function changeColor(event) {
    event.target.style.color = "pink"
}