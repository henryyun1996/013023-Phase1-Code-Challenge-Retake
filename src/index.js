// Your code here
const API = ("http://localhost:3000/characters");
const animalNames = document.querySelector("#character-bar");

fetch(API)
    .then(response => response.json())
    .then(animalData => {
        animalData.forEach(renderImages)
        // animalData.forEach(handleSubmit);
    });

function renderImages(animalData) {
    // console.log(animalData);
    const img = document.createElement('img');
    const span = document.createElement('span');
    span.textContent = animalData.name;
    img.src = animalData.image;
    animalNames.append(span);

    span.addEventListener('click', (e) => {
        console.log(animalData);
        document.querySelector('#name').textContent = animalData.name;
        document.querySelector('#image').alt = animalData.name;
        document.querySelector('#image').src = animalData.image;
        document.querySelector('#vote-count').textContent = 0;
    })
}

const submitVotes = document.querySelector('#votes-form');
const voteCount = document.querySelector('#vote-count');
const voteInput = document.querySelector('#votes');
submitVotes.addEventListener('submit', (e) => {
    e.preventDefault();
    let currentVotes = parseInt(voteCount.textContent);
    let newVotes = parseInt(voteInput.value);
    let totalVotes = parseInt(currentVotes + newVotes);
    voteCount.textContent = parseInt(totalVotes);
})

document.querySelector('#reset-btn').addEventListener('click', (e) => {
    console.log('click');
    voteCount.textContent = 0;
})

const newAnimal = document.querySelector('#character-form');
newAnimal.addEventListener('submit', (e) => {
    e.preventDefault();
    let animalObj = {
        name: e.target['name'].value,
        image: e.target['image-url'].value
    }
    renderImages(animalObj);
})