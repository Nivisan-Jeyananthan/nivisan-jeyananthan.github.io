class AppAbout extends HTMLElement {
/**
 *
 */
constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

  connectedCallback() {
    const image = this.getAttribute("image") || "./assets/default-profile.jpg";

    this.innerHTML = `
        <section id="about" class="section-about">
          <div class="about-content" style="display: flex; align-items: center; gap: 1.5rem;">
            <img src="${image}" alt="Profile Image" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
            <div>
              <h3 style="margin: 0; font-size: 1.5rem; color: #333;"><slot name="about-name"></slot></h3>
              <p style="margin: 0.5rem 0; color: #666; line-height: 1.6;"><slot name="about-description"></slot></p>
              <div style="margin-top: 1rem;">
                <slot name="about-extra-content"></slot>
              </div>
            </div>
          </div>
        </section>
      `;
  }
}
customElements.define("app-about", AppAbout);