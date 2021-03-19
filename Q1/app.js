
let submitBtn = document.querySelector('.submit');
let errorMsg = document.querySelector('.error-msg');
let myForm = document.getElementById('mainform');
let correctAnswer = document.querySelectorAll('.correct')
let wrongAnswer = document.querySelectorAll('.wrong')
let explicationMsg = document.querySelector('.explication-msg');
let reloadPage = document.getElementById('reload');
let allAnswers = document.querySelectorAll('.answer-check');
let guessesChecked = document.querySelectorAll('.guesses');


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
                wrongAnswer[index].style.fontWeight = 'normal'
         
            }
            else if (valid){
                wrongAnswer[index].style.border = '5px solid rgb(250, 250, 250)';
                
            }
        };

        for (let e = 0; e < correctAnswer.length; e++) {
            if(correctAnswer[e].classList.contains('guesses-checked')){
                correctAnswer[e].classList.add('correct-answer')
                
            }
            else if(valid){
                correctAnswer[e].classList.add('correct-answer');
                correctAnswer[e].style.fontWeight = '700';
                correctAnswer[e].style.border = '6px solid green'
                
            }
        };

        if(valid){
    
            errorMsg.classList.remove('error-msg-active');
            explicationMsg.classList.add('explication-msg-active');
            submitBtn.style.display = 'none';
            reloadPage.style.display = 'block';
            guessesChecked.forEach(guessesChecked => {
                guessesChecked.classList.add('event-disabled')
            })

        }

        else {
            errorMsg.classList.add('error-msg-active');
        }


    };
    
reloadPage.addEventListener('click', (e)=> {
    document.location.reload();
});