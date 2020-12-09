let daysContainer = document.getElementById('days')
let hoursContainer = document.getElementById('hours')
let minutesContainer = document.getElementById('minutes')
let secondsContainer = document.getElementById('seconds')
let chistmasMessageContainer = document.getElementById('chistmas-message')
const christmasStringDate = 'Dec 25 2020'
const countDown = function(stringDate){
    const christmasDate = new Date(stringDate)
    const currentDate = new Date()
    const dateInSeconds = Math.floor((christmasDate - currentDate) / 1000)
    let seconds = formatDate(dateInSeconds % 60)
    let minutes = formatDate(Math.floor(( dateInSeconds / 60 )) % 60)  
    let hours = formatDate(Math.floor(( dateInSeconds / 3600 )) % 24) 
    let days = formatDate(Math.floor((dateInSeconds / 3600 ) / 24))
    return {
        days,
        hours,
        minutes,
        seconds,
        dateInSeconds
    }
}
const formatDate = function(num){
    return num < 10 ? '0' + num : num 
}
let getLeftTime = setInterval(() => {
    const timeLeft = countDown(christmasStringDate)
    daysContainer.textContent = timeLeft.days
    hoursContainer.textContent = timeLeft.hours
    minutesContainer.textContent = timeLeft.minutes
    secondsContainer.textContent = timeLeft.seconds
    if(timeLeft.dateInSeconds === 0) {
        clearInterval(getLeftTime)
        chistmasMessageContainer.textContent = 'Felíz Navidad'
    }
        
}, 1000);
