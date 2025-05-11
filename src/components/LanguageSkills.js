class LanguageSkills extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .language-skills {
          padding: 1.5rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, #f9f9f9, #eaeaea);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 1rem 0;
        }

        .language-skill {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        .language-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .language-name {
          font-weight: bold;
          font-size: 1.1rem;
          color: #333;
        }

        .progress-bar {
          width: 100%;
          height: 0.5rem;
          background-color: #e0e0e0;
          border-radius: 0.25rem;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: #4caf50;
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .language-skills {
            padding: 1rem;
          }

          .language-name {
            font-size: 1rem;
          }

          .language-level {
            font-size: 0.9rem;
          }
        }
      </style>
      <div class="language-skills">
        <slot></slot>
      </div>
    `;

    const languages = this.querySelectorAll('.language-skill');
    languages.forEach((language) => {
      const progress = language.getAttribute('progress') || '0';
      const color = language.getAttribute('color') || '#000';
      const icon = language.getAttribute('icon') || '';

      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.marginBottom = '12px';

      const iconElement = document.createElement('i');
      iconElement.className = icon;
      iconElement.style.marginRight = '12px';
      iconElement.style.fontSize = '24px';
      iconElement.style.color = color;

      const textContainer = document.createElement('div');
      textContainer.style.flex = '1';

      const languageName = language.querySelector('.language-name');
      const languageLevel = language.querySelector('.language-level');

      textContainer.appendChild(languageName);
      textContainer.appendChild(languageLevel);

      const progressBar = document.createElement('div');
      progressBar.style.width = `${progress}%`;
      progressBar.style.backgroundColor = color;
      progressBar.style.height = '8px';
      progressBar.style.borderRadius = '4px';
      progressBar.style.marginTop = '4px';

      textContainer.appendChild(progressBar);

      container.appendChild(iconElement);
      container.appendChild(textContainer);

      language.innerHTML = '';
      language.appendChild(container);
    });
  }

  static get observedAttributes() {
    return ["progress"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "progress") {
      this.updateProgress(newValue);
    }
  }

  updateProgress(progress) {
    const progressBarFill = this.shadowRoot.querySelector(".progress-bar-fill");
    if (progressBarFill) {
      progressBarFill.style.width = `${progress}%`;
    }
  }
}

customElements.define("language-skills", LanguageSkills);