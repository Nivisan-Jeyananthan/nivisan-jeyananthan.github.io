class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

        nav {
          background: linear-gradient(90deg, #333, #555);
          color: #fff;
          padding: 15px 20px;
          display: flex;
          justify-content: center;
          gap: 25px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-family: 'Arial', sans-serif;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        nav a:hover {
          color: #4caf50;
          text-decoration: underline;
        }

        .nav-icon {
          font-size: 1.2rem;
        }
      </style>
      <nav>
        <a href="#about"><i class="nav-icon fa-solid fa-user"></i>Über mich</a>
        <a href="#career"><i class="nav-icon fa-solid fa-briefcase"></i>Werdegang</a>
        <a href="#skills"><i class="nav-icon fa-solid fa-lightbulb"></i>Fähigkeiten</a>
        <a href="#projects"><i class="nav-icon fa-solid fa-folder"></i>Projekte</a>
      </nav>
    `;
  }
}

customElements.define("app-navigation", Navigation);