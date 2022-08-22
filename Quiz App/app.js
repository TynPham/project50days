const arrayQuestion = [
    {
        question: 'Which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        corret: 'd'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        corret: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        corret: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        corret: 'b'
    }
]

const container = document.querySelector('.container');
const listChecked = document.querySelectorAll('input');
const Question = document.querySelector('.question');
const answerA = document.querySelector('.forA');
const answerB = document.querySelector('.forB');
const answerC = document.querySelector('.forC');
const answerD = document.querySelector('.forD');
const submit = document.querySelector('.submit');


var point = 0;
var currentQuestion = 0;


createQuestion();

function createQuestion() {
    clearchecked();
    
    Question.innerText = arrayQuestion[currentQuestion].question;
    answerA.innerText = arrayQuestion[currentQuestion].a;
    answerB.innerText = arrayQuestion[currentQuestion].b;
    answerC.innerText = arrayQuestion[currentQuestion].c;
    answerD.innerText = arrayQuestion[currentQuestion].d;
}

function clearchecked() {
    listChecked.forEach(function(item) {
        item.checked = false;
    })
}

function getAnswer() {
    let answer;
    listChecked.forEach(function(item) {
        if (item.checked) {
            answer = item.id;
        }
    })
    return answer;
}

submit.addEventListener('click' , function() {
    const answer = getAnswer();
    if (answer) {
        if (answer === arrayQuestion[currentQuestion].corret) {
            point++;

        }
        currentQuestion++;
        if (currentQuestion < arrayQuestion.length) {
            createQuestion();
        }
        else {
            container.innerHTML = `
                <h3 class="result">You answered ${point}/4 questions correctly</h3>
                <button class="reload" onclick = 'location.reload()'>Reload</button>
            `
        }
    }
})
