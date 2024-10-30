const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let index = 0

function carrosel(){
    
    index++

    if(index > img.length - 1){
        index = 0
    }

    imgs.style.transform = `translateX(${-index * 35}%)`
}

setInterval(carrosel, 1800)