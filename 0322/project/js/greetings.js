// webStorage localStorage를 활용
// class를 활용해서 display:none을 적용 했다가 안했다가 방식
// 해당 이름을 저장여부를 확인해서
// 없으면 로그인으로 이름을 입력 받고
// 있으면 안녕하세요. 누구 라고 출력 할 것.

const KEY = "name"; // name이란 값을 KEY변수에 저장
const loginForm = document.querySelector("#login-form"); // id가 login-form인 요소를 loginForm에 저장
const greeting = document.querySelector("#greeting"); // id가 greeting인 요소를 greeting 저장
const loginInput = document.querySelector("#login-form input"); // id가 login-form input인 요소를 loginInput 저장

const saveUserName = localStorage.getItem(KEY); // 변수KEY에 저장된 name을 localStorage에서 불러온값을 saveUserName변수에 저장
if (saveUserName === null) {
    //localStorage에 있는 name이 없을(null)경우
    loginForm.classList.remove("hidden"); //loginForm에 classlist중에 hidden이라는 클래스를 삭제시킨다.
    loginForm.addEventListener("submit", loginSubmit); //loginForm에 submit 이벤트가 발생하면 loginSubmit 함수를 실행시킨다.
} else {
    //localStorage에 있는 name이 null이 아닐경우
    printGreeting(saveUserName); //printGreeting함수를 실행시킨다.(localStorage에 있는 name을 매개변수로 받는다.) 저장되어있는 name을 불러와야 출력이 가능하기 때문에
}

function printGreeting(saveUserName) {
    greeting.innerText = `안녕하세요. ${saveUserName} 님`; // 불러온 name을 HTML에 greeting위치에 "`안녕하세요. ${saveUserName} 님`" 생성한다.
    greeting.classList.remove("hidden"); //greeting의 classlist중에 hidden이란 클래스를 삭제한다.
}

function loginSubmit(event) {
    // event.preventDefault();
    // loginForm.classList.add("hidden");
    console.log("submit");
    const username = loginInput.value; // loginInput에 입력한 value값을 username변수에 저장
    localStorage.setItem(KEY, username); // localStorage에 KEY변수에 해당하는 key값에(name) value값으로 username을 저장.
    // printGreeting(username);
}
