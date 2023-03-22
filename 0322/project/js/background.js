// img 폴더의 이미지 중 랜덤으로 선택해서
// 화면에 요소를 생성해서 추가

const images = ["0.jpg", "1.jpg", "2.jpg"]; // 이미지 파일 배열을 images 변수에 저장

const choseImg = images[Math.floor(Math.random() * images.length)]; // images변수에 배열 저장되어 있는 이미지들을 랜덤으로 불러오기(Math.floor: 소수점 없애기, Math.random에 length만큼 곱을 해줘야 함.)
const bgImg = document.createElement("img"); // bgImg변수에 img요소를 생성하여 저장
bgImg.src = `img/${choseImg}`; // 이미지파일을 불러올 주소를 입력 생성한 img요소 /(안에) 랜덤으로 불러오는 변수명 입력.
document.body.appendChild(bgImg); // body 자식요소로서 해당하는 img요소를 추가.
