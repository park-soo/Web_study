// 주어진 배열을 랜덤으로 선정해서
// 화면에 quote div의 span 안에 각각 출력

const quotes = [
    //객체 배열 생성
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author: "엘버트 허버드",
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author: "헬렌켈러",
    },
    {
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author: "엘사 맥스웰",
    },
    {
        quote: "절대 어제를 후회하지 마라",
        author: "L.론허바드",
    },
    {
        quote: "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        author: "채근담",
    },
];

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]; // todayQuote변수에 배열에 저장되어 있는 {quote값과 author값} 객체을 랜덤으로 불러오기(Math.floor: 소수점 없애기, Math.random에 length만큼 곱을 해줘야 함.)
document.querySelector("#quote span:first-child").innerHTML = todayQuote.quote; //id가 quote의 자식span중에 첫번째에 해당하는 span의 HTML위치에 todayQuote배열에서 quote를 불러온다.
document.querySelector("#quote span:last-child").innerHTML = todayQuote.author; //id가 quote의 자식span중에 마지막에 해당하는 span의 HTML위치에 todayQuote배열에서 author 불러온다.
