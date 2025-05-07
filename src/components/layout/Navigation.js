class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        nav a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
        }

        nav a:hover {
          text-decoration: underline;
        }
      </style>
      <nav>
        <a href="#about">Über mich</a>
        <a href="#career">Werdegang</a>
        <a href="#skills">Fähigkeiten</a>
        <a href="#projects">Projekte</a>
      </nav>
    `;
  }
}

customElements.define("app-navigation", Navigation);