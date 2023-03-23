// img 폴더의 이미지 중 랜덤으로 선택해서
// 화면에 요소를 생성해서 추가

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choseImg = images[Math.floor(Math.random() * images.length)];

//javascript
// const bgImg = document.createElement("img");
// bgImg.src = `img/${choseImg}`;
// document.body.appendChild(bgImg);

//jQuery
// $("body").css("background-image", `url('img/${choseImg}')`);
$("body").attr("style", `background-image:url('img/${choseImg}')`);
