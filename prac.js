/*function increment(){
    
console.log("The button was clicked")
} */
/*let lap1 = 34
let lap2 = 33
let lap3 = 36
function adding(){
    
    sum = lap1+lap2+lap3
    console.log("The sum is: ", sum)
}

adding()*/

let countEl = document.getElementById("count-el")
let count = 0
function increment(){
   
    console.log(countEl)
    count = count + 1
   console.log("Clicked ",  count)
   
   countEl.textContent = count
   
}
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function save(){
    let sum = count + " - "
    saveEl.textContent += sum
    countEl.textContent = 0
    count = 0
    
}

save()

/*increment()

function save(){
    
    console.log("Called "+ count)
    
    
}
save()*/
/*let notification = "You have three notifications"
console.log(notification)*/
/*let username = "per"
let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!" +"   " + "We have logged "
console.log(messageToUser )*/

/*let greeting = "Good Morning"
let name_ = "Bisekh";
let combo = greeting + " " + name_
console.log(combo)*/

/*let name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)*/

/*let welcomeEl = document.getElementById("welcome-el")

let name_ = "Bisekh"
let greeting = "Good Morning "

welcomeEl.innerText = greeting + name_ 

welcomeEl.innerText = welcomeEl.innerText + " 👌" */


























