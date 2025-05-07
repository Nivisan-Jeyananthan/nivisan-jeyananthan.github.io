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