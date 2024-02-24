const endDate = "27 Feb 2024 2:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
};
clock()





/**
 * 1 day = 24 hrs
 * 1 hrs = 60 min
 * 60 min = 3600 sec
 */