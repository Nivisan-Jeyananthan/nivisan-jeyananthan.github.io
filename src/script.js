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
    body.style.transition = 'background-color 0.5s, color 0.5s';
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
document.addEventListener('DOMContentLoaded', () => {
    console.log('Projekte wurden erfolgreich geladen.');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const filterInput = document.createElement('input');
filterInput.type = 'text';
filterInput.placeholder = 'Projekte filtern...';
filterInput.classList.add('project-filter');
document.querySelector('.section-projects').prepend(filterInput);

filterInput.addEventListener('input', (e) => {
    const filterText = e.target.value.toLowerCase();
    document.querySelectorAll('.project-card').forEach(card => {
        const projectName = card.querySelector('h3').textContent.toLowerCase();
        if (projectName.includes(filterText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const barWidth = bar.getAttribute('style').match(/width: (\d+)%/)[1];
        bar.style.width = '0';
        bar.style.transition = 'width 1s ease-in-out';
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (barPosition < screenPosition) {
            bar.style.width = `${barWidth}%`;
        }
    });
};

window.addEventListener('scroll', animateProgressBars);

const contactForm = document.querySelector('#contact-form'); // Beispiel-ID
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        if (!emailInput.value || !messageInput.value) {
            alert('Bitte füllen Sie alle Felder aus.');
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        } else {
            alert('Vielen Dank für Ihre Nachricht!');
            contactForm.reset();
        }
    });
}

