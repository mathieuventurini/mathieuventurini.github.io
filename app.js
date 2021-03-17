
let submitBtn = document.querySelector('.submit');
let errorMsg = document.querySelector('.error-msg');
let myForm = document.getElementById('mainform');
let correctAnswer = document.querySelectorAll('.correct')
let wrongAnswer = document.querySelectorAll('.wrong')
let explicationMsg = document.querySelector('.explication-msg');
let reloadPage = document.getElementById('reload');
let allAnswers = document.querySelectorAll('.answer-check');
let guessesChecked = document.querySelectorAll('.guesses');
let exclamation = document.querySelectorAll('.exclamation');
let exclamationOne = document.querySelector('.exclamation1');
let exclamationTwo = document.querySelector('.exclamation2');
let correctAnswerChecked = document.querySelector('.answer-check-correct')


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

// BORDER YELLOW ON CLICK 

for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].addEventListener('click', e => {
        guessesChecked.forEach(guessesChecked => {
            guessesChecked.addEventListener('click', e => {
                guessesChecked.classList.toggle('guesses-checked')
            } )
        })
    })
};


// FUNCTION ON SUBMIT 
    function checked(){

        let valid = false;
        for (let i = 0; i < allAnswers.length; i++) {
            if(allAnswers[i].checked){
                valid = true;
                break;
            }
        };
        for (let index = 0; index < wrongAnswer.length; index++) {
            if(wrongAnswer[index].classList.contains('guesses-checked')){
                wrongAnswer[index].classList.add('wrong-answer')
                wrongAnswer[index].classList.remove('guesses-checked')
            }
        };

        for (let e = 0; e < correctAnswer.length; e++) {
            if(correctAnswer[e].classList.contains('guesses-checked')){
                correctAnswer[e].classList.add('correct-answer-checked')
                
            }
            else if(valid){
                correctAnswer[e].classList.add('correct-answer');
                correctAnswer[e].style.color = 'red';
                correctAnswer[e].style.fontWeight = '700';
                
            }
        };

        if(valid){
    
            errorMsg.classList.remove('error-msg-active');
            explicationMsg.classList.add('explication-msg-active');
            submitBtn.style.display = 'none';
            reloadPage.style.display = 'block';
            guessesChecked.forEach(guessesChecked => {
                guessesChecked.classList.add('guesses-disabled')
            })

        }

        else {
            errorMsg.classList.add('error-msg-active');
        }


    };
    
reloadPage.addEventListener('click', (e)=> {
    document.location.reload();
});