class SkillItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Unbekannt";
    const level = this.getAttribute("level") || "Unbekannt";
    const iconClass = this.getAttribute("icon") || "";
    const progress = this.getAttribute("progress") || "50"; // Default progress value
    const color = this.getAttribute("color") || "#4caf50"; // Default color

    this.shadowRoot.innerHTML = `
      <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

        .skill-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .skill-icon {
          font-size: 1.5rem;
          color: ${color};
        }

        .skill-name {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .progress-bar {
          width: 100%;
          height: 0.5rem;
          background-color: #e0e0e0;
          border-radius: 0.25rem;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: ${color};
          width: ${progress}%;
          transition: width 0.3s ease;
        }
      </style>
      <div class="skill-item">
        <div class="skill-header">
          ${iconClass ? `<i class="skill-icon ${iconClass}"></i>` : ""}
          <span class="skill-name">${name}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("skill-item", SkillItem);