
// MENU ANIMATION 

let button = document.querySelectorAll(".btn-menu");
let list = document.querySelectorAll('.list-menu');

button.forEach(button => {

    button.addEventListener("mouseenter", e => {
        button.classList.add('open');
        list.forEach(list => {
            list.addEventListener('mouseleave', e => {
                button.classList.remove('open');
            })
        })
    })
})

button.forEach(button => {

    button.addEventListener("click", e => {
        button.classList.toggle('open'); 
    })
    if(button.classList.contains('open')){
        
    }
})

let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

button1.addEventListener('mouseenter', e => {

    button2.classList.remove('open');
    button3.classList.remove('open');
})

button2.addEventListener('mouseenter', e => {

    button1.classList.remove('open');
    button3.classList.remove('open');
})

button3.addEventListener('mouseenter', e => {

    button1.classList.remove('open');
    button2.classList.remove('open');
})

// BURGER MOBILE MENU


let burger = document.querySelector('.burger')

burger.addEventListener('click', function(){

    burger.classList.toggle('active');

});


// ACCORDION MOBILE MENU


let menuMobile = document.querySelector('.main-menu-mobile');


burger.addEventListener('click', e => {

    menuMobile.classList.toggle('active');
    

})


let accordionButton = document.querySelectorAll(".accordion_title");


accordionButton.forEach(accordionButton => {

    accordionButton.addEventListener("click", e => {
        accordionButton.classList.toggle('active');
        let list = accordionButton.nextElementSibling;
        if(accordionButton.classList.contains('active')){
            list.style.maxHeight = list.scrollHeight + "px";
        }
        else {
            list.style.maxHeight = 0;
        }
    })
})


let title1 = document.querySelector('.titlebtn1');
let title2 = document.querySelector('.titlebtn2');
let title3 = document.querySelector('.titlebtn3');

let ac1 = document.querySelector('.ac1')
let ac2 = document.querySelector('.ac2')
let ac3 = document.querySelector('.ac3')

title1.addEventListener('click', e => {

    title2.classList.remove('active');
    ac2.style.maxHeight = 0;
    title3.classList.remove('active');
    ac3.style.maxHeight = 0;
});


title2.addEventListener('click', e => {

    title1.classList.remove('active');
    ac1.style.maxHeight = 0;
    title3.classList.remove('active');
    ac3.style.maxHeight = 0;
});

title3.addEventListener('click', e => {

    title1.classList.remove('active');
    ac1.style.maxHeight = 0;
    title2.classList.remove('active');
    ac2.style.maxHeight = 0;
});

