class ProjectsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Projekte";

    this.shadowRoot.innerHTML = `
      <style>
        .projects-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          background-color: #fff;
        }

        .projects-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .project-list {
          list-style: none;
          padding: 0;
        }
      </style>
      <div class="projects-card">
        <h3 class="projects-title">${title}</h3>
        <ul class="project-list">
          <slot></slot>
        </ul>
      </div>
    `;
  }
}

customElements.define("projects-card", ProjectsCard);

class ProjectCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Projekt';
    const description = this.getAttribute('description') || 'Beschreibung des Projekts';
    const link = this.getAttribute('link') || '#';
    const image = this.getAttribute('image') || './assets/images/default-project.jpg';

    const container = document.createElement('div');
    container.style.border = '1px solid #ddd';
    container.style.borderRadius = '8px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    container.style.marginBottom = '16px';

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.style.width = '100%';
    img.style.height = 'auto';

    const content = document.createElement('div');
    content.style.padding = '16px';

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;
    projectTitle.style.margin = '0 0 8px';
    projectTitle.style.fontSize = '1.25rem';
    projectTitle.style.color = '#333';

    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    projectDescription.style.margin = '0 0 16px';
    projectDescription.style.color = '#666';

    const projectLink = document.createElement('a');
    projectLink.href = link;
    projectLink.textContent = 'Mehr erfahren';
    projectLink.style.display = 'inline-block';
    projectLink.style.padding = '8px 16px';
    projectLink.style.backgroundColor = '#0078D7';
    projectLink.style.color = '#fff';
    projectLink.style.textDecoration = 'none';
    projectLink.style.borderRadius = '4px';
    projectLink.style.transition = 'background-color 0.3s';

    projectLink.addEventListener('mouseover', () => {
      projectLink.style.backgroundColor = '#005bb5';
    });

    projectLink.addEventListener('mouseout', () => {
      projectLink.style.backgroundColor = '#0078D7';
    });

    content.appendChild(projectTitle);
    content.appendChild(projectDescription);
    content.appendChild(projectLink);

    container.appendChild(img);
    container.appendChild(content);

    this.appendChild(container);
  }
}

customElements.define('project-card', ProjectCard);