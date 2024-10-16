export function observeScrollForMenu() {
    const criteria = document.querySelector("header");
    const target = document.querySelector("#menu");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                target.classList.add('scrolled');
            } else {
                target.classList.remove('scrolled');
            }

        });
    });

    observer.observe(criteria);
}