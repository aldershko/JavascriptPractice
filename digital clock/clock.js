const hours =  document.getElementById("hrs");
const minutes = document.getElementById("mins");
const seconds  = document.getElementById("sec");




setInterval(() => {
    let time = new Date();
    hours.innerHTML = (time.getHours() >= 13? `0${time.getHours() -12}` : time.getHours() > 10?"0":"")  ;
    minutes.innerHTML = (time.getMinutes() < 10?"0":"") + time.getMinutes();
    seconds.innerHTML = (time.getSeconds() < 10?"0":"") + time.getSeconds();  
}, 1000);