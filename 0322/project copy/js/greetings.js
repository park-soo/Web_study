// webStorage localStorage를 활용
// class를 활용해서 display:none을 적용 했다가 안했다가 방식
// 해당 이름을 저장여부를 확인해서
// 없으면 로그인으로 이름을 입력 받고
// 있으면 안녕하세요. 누구 라고 출력 할 것.

const KEY = "name";
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = document.querySelector("#login-form input");

const saveUserName = localStorage.getItem(KEY);
if (saveUserName === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginSubmit);
} else {
    printGreeting(saveUserName);
}
function printGreeting(saveUserName) {
    greeting.innerText = `안녕하세요. ${saveUserName} 님`;
    greeting.classList.remove("hidden");
}
function loginSubmit(event) {
    // event.preventDefault();
    // loginForm.classList.add("hidden");
    console.log("submit");
    const username = loginInput.value;
    localStorage.setItem(KEY, username);
    // printGreeting(username);
}
