class ProjectItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Projektname";
    const description = this.getAttribute("description") || "Projektbeschreibung...";
    const link = this.getAttribute("link") || "#";
    const tags = this.getAttribute("tags") || "";

    this.shadowRoot.innerHTML = `
      <style>
        .project-item {
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          background-color: #f9f9f9;
        }

        .project-item h4 {
          margin: 0 0 5px;
          font-size: 16px;
        }

        .project-item p {
          font-size: 14px;
          color: #555;
        }

        .project-item a {
          color: #4caf50;
          text-decoration: none;
          font-size: 14px;
        }

        .project-item .tags {
          margin-top: 10px;
          font-size: 12px;
          color: #888;
        }
      </style>
      <li class="project-item">
        <h4>${name}</h4>
        <p>${description}</p>
        <a href="${link}" target="_blank">Details anzeigen</a>
        <div class="tags">${tags}</div>
      </li>
    `;
  }
}

customElements.define("project-item", ProjectItem);