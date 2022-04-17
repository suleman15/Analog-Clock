let divhour = document.querySelector('.hour')
let divmin = document.querySelector('.min')
let divsec = document.querySelector('.sec')

setInterval(updateClock, 1000)

function updateClock () {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hour = date.getHours() / 12;
    divsec.style.transform = `rotate(${sec * 360}deg)`
    divmin.style.transform = `rotate(${min * 360}deg)`
    divhour.style.transform = `rotate(${hour * 360}deg)`
}


updateClock()