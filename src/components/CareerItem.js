class CareerItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Unbekannter Titel";
    const institution = this.getAttribute("institution") || "Unbekannte Institution";
    const date = this.getAttribute("date") || "Kein Datum angegeben";
    const description = this.innerHTML || "";

    this.shadowRoot.innerHTML = `
      <style>
        .career-item {
          margin-bottom: 1.5rem;
        }

        .career-title {
          font-weight: bold;
        }

        .career-institution {
          font-style: italic;
          color: #666;
        }

        .career-date {
          font-size: .9rem;
          color: #999;
        }
      </style>
      <div class="career-item">
        <div class="career-title">${title}</div>
        <div class="career-institution">${institution}</div>
        <div class="career-date">${date}</div>
        <div>${description}</div>
      </div>
    `;
  }
}

customElements.define("career-item", CareerItem);