const btn1 = document.querySelectorAll('.btnJs');
const btn2 = document.querySelectorAll('.button-with-icon');
const btnOpen = document.querySelector('.button-open');

const cards = document.querySelector('.cards');
const grid = document.querySelector('.button-grid');
const list = document.querySelector('.button-list');

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');
const header = document.querySelector('.header');
//this is a function #1
const onClickFunction = (e) => {
    const event = e.target;

    btn1.forEach((button) => {
        if(button !== event && button.classList.contains('btnJs')) {
            button.classList.remove('active')
        }
    })

    event.classList.add('active')
}

//this is a function #2
const onClickFunction1 = (e) => {
    const event = e.target;

    btn2.forEach((button) => {
        if(button !== event && button.classList.contains('button-with-icon')) {
            button.classList.remove('active')
        }
    })

    event.classList.add('active')
}

//this is eventListener
btn1.forEach((button) => {
    button.addEventListener('click', onClickFunction)
})

//this is eventListener
btn2.forEach((button) => {
    button.addEventListener('click', onClickFunction1)
})

grid.addEventListener('click', () => {
    cards.classList.remove('cards-list')
    cards.classList.add('cards-grid')

    list.classList.remove('active')
    grid.classList.add('active')
})

list.addEventListener('click', () => {
    cards.classList.remove('cards-grid')
    cards.classList.add('cards-list')

    grid.classList.remove('active')
    list.classList.add('active')
})

btnOpen.addEventListener('click', () => {
    btn1.forEach(item => item.classList.add('open')
    )

    btnOpen.style.display = 'none'
})

hamburger.addEventListener('click', () =>{
    hamburger. classList.toggle('hamburger-oupen');
    if(hamburger.classList.contains('hamburger-oupen')){
        navWrapper.style.display = 'flex';
        header.style.display = '.8';
    } else {
        navWrapper.style.display = 'none';
        header.style.display = '.5';
    }
})