class CareerTimeline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .career-timeline {
          padding: 1.3rem;
          border: 1px solid #ddd;
          border-radius: 1rem;
          background-color: #f9f9f9;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .career-timeline h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #333;
        }
      </style>
      <div class="career-timeline">
        <h2></h2>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("career-timeline", CareerTimeline);