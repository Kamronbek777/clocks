// let timerNumber = document.createElement('p')
// let time = 0;
// const timer = setInterval(function() {
//     timerNumber.textContent = ++time;
//     if (time === 10) {
//         let h1 = document.createElement('h1')
//         h1.textContent = 'Time is up'
//         document.body.appendChild(h1)
//         clearInterval(timer);
//     }
// }, 1000);
// document.body.appendChild(timerNumber);

// let vaqt = new Date()
// console.log(vaqt);


let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let day = document.querySelector('#day');

setInterval(() => {
    let currentTime = new Date();
    let dayOfWeek = currentTime.toLocaleString("en-UZ", { weekday: "long" });

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    day.innerHTML = dayOfWeek;
}, 1000)