class LanguageSkills extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .language-skills {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .language-skill {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .language-skill:last-child {
          margin-bottom: 0;
        }

        .language-name {
          font-weight: bold;
        }

        .language-level {
          color: #555;
        }
      </style>
      <div class="language-skills">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("language-skills", LanguageSkills);