const quotes = [
    {
        quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
        author: "미상",
    },
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author: "존 우든",
    },
    {
        quote: "낮은 자존감은 계속 브레이크를 밟으며 운전하는 것과 같다.",
        author: "맥스웰 말츠",
    },
    {
        quote: "우리는 다른 사람과 같아지기 위해 인생의 3/4을 빼앗기고 있다.",
        author: "쇼펜하우어",
    },
    {
        quote: "가장 용감한 행동은 자신을 위해 생각하고 그것을 큰소리로 외치는 것이다.",
        author: "가브리엘 샤넬",
    },
    {
        quote: "스스로를 경멸하는 사람은, 경멸하는 자신을 존중한다.",
        author: "프리드리히 니체",
    },
    {
        quote: "또 실패했는가? 괜찮다. 다시 실행해라. 그리고 더 나은 실패를 하라.",
        author: "사뮈엘 베케트",
    },
    {
        quote: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기 증세다.",
        author: "아인슈타인",
    },
    {
        quote: "나에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "스스로 자신을 존경하면 다른 사람도 그대를 존경할 것이다.",
        author: "공자",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
