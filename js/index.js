// Your code goes here
const funBus = document.querySelector('.logo-heading');
const navLink = document.querySelectorAll('.nav-link');
const welcome = document.querySelector('.intro h2');


funBus.addEventListener('mouseover', (e) => {
    e.target.style.color = 'pink';
});

navLink.forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.style.color = 'pink';
        e.target.style.fontSize = '2rem';
    });
});

navLink.forEach(el => {
    el.addEventListener('mouseleave', (e) => {
        e.target.style.color = 'black';
        e.target.style.fontSize = '1.7rem';
    })
});

welcome.addEventListener('mouseover', () => {
    welcome.style.color = 'orange';
});