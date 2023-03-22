function clock() {
    const clock = document.getElementById("clock"); //clock이라는 id를 가진 요소를 clock이란 변수에 저장
    // const clock = document.querySelector('#clock');
    const time = new Date(); // Date객체를 time 변수에 저장 // Date객체 안에는 시간, 날짜 등을 불러올수있는 메서드가 존재.

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    // Date객체를 통해 시간을 불러온다 오는데 시간은 정수기때문에 앞에 0을 붙여주기 위해서 String값으로 변환을 하고,
    // padStart를 사용하여 시간이 10시전이면 길이가 1로 되므로, 1로 되었을때 앞에 0을 붙여준다.
    // String으로 변환하는 이유는 숫자라는게 01 02 라는 숫자가 없기 때문에...

    clock.innerHTML = `${hours}:${minutes}:${seconds}`; // 구한 시, 분, 초를 clock이있는 HTML위치에 추가한다.

    // 다른 방법들
    // const hours = time.getHours();
    // const minutes = time.getMinutes();
    // const seconds = time.getSeconds();
    // console.log(hours, minutes, seconds);
    // clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    // if (hours < 10) {
    //     let temp1 = "0" + hours.toString();
    //     let temp2 = "0" + String(hours);
    // }
}

clock();
setInterval(clock, 1000); //setInterval를 통해 해당하는 함수를 1초에 한번씩 반복하여 실행한다.
