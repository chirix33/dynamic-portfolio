import { observeScrollForMenu } from "./functions.js";

// Helper functions and variables
const allLinks = document.querySelectorAll('#menu li');
const removeActiveClass = () => {
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
};
const setActiveClass = (target) => {
    removeActiveClass();
    target.classList.add('active');
};

document.addEventListener("DOMContentLoaded", function() {
    // Observe the scroll for the menu
    observeScrollForMenu();

    // Add smooth scrolling to all links
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

    // Highlight the current section in the menu
    const sections = Array.from(allLinks).map(item => document.querySelector(item.getAttribute('data-href')));
    const setActiveMenuItem = () => {
      let index = sections.length;

      while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

      allLinks.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
    };

    window.addEventListener('scroll', setActiveMenuItem);
    setActiveMenuItem();
});