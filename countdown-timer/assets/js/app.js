const endDate = "24 May 2024 2:00 PM";
console.log(new Date(endDate))
document.getElementById("end-date").innerText = endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    console.log(end)
    console.log(now);
};
clock()