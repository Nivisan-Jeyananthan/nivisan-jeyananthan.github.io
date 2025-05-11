class AppContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .content {
          padding: 1.3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        section {
          margin-bottom: 3rem;
        }

        section h2 {
          font-size: 24px;
          margin-bottom: 20px;
          border-bottom: 2px solid #4caf50;
          padding-bottom: 5px;
        }

        section p {
          font-size: 16px;
          color: #555;
        }
      </style>
      <div class="content">
        <!-- About Section -->
        <section id="about">
          <h2>Über mich</h2>
          <p>Hallo, mein Name ist Nivisan Jeyananthan. Ich bin ein leidenschaftlicher Softwareentwickler mit Fokus auf moderne Webtechnologien, Backend-Entwicklung und DevOps-Prozesse.</p>
        </section>

       <!-- Skills Section -->
        <section id="skills">
          <h2>Fähigkeiten</h2>
          <slot name="skills"></slot>
        </section>

      <section id="languages">
        <h2>Sprachen</h2>
        <slot name="languages"></slot>
      </section>

        <!-- Projects Section -->
      <section id="projects">
          <h2>Projekte</h2>
          <slot name="projects"></slot>
        </section>
      </div>

      <!-- Career Section -->
      <section id="career">
        <h2>Werdegang</h2>
        <slot name="career"></slot>
      </section>
    `;
  }
}

customElements.define("app-content", AppContent);