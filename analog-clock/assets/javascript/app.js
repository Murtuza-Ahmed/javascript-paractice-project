let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
setInterval(() => {
    let date = new Date();
    // GETTING HOUR | MINUTE | SECOND FROM DATE
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    // CLOCK ROTATION DEGREE
    let hourRotation = 30 * hh + mm / 2;
    let minuteRotation = 6 * mm;
    let secondRotation = 6 * ss;
    // TARGET CSS STYLE ADD
    hours.style.transform = `rotate(${hourRotation}deg)`;
    minutes.style.transform = `rotate(${minuteRotation}deg)`;
    seconds.style.transform = `rotate(${secondRotation}deg)`;
}, 1000)