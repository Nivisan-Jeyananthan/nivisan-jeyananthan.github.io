class SkillsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .skills-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          background-color: #fff;
          margin: 0.6rem 0;
        }
      </style>
      <div class="skills-card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("skills-card", SkillsCard);