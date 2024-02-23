const btn1 = document.querySelectorAll('.btnJs');
const btn2 = document.querySelectorAll('.button-with-icon');
const btnOpen = document.querySelector('.button-open');

const cards = document.querySelectorAll('.cards');
const grid = document.querySelector('.button-grid');
const list = document.querySelector('.button-list');

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');
const header = document.querySelector('.header');

const pagination = document.querySelector('.pagination');
const paginationTotal = document.querySelector('.pagination__total');
const paginationDots = document.querySelector('.pagination__dots');
const slideNext = document.querySelector('.next');
const slidePrev = document.querySelector('.prev');



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
    cards.forEach((item) => {
        item.classList.remove('cards-list')
        item.classList.add('cards-grid')
    })

    list.classList.remove('active')
    grid.classList.add('active')
})

list.addEventListener('click', () => {
    cards.forEach((item) => {
        item.classList.remove('cards-grid')
        item.classList.add('cards-list')
    })

    grid.classList.remove('active')
    list.classList.add('active')
})

btnOpen.addEventListener('click', () => {
    btn1.forEach(item => item.classList.add('open')
    )

    btnOpen.style.display = 'none'
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-open');
    if(hamburger.classList.contains('hamburger-open')) {
        navWrapper.style.display = 'flex';
        header.style.opacity = '.8'
    } else {
        navWrapper.style.display = 'none';
        header.style.opacity = '.5';
    }
})


for(let i = 0; i < cards.length; i++) {
    const li = pagination.appendChild(document.createElement('li'));
    const btn = li.appendChild(document.createElement('button'));
    li.classList.add('pagination__item');
    btn.classList.add('pagination__link');
    if(i < 9) {
        btn.innerHTML = `0${i + 1}`;
    } else {
        btn.innerHTML = `${i + 1}`;
    }
    paginationTotal.innerHTML = `${cards.length < 10 ? '0' + cards.length : cards.length }`
}

const paginationItem = document.querySelectorAll('.pagination__item');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if(n > cards.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = cards.length;
    }

    cards.forEach((item) => {item.style.display = 'none'});

    const displayProperty = cards[slideIndex - 1].classList.contains('cards-grid') ? 'grid' : 'flex';
    cards[slideIndex - 1].style.display = displayProperty;

    paginationItem.forEach((item) => {item.classList.remove('pagination__item-active')})
    paginationItem[slideIndex - 1].classList.add('pagination__item-active')

}

function plusSlides(n) {
    showSlides(slideIndex += n)

    if(slideIndex == cards.length) {
        paginationTotal.setAttribute('style', 'opacity: 1');
        slideNext.children[0].children[0].setAttribute('style', 'opacity: 0.1');
    } else {
        paginationTotal.setAttribute('style', 'opacity: 0.1');
        slideNext.children[0].children[0].setAttribute('style', 'opacity: 1');
    }

    if(slideIndex == 1) {
        slidePrev.children[0].children[0].setAttribute('style', 'opacity: 0.1');
    } else {
        slidePrev.children[0].children[0].setAttribute('style', 'opacity: 1');
    }
}

slideNext.addEventListener('click', () => {
    slideIndex < cards.length ? plusSlides(1) : plusSlides(0)
    if(slideIndex == cards.length - 2) {
        paginationDots.setAttribute('style', 'display: none')
    }
    if (slideIndex > 2 && slideIndex != cards.length) {
        paginationItem[slideIndex - 1].setAttribute('style', 'display: block')
        paginationItem[slideIndex].setAttribute('style', 'display: block')
        paginationItem[0].setAttribute('style', 'display: none')
        if(slideIndex == cards.length - 2) {
            paginationItem[slideIndex - 3].setAttribute('style', 'display: block')
        } else {
            paginationItem[slideIndex - 3].setAttribute('style', 'display: none')
        }
        if(slideIndex == cards.length - 1) {
            paginationItem[slideIndex - 3].setAttribute('style', 'display: block')
        } 
    }
    if(slideIndex == cards.length - 1){
        paginationItem[slideIndex].setAttribute('style', 'display: none')
    }
})

    slidePrev.addEventListener('click', () => {
        slideIndex > 1 ? plusSlides(-1) : plusSlides(0)
        if(slideIndex == cards.length - 4) {
            paginationDots.setAttribute('style', 'display: block')
        }
        if(slideIndex < cards.length) {
            if(paginationItem [slideIndex + 2]) {
                paginationItem[slideIndex + 2].style.display = 'none';
            }
            paginationItem[slideIndex - 1].style.display = 'block';
        }  
})