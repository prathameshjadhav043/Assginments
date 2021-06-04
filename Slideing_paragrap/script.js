const red = document.querySelector('.red')
const cyan = document.querySelector('.cyan')
const orange = document.querySelector('.orange')
const violet = document.querySelector('.violet')
const pink = document.querySelector('.pink')

const center = document.querySelector('.center')

console.log(window.getComputedStyle(red)) ; 
// grab the styled color 



// addEvenListener 

const getBGColor = (selectedElement) => {
    return winows.getComputerStyle(selectedElement).backgroundColour
}

var colour = getBGcolour("mouseebter", () => {
    return center.style.background = color ;
}) ;