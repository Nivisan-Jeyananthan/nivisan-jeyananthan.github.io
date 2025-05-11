document.addEventListener("DOMContentLoaded", async () => {
    // Funktion zum Laden von Projekten aus der JSON-Datei
    async function loadProjects() {
        try {
            const response = await fetch("../../assets/data/projects.json");
            const projects = await response.json();

            // Ziel für die Projekte (Slot in <app-content>)
            const projectsSlot = document.querySelector("app-content [slot='projects']");

            if (projectsSlot) {
                // Projekte in den Slot einfügen
                projects.forEach(project => {
                    const projectElement = document.createElement("div");
                    projectElement.style.border = "1px solid #ddd";
                    projectElement.style.borderRadius = "8px";
                    projectElement.style.overflow = "hidden";
                    projectElement.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                    projectElement.style.marginBottom = "16px";
                    projectElement.style.display = "flex";
                    projectElement.style.flexDirection = "column";
                    projectElement.style.backgroundColor = "#fff";

                    const projectHeader = document.createElement("div");
                    projectHeader.style.padding = "16px";
                    projectHeader.style.backgroundColor = "#f4f4f4";
                    projectHeader.style.borderBottom = "1px solid #ddd";

                    const projectTitle = document.createElement("h3");
                    projectTitle.textContent = project.name;
                    projectTitle.style.margin = "0";
                    projectTitle.style.fontSize = "1.5rem";
                    projectTitle.style.color = "#333";

                    projectHeader.appendChild(projectTitle);

                    const projectDescription = document.createElement("p");
                    projectDescription.textContent = project.description;
                    projectDescription.style.margin = "16px";
                    projectDescription.style.color = "#666";

                    const projectFooter = document.createElement("div");
                    projectFooter.style.padding = "16px";
                    projectFooter.style.borderTop = "1px solid #ddd";
                    projectFooter.style.display = "flex";
                    projectFooter.style.justifyContent = "space-between";
                    projectFooter.style.alignItems = "center";

                    const projectLink = document.createElement("a");
                    projectLink.href = project.link;
                    projectLink.style.display = "flex";
                    projectLink.style.alignItems = "center";
                    projectLink.style.padding = "8px 16px";
                    projectLink.style.backgroundColor = "#24292e";
                    projectLink.style.color = "#fff";
                    projectLink.style.textDecoration = "none";
                    projectLink.style.borderRadius = "4px";
                    projectLink.style.transition = "background-color 0.3s";

                    const githubIcon = document.createElement("i");
                    githubIcon.className = "fa-brands fa-github";
                    githubIcon.style.marginRight = "8px";

                    const linkText = document.createElement("span");
                    linkText.textContent = "GitHub Projekt ansehen";

                    projectLink.appendChild(githubIcon);
                    projectLink.appendChild(linkText);

                    projectLink.addEventListener("mouseover", () => {
                        projectLink.style.backgroundColor = "#0366d6";
                    });

                    projectLink.addEventListener("mouseout", () => {
                        projectLink.style.backgroundColor = "#24292e";
                    });

                    projectFooter.appendChild(projectLink);

                    projectElement.appendChild(projectHeader);
                    projectElement.appendChild(projectDescription);
                    projectElement.appendChild(projectFooter);

                    projectsSlot.appendChild(projectElement);
                });
            }
        } catch (error) {
            console.error("Fehler beim Laden der Projekte:", error);
        }
    }

    // Projekte laden
    loadProjects();
});