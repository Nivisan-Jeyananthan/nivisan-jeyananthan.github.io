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
                    const projectElement = document.createElement("project-item");
                    projectElement.setAttribute("name", project.name);
                    projectElement.setAttribute("description", project.description);
                    projectElement.setAttribute("link", project.link);
                    projectElement.setAttribute("tags", project.tags.join(", "));

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