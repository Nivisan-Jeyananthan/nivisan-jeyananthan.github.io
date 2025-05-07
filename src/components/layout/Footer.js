class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #333;
          color: #fff;
          text-align: center;
          padding: 10px;
        }

        footer p {
          margin: 0;
          font-size: 14px;
        }
      </style>
      <footer>
        <p>&copy; 2025 Nivisan Jeyananthan. Alle Rechte vorbehalten.</p>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);