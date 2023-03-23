const c = [
    {
        question: "2+2",
        answer: 4,
        options: [1, 4, 3, 5]

    },
    {
        question: "2-2",
        answer: 0,
        options: [0, 1, 2, 3]

    },
    {
        question: "2-1",
        answer: 1,
        options: [3, 2, 4, 1]

    },
    {
        question: "3*2",
        answer: 6,
        options: [9, 7, 3, 6]

    },
    {
        question: "6/3",
        answer: 2,
        options: [1, 3, 2, 4]

    }
]

let wapper1 = document.querySelector('.wapper1');
let wapper2 = document.querySelector('.wapper2');
let btn = document.querySelector('.wapper1 button');
let question = document.querySelector('.question');
let timer = document.querySelector('.timer')
let score = document.querySelector(".wapper2 .score")
let options = document.querySelector('.option')
let input = document.querySelectorAll('input.type')
let questionCounter = 0;
let optionCounter = 0;
let questionNum = 1;
let scorecount = 0;

btn.onclick = () => {
    wapper1.style.display = "none";
    wapper2.style.display = "flex"

    nextQuestion();
    nextOptions();
    let timerA = 5;
    timer.innerHTML = timerA;
    let x = setInterval(() => {

        if (questionCounter===5) {
            clearInterval(x)
            question.innerHTML = ""
            alert("Time Up");

        }
        if (timerA === 0) {
            timerA = 5;
            timer.innerHTML = timerA;
            questionNum++
            questionCounter++;
            optionCounter++;
            nextOptions();
            nextQuestion();

        }
        else {
            timer.innerHTML = --timerA
        }

    }, 600)

}

function nextQuestion() {
    if (questionCounter === 5) {
        question.innerHTML = ''
    }
    else {
        question.innerHTML = "Question" + " " + questionNum + ":-  " + " { " + c[questionCounter].question + " } ";

    }
}
function nextOptions() {
    document.querySelector('.box .option').innerHTML = ''
    for (let i = 0; i < 4; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', "radio");
        input.setAttribute('name', "option");

        const span = document.createElement("span")
        span.innerHTML = c[optionCounter].options[i]

        document.querySelector('.box .option').append(input)
        document.querySelector('.box .option').append(span)

    }
    // if (c[optionCounter].options.length === input[i].length) {

    // }
    // options.innerHTML=c[optionCounter].options




}
// console.log(c[optionCounter].options)




