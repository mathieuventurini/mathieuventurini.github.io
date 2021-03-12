
let button = document.querySelectorAll(".accordion_question");


button.forEach(button => {

    button.addEventListener("click", e => {
        button.classList.toggle('open');
        let accordion = button.nextElementSibling;
        if(button.classList.contains('open')){
            accordion.style.maxHeight = accordion.scrollHeight + "px";
        }
        else {
            accordion.style.maxHeight = 0;
        }
    })
})
