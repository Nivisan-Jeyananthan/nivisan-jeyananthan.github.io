class ExperienceTimeline extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const title = this.getAttribute("title") || "Werdegang";

        this.shadowRoot.innerHTML = `
        <style>
          .experience-timeline {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            margin-bottom: 20px;
          }
  
          .experience-timeline h2 {
            margin: 0 0 20px;
            font-size: 20px;
            color: #333;
          }
  
          .timeline-content {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
        </style>
        <div class="experience-timeline">
          <h2>${title}</h2>
          <div class="timeline-content">
            <slot></slot>
          </div>
        </div>
      `;
    }
}

customElements.define("experience-timeline", ExperienceTimeline);