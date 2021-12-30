let spanmiles = document.getElementById("Miles")
let text = "臭麦麦 is being clicked "
let button = document.getElementById("button")
button.addEventListener("click",handle)
let count=0
function handle(){
    count++
    spanmiles.textContent = text+count+" times."

}