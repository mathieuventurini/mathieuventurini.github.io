
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


// AFFICHER EN JAUNE AU CLIC 
for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].addEventListener('click', e => {
        guessesChecked.forEach(guessesChecked => {
            guessesChecked.addEventListener('click', e => {
                guessesChecked.classList.toggle('guesses-checked')
            } )
        })
    })
}



    


    function checked(){

        let valid = false;
        for (let i = 0; i < allAnswers.length; i++) {
            if(allAnswers[i].checked){
                valid = true;
                break;
            }
        }
        for (let index = 0; index < wrongAnswer.length; index++) {
            if(wrongAnswer[index].classList.contains('guesses-checked')){
                wrongAnswer[index].classList.add('wrong-answer')
            }
            
        }

        for (let e = 0; e < correctAnswer.length; e++) {
            if(correctAnswer[e].classList.contains('guesses-checked')){
                console.log(correctAnswer);
            }
            else{
                correctAnswer[e].classList.add('wrong-answer');
            }
            
        };

        if (valid){
    
            correctAnswer.forEach(correctAnswer => {
                correctAnswer.classList.add('correct-answer');
            });
            errorMsg.classList.remove('error-msg-active');
            explicationMsg.classList.add('explication-msg-active');
            guessesChecked.forEach(guessesChecked => {
                guessesChecked.classList.remove('guesses-checked')
            })
        }
        else {
            errorMsg.classList.add('error-msg-active');
    
        }
    };
    
reloadPage.addEventListener('click', (e)=> {
    document.location.reload();
})



    // function checked(){

    //     let valid = false;
    //     for (let i = 0; i < allAnswers.length; i++) {
    //         if(allAnswers[i].checked){
    //             valid = true;
    //             break;
    //         }
    //     }
    
    //     if (valid){
    
    //         correctAnswer.forEach(correctAnswer => {
    //             correctAnswer.classList.add('correct-answer');
    //         });
    //         // wrongAnswer.forEach(wrongAnswer => {
    //         //     wrongAnswer.classList.add('wrong-answer');
    //         // });
    //         errorMsg.classList.remove('error-msg-active');
    //         explicationMsg.classList.add('explication-msg-active');
    //         guessesChecked.forEach(guessesChecked => {
    //             guessesChecked.classList.remove('guesses-checked')
    //         })
    //     }
    //     else {
    //         errorMsg.classList.add('error-msg-active');
    
    //     }
    // };
    
    //     reloadPage.addEventListener('click', (e)=> {
    //         document.location.reload();
    //     })