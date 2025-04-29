const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

const projects = [
    {
        name: 'CleanGraphQL',
        description: 'Minimalistisches Cleanarchitecture basiertes projekt mit graphql',
        githubLink: 'https://github.com/Nivisan-Jeyananthan/CleanGraphQL',
        githubIcon: 'fab fa-github'
    },{
        name: 'TodoApp',
        description: 'Eine TodoApp ohne tracking und nur local storage mit React, TS und Docker.',
        githubLink: 'https://github.com/Nivisan-Jeyananthan/TodoApp',
        githubIcon: 'fab fa-github'
    },{
        name: 'Professional-Modern-WPF-UI',
        description: 'Ein beispielprojekt, um zu zeigen wie WPF richtig funktioniert.',
        githubLink: 'https://github.com/Nivisan-Jeyananthan/Professional-Modern-WPF-UI',
        githubIcon: 'fab fa-github'
    },{
        name: 'TicTacToe',
        description: 'Das berühmte TicTacToe mit ReactJS, um einzelne Konzepte von React zu zeigen.',
        githubLink: 'https://github.com/Nivisan-Jeyananthan/TicTacToe',
        githubIcon: 'fab fa-github'
    }
];

// Füge die Projekte in die HTML-Sektion ein
const projectsContainer = document.querySelector('.projects-container');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <div class="project-info">
            <h3>${project.name}</h3>
            <p class="project-description">${project.description}</p>
        </div>
        <div class="project-links">
            <a href="${project.githubLink}" target="_blank" class="github-link">
                <i class="${project.githubIcon}"></i> GitHub
            </a>
        </div>
    `;
    projectsContainer.appendChild(projectCard);
});
// Projekte anzeigen, wenn das Skript geladen wird
document.addEventListener('DOMContentLoaded', displayProjects);

