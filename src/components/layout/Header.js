class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(90deg, #4caf50, #81c784);
          color: #fff;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        header h1 {
          margin: 0;
          font-size: 2rem;
          font-family: 'Arial', sans-serif;
          letter-spacing: 1px;
        }

        header p {
          margin: 5px 0 0;
          font-size: 1rem;
          font-family: 'Arial', sans-serif;
          color: #e8f5e9;
        }
      </style>
      <header>
        <h1>Willkommen zu meinem Portfolio</h1>
        <p>Entdecken Sie meine Projekte und Fähigkeiten</p>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);