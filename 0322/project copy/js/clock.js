function clock() {
    const clock = document.getElementById("clock");
    // const clock = document.querySelector('#clock');
    const time = new Date();
    // const hours = time.getHours();
    // const minutes = time.getMinutes();
    // const seconds = time.getSeconds();
    // console.log(hours, minutes, seconds);
    // clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    // if (hours < 10) {
    //     let temp1 = "0" + hours.toString();
    //     let temp2 = "0" + String(hours);
    // }

    const hours1 = String(time.getHours()).padStart(2, "0");
    const minutes1 = String(time.getMinutes()).padStart(2, "0");
    const seconds1 = String(time.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours1}:${minutes1}:${seconds1}`;
}

clock();
setInterval(clock, 1000);
