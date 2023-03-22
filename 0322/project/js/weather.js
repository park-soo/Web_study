const weather = document.querySelector("#weather span:first-child"); //날씨정보를 담을 곳을 weather변수에 저장
const city = document.querySelector("#weather span:last-child"); //도시이름을 담을 곳을 weather변수에 저장

const API_KEY = "38e86f0e539257fe1dde4d32b1aa2281"; //API를 사용하기위해서는 키값이 있어야함(해당하는 홈페이지에서 회원가입을 하면 키값을 줌.)

navigator.geolocation.getCurrentPosition(goeOk, geoErr); //현재 사용자의 위치를 알려주는 메서드를 실행시 goeOk(위치값이 존재할때) ,geoErr(위치값이 존재하지 않을때) 함수를 실행.

function goeOk(position) {
    const lat = position.coords.latitude; // 현재의 위도값을 lat변수에 저장
    const lon = position.coords.longitude; // 현재의 경도값을 lon변수에 저장
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //날씨와 지역도시이름과 온도를 알기위해 오픈날짜API를 사용하기위해 주소를 복사
    fetch(url) //fetch promise 값으로 가져오는데
        .then((response) => response.json()) // 그러면 그 해당하는 가져온값을 json 형태로 가져옴.
        .then((data) => {
            //그다음
            console.log(data);
            city.innerText = data.name; // 가져온 값들 중에 data.name은 도시 이름이니까 city에 해당하는 HTML 위치에 꽂아주고.
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`; //이하동문.
        });
}

function geoErr() {
    alert("can't find you. No weather info");
}
