class CareerTimeline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .career-timeline {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
      </style>
      <div class="career-timeline">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("career-timeline", CareerTimeline);