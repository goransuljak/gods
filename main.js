const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"];

// const colors = ["yellow", "green", "red","purple"]


const button = document.getElementById('btn')

const span = document.querySelector('.color')


button.addEventListener('click', function(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
        hex += colors[getRandomColor()]
    }
    document.body.style.backgroundColor = hex
    span.textContent = hex
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}