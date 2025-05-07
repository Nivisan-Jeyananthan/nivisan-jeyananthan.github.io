class ExperienceItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const title = this.getAttribute("title") || "Unbekannter Titel";
        const institution = this.getAttribute("institution") || "Unbekannte Institution";
        const date = this.getAttribute("date") || "Kein Datum angegeben";
        const description = this.getAttribute("description") || "Keine Beschreibung verfügbar.";

        this.shadowRoot.innerHTML = `
        <style>
          .experience-item {
            border-left: 2px solid #4caf50;
            padding-left: 15px;
            margin-bottom: 20px;
          }
  
          .experience-title {
            font-size: 18px;
            font-weight: bold;
            margin: 0;
          }
  
          .experience-institution {
            font-size: 14px;
            color: #666;
            margin: 5px 0;
          }
  
          .experience-date {
            font-size: 12px;
            color: #999;
            margin: 5px 0;
          }
  
          .experience-description {
            font-size: 14px;
            color: #555;
            margin: 10px 0 0;
          }
        </style>
        <div class="experience-item">
          <h3 class="experience-title">${title}</h3>
          <p class="experience-institution">${institution}</p>
          <p class="experience-date">${date}</p>
          <p class="experience-description">${description}</p>
        </div>
      `;
    }
}

customElements.define("experience-item", ExperienceItem);