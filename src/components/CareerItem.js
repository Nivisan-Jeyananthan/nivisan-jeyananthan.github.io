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
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .career-title {
          font-weight: bold;
          font-size: 1.2rem;
          color: #333;
        }

        .career-institution {
          font-style: italic;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .career-date {
          font-size: 0.9rem;
          color: #999;
          margin-bottom: 0.5rem;
        }

        .career-description {
          color: #444;
          line-height: 1.5;
        }
      </style>
      <div class="career-item">
        <div class="career-title">${title}</div>
        <div class="career-institution">${institution}</div>
        <div class="career-date">${date}</div>
        <div class="career-description">${description}</div>
      </div>
    `;
  }
}

customElements.define("career-item", CareerItem);