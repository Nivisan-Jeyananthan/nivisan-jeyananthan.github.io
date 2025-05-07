class AppAbout extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image") || "./assets/default-profile.jpg";

    this.innerHTML = `
        <section id="about" class="section-about">
          <div class="about-content">
            <img src="${image}" alt="Profile Image">
            <div>
              <h3><slot name="about-name">Your Name</slot></h3>
              <p><slot name="about-description"></slot></p>
              <slot name="about-extra-content"></slot>
            </div>
          </div>
        </section>
      `;
  }
}
customElements.define("app-about", AppAbout);