let name = prompt("Enter your name")
let greeting= "Welcom back "

let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerHTML = greeting + name 
welcomeEl.innerHTML += "👋"

let saveEl =document.getElementById("save-el")
let countP =document.getElementById("count_p")

let count = 0

function increment() {
    count+=1
    // console.log(count)
    countP.textContent = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr

    countP.textContent = 0
    count = 0
}