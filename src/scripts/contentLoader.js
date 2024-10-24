import 
{  
    injectExperience, 
    injectProjects, 
    injectContactEmail,
    injectColorTheme,
    observeScrollForMenu
} from "./functions.js";

injectColorTheme();
injectExperience();
injectProjects();
injectContactEmail();

document.getElementById('theme_button').addEventListener("click", () => {
    const chooseThemeDiv = document.getElementById('choose_theme');
    chooseThemeDiv.classList.remove('hidden');
});

document.getElementById('close_modal').addEventListener('click', (event) => {
    const modalContent = document.getElementById('modal_content');

    if (!modalContent.contains(event.target)) {
        document.getElementById('choose_theme').classList.add('hidden');
    }
});

document.getElementById('light_theme').addEventListener('click', () => {
    document.body.classList.remove('dark');
    document.getElementById('choose_theme').classList.add('hidden');
    observeScrollForMenu();
    localStorage.setItem('theme', 'light');
});

document.getElementById('dark_theme').addEventListener('click', () => {
    document.body.classList.add('dark');
    document.getElementById('choose_theme').classList.add('hidden');
    observeScrollForMenu();
    localStorage.setItem('theme', 'dark');
});