class SkillsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .skills-card {
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #f9f9f9, #eaeaea);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 1rem 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skills-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .skill-item {
          flex: 1 1 calc(33.333% - 1rem);
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .skills-card {
            padding: 1rem;
          }

          .skill-item {
            flex: 1 1 100%;
          }
        }
      </style>
      <div class="skills-card">
        <div class="skills-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("skills-card", SkillsCard);