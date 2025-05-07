class SkillItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Unbekannt";
    const level = this.getAttribute("level") || "Unbekannt";
    const iconClass = this.getAttribute("icon") || "";

    this.shadowRoot.innerHTML = `
      <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

        .skill-item {
          display: flex;
          align-items: center;
        }

        .skill-icon {
          font-size: 24px;
          color: #4caf50;
          margin-right: 10px;
        }
      </style>
      <div class="skill-item">
        ${iconClass ? `<i class="skill-icon ${iconClass}"></i>` : ""}
        <span>${name} - ${level}</span>
      </div>
    `;
  }
}

customElements.define("skill-item", SkillItem);