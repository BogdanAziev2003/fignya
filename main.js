let gifBtn = document.querySelector(".gif-btn")
let catBtn = document.querySelector(".cat-btn")
let zarBtn = document.querySelector(".zar-btn")
let ballBtn = document.querySelector(".ball-btn")

const CATBOYURL = "https://api.catboys.com/img"
const GIFURL = "https://api.catboys.com/baka"
const ZARURL = "https://api.catboys.com/dice"

let headText = document.querySelector(".content__head p")
let input = document.querySelector(".content__input")
let image = document.querySelector(".content__image img")
let imageBlock = document.querySelector(".content__image")

gifBtn.addEventListener("click", onGifClick)
catBtn.addEventListener("click", onCatClick)
zarBtn.addEventListener("click", onZarClick)



function onZarClick(){
    let rnd = randomInteger(1, 6)
    changeText(`Задайте вопорс у себя в голове, если выпадет ${rnd}, то ответ - да`)
    
    getData(ZARURL)
    .then((data)=>{
        console.log(data)
        changeImage(data.url)
    })
    .catch((error)=>{
        console.log(error)
        changeText("Упс, что-то пошло не так")
    })
}

function onCatClick(){
    changeText("Кошко-мальчик meow!!!")

    let promise = getData(CATBOYURL)
    .then((data)=>{
        console.log(data)
        changeImage(data.url)
    })
    .catch((error)=>{
        console.log(error)
        changeText("Упс, что-то пошло не так")
    })
}

function onGifClick(){
    changeText("Рандомная гифка")
    
    let promise = getData(GIFURL)
    .then((data)=>{
        console.log(data)
        changeImage(data.url)
    })
    .catch((error)=>{
        console.log(error)
        changeText("Упс, что-то пошло не так")
    })
}


function changeImage(url){
    image.src = url
}


function changeText(text) {
    headText.innerText = text
}

async function getData(url) {
    let response = await fetch(url)
    if(response.ok){
        return response.json()
    }
    new Error("Что-то пощло не так")
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }