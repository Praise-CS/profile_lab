// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoadingProjects(true);
        setProjectsError("");

        // Fetch projects from backend API
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) {
          throw new Error("Projects API responded with an error.");
        }

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setProjectsError("Unable to load projects at the moment.");
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <h1 className="page-title mb-3">Projects</h1>
          <p className="section-subtitle">
            These projects are loaded from my backend API and rendered
            dynamically.
          </p>

          {loadingProjects && <p className="muted-text">Loading projects…</p>}

          {projectsError && (
            <p className="error-text" role="alert">
              {projectsError}
            </p>
          )}

          {!loadingProjects && !projectsError && (
            <>
              {projects.length > 0 ? (
                <div className="projects-grid">
                  {projects.map((project) => (
                    <div key={project.name} className="project-card card">
                      {/* 1. Project Name */}
                      <h2 className="project-title">{project.name}</h2>

                      {/* 2. Author */}
                      <p className="project-author">
                        <strong>Author:</strong> {project.author}
                      </p>

                      {/* 3. Languages */}
                      <p className="project-languages">
                        <strong>Languages:</strong>{" "}
                        {Array.isArray(project.languages)
                          ? project.languages.join(", ")
                          : project.languages}
                      </p>

                      {/* 4. Description */}
                      <p className="project-description">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="muted-text">No projects to show yet.</p>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
