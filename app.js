
let submitBtn = document.querySelector('.submit');
let errorMsg = document.querySelector('.error-msg');
let myForm = document.getElementById('mainform');
let correctAnswer = document.querySelectorAll('.correct')
let wrongAnswer = document.querySelectorAll('.wrong')
let explicationMsg = document.querySelector('.explication-msg');
let reloadPage = document.getElementById('reload');
let allAnswers = document.querySelectorAll('.answer-check');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
   

function checked(){

    let valid = false;
    for (let i = 0; i < allAnswers.length; i++) {
        if(allAnswers[i].checked){
            valid = true;
            break;
        }
    }

    if (valid){

        correctAnswer.forEach(correctAnswer => {
            correctAnswer.classList.add('correct-answer');
        });
        wrongAnswer.forEach(wrongAnswer => {
            wrongAnswer.classList.add('wrong-answer');
        });
        errorMsg.classList.remove('error-msg-active');
        explicationMsg.classList.add('explication-msg-active');
    }
    else {
        errorMsg.classList.add('error-msg-active');

    }
};

    reloadPage.addEventListener('click', (e)=> {
        document.location.reload();
    })