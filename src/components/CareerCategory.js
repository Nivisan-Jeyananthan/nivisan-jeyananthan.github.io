class CareerCategory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Kategorie";

    this.shadowRoot.innerHTML = `
      <style>
        .career-category {
          margin-bottom: 40px;
        }

        .career-category-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }
      </style>
      <div class="career-category">
        <h3 class="career-category-title">${title}</h3>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("career-category", CareerCategory);