let homeScore = document.getElementById("homescore")

let guestScore = document.getElementById("guestscore")

let count = 0

let sum = 0

function addOne() {
    count += 1
    homeScore.textContent = count
    console.log(homescore)
    
}
function addTwo() {
      count += 2
    homeScore.textContent = count
    console.log(homescore)
    
}

function addThree() {
      count += 3
    homeScore.textContent = count
    console.log(homescore)
    
}

function sumOne() {
    sum += 1
    guestScore.textContent = sum
    console.log(guestScore)
}
function sumTwo(){
    sum += 2
    guestScore.textContent = sum
    console.log(guestScore)
}
function sumThree(){
    sum += 3
    guestScore.textContent = sum
    console.log(guestScore)
}

