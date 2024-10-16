import { observeScrollForMenu } from './observer.js';

const allLinks = document.querySelectorAll('nav > ul > li');

function removeActiveClass() {
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
}

function setActiveClass(target) {
    removeActiveClass();
    target.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    observeScrollForMenu();

    allLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = event.target.getAttribute('data-href');
            setActiveClass(event.target);
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        });
    })
});

