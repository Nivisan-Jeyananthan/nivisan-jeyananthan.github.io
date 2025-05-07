class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background-color: #4caf50;
          color: #fff;
          padding: 20px;
          text-align: center;
        }

        header h1 {
          margin: 0;
          font-size: 24px;
        }
      </style>
      <header>
        <h1>Willkommen zu meinem Portfolio</h1>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);