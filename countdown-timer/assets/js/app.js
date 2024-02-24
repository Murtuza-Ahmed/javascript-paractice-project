const endDate = "27 Feb 2024 2:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = Math.floor((end - now) / 1000);

    const days = Math.floor(diff / (3600 * 24));
    const hours = Math.floor((diff % (3600 * 24)) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
};

setInterval(() => {
    clock();
}, 1000);




/**
 * 1 day = 24 hrs
 * 1 hrs = 60 min
 * 60 min = 3600 sec
 */