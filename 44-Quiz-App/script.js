const quizData = [{
        question: 'Which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        correct: 'b',
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b',
    },
    {
        question: 'What is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    },
];

const quiz = document.getElementById('quiz');
const ansElements =
    document.querySelectorAll('.answer');
const quesElement =
    document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn =
    document.getElementById('submit');

let currQues = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deslectAnswers();
    const currQuizData = quizData[currQues];
    console.table(currQuizData);
    quesElement.innerText = currQuizData.question;
    aText.innerText = currQuizData.a;
    bText.innerText = currQuizData.b;
    cText.innerText = currQuizData.c;
    dText.innerText = currQuizData.d;
}

function deslectAnswers() {
    ansElements.forEach((ansElement) => {
        ansElement.checked = false;
    });
}

function getSelected() {
    let answer;
    ansElements.forEach((ansElement) => {
        if (ansElement.checked) {
            answer = ansElement.id;
        }
    });
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer == quizData[currQues].correct) {
            score++;
        }
        currQues++;
        if (currQues < quizData.length) {

            loadQuiz();
        } else {

            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    <button onclick="location.reload()">Reload</button>`;
        }

    };
});