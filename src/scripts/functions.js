export async function getContent (path) {
    return fetch(path)
    .then(response => response.json())
    .then(data => {
        return data;
    });
}

export function observeScrollForMenu () {
    const criteria = document.querySelector("header");
    const target = document.querySelector("#menu");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                if (document.body.classList.contains('dark')) {
                    target.classList.remove('scrolled');
                    target.classList.add('dark-scrolled');
                } else {
                    target.classList.remove('dark-scrolled');
                    target.classList.add('scrolled');
                }
            } else {
                target.classList.remove('scrolled');
                target.classList.remove('dark-scrolled');
            }
        });
    });

    observer.observe(criteria);
}

export async function injectExperience() {
    // Experience Section Content
    const experienceSection = document.querySelector("#experience_cards");
    const experienceCardsClasses = ["experience-card", "cursor-pointer", "hover:shadow-md", "p-8", "rounded-lg", "w-full", "text-slate-800", "bg-gradient-to-r", "from-cream-cheese-100", "to-cream-cheese-200", "dark:from-gray-500", "dark:to-gray-700", "dark:text-white"];
    
    // Grab experience.json data
    const experiences = await getContent("src/data/experience.json");

    experiences.experiences.map(experience => {
        const card = document.createElement('div');
        card.classList.add(...experienceCardsClasses);
        card.innerHTML = `
            <div class="flex justify-between items-center">
                <h3 class="text-lg">${experience.company}</h3>
                <span class="date text-gray-800 dark:text-white text-sm">${experience.start_date} - ${experience.end_date}</span>
                </div>
            <p class="font-bold">${experience.position}</p>
        `;
        experienceSection.appendChild(card);
    });
}

export async function injectProjects() {
    const projectsSection = document.querySelector("#projects_table");
    const projectsTableBody = document.querySelector("#projects_body");

    // Grab projects.json data
    const projects = await getContent("src/data/projects.json");

    if (!projects.projects || projects.projects.length === 0) {
        const noProjects = document.createElement('p');
        noProjects.classList.add('text-center', 'text-xl', 'text-gray-800');
        noProjects.innerHTML = "Coming Soon! Working on some screws and bolts to make this section look good!";
        projectsSection.innerHTML = noProjects.outerHTML;
    }

    const table = document.createElement('table');
    projects.projects.map(project => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="p-4 border-b border-blue-gray-50">
            <div class="flex items-center gap-3">
                <div class="flex gap-3 items-center justify-center">
                <img src="${project.icon}" alt="${project.name}" class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md">            
                <p class="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">${project.name}</p>
                </div>
            </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
            <div class="max-w-24 lg:max-w-full whitespace-wrap">
                <p class="antialiased text-sm leading-normal text-blue-gray-900 font-normal">
                ${project.description}
                </p>
            </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
            <div class="flex flex-col">
                <p class="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">${
                    project.tech_stack.join(", ")
                }</p>
            </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
            <div class="w-max">
                <div class="relative grid items-center  font-bold uppercase whitespace-nowrap select-none ${project.status.toLowerCase() == 'active' ? 'bg-purple-500/20 text-purple-600' : 'bg-green-500/20 text-green-600' } py-1 px-2 text-xs rounded-md" style="opacity: 1;">
                <span class="">${project.status}</span>
                </div>
            </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
            <a href="${project.link}" target="_blank" data-project="${project.name}" class="flex view-project relative align-middle select-none text-royal-palm-600 dark:text-white font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                </svg>              
                </span>
            </a>
            </td>
        `;
        row.classList.add("hover", "cursor-pointer","hover:bg-royal-palm-100", "dark:hover:bg-gray-600");
        projectsTableBody.appendChild(row);
        
    });
    projectsSection.appendChild(table);
}

export async function injectContactEmail() {
    const contactEmail = document.querySelector("#contact_email");
    const email = await getContent("src/data/email.json");
    const p = document.createElement("p");
    p.classList.add("text-sm");
    p.innerHTML = email.email;
    contactEmail.appendChild(p);
}

export function injectColorTheme() {
    // Fetch color theme from localstorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
    }
}