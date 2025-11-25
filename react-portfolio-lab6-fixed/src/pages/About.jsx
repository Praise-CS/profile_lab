import React, { useMemo, useState } from "react";
import Footer from "../components/Footer";

export default function About() {
  // All skills
  const allSkills = useMemo(
    () => [
      // Technical
      { name: "HTML", category: "Technical" },
      { name: "CSS", category: "Technical" },
      { name: "Java", category: "Technical" },
      { name: "OOP", category: "Technical" },
      { name: "Git", category: "Technical" },
      { name: "Linux", category: "Technical" },
      { name: "Agile", category: "Technical" },

      // Interpersonal
      { name: "Strong Communication", category: "Interpersonal" },
      { name: "Adaptability", category: "Interpersonal" },
      { name: "Leadership", category: "Interpersonal" },
      { name: "Motivation & Encouragement", category: "Interpersonal" },
      { name: "Time Management", category: "Interpersonal" },

      // Other
      { name: "Bilingual (English & Yoruba)", category: "Other" },
      { name: "Team Player", category: "Other" }
    ],
    []
  );

  const categories = ["All", "Technical", "Interpersonal", "Other"];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter skills by category + search term
  const filteredSkills = allSkills.filter((skill) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesCategory =
      activeCategory === "All" || skill.category === activeCategory;

    const matchesSearch =
      term === "" ||
      skill.name.toLowerCase().includes(term) ||
      skill.category.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          {/* TITLE */}
          <h1 className="page-title">About Me</h1>
          <p className="section-subtitle">
            Learn more about who I am and the skills I’m building along the way.
          </p>

          {/* ========== INTERACTIVE SKILLS ========== */}
          <section className="skills-section">
            <h2 className="section-tag">Interactive Skills</h2>
            <p className="section-subtitle">
              Type to search, or click a category button to filter my skills.
            </p>

            {/* Search + filters */}
            <div className="skills-controls">
              <input
                type="text"
                className="skill-search"
                placeholder="Search by skill or category (e.g. 'Java', 'Technical', 'Leadership')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="skill-filters">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`chip ${
                      activeCategory === cat ? "chip-active" : ""
                    }`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered skills list */}
            <div className="skills-grid">
              {filteredSkills.length === 0 ? (
                <p className="muted-text">
                  No skills match your search yet — try a different keyword or
                  category.
                </p>
              ) : (
                filteredSkills.map((skill) => (
                  <div key={skill.name} className="card p-3">
                    <h3 className="skills-title mb-1">{skill.name}</h3>
                    <p className="skills-category mb-0">{skill.category}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* ========== ABOUT INFO CARDS ========== */}
          <section className="about-info">
            <div className="card info-card">
              <h2>Who am I?</h2>
              <p>
                I’m Praise Babalola, a second-year Applied Computer Science
                student at Dalhousie University. I enjoy building responsive,
                user-friendly web applications and exploring how technology can
                solve real-world problems.
              </p>
            </div>

            <div className="card info-card">
              <h2>Beyond the Classroom</h2>
              <p>
                Outside of class, I’m involved in athletics and student life.
                This helps me develop leadership, discipline, and teamwork —
                qualities I bring into all my projects and collaborations.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}
