import "./App.css";

function App() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h3>Hello, I'm</h3>
          <h1>Varshini</h1>
          <h2>
            Electronics & Instrumentation Engineer <br />
            MERN Stack Developer
          </h2>

          <p>
            Passionate about building modern web applications using React,
            Node.js, Express, and MongoDB. Currently pursuing B.E Electronics &
            Instrumentation Engineering at Kongu Engineering College.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button>View Projects</button>
            </a>

            <a href="#contact">
              <button>Contact Me</button>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a Third Year Electronics and Instrumentation Engineering student
          at Kongu Engineering College with a strong interest in software
          development and web technologies.
        </p>

        <p>
          I enjoy solving problems, learning new technologies, and creating
          responsive full-stack web applications using the MERN stack.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill-card">C Programming</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">React JS</div>
          <div className="skill-card">Node JS</div>
          <div className="skill-card">Express JS</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Attendance Management System</h3>

          <p>
            Developed a React-based attendance management system to mark
            students present or absent and display attendance statistics.
          </p>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>

          <p>
            Built a MERN Stack application to manage student records with CRUD
            operations using MongoDB, Express, React, and Node.js.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>

          <p>
            Designed and developed a responsive portfolio website showcasing
            skills, projects, and achievements.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>Kongu Engineering College</h3>

          <p>B.E Electronics and Instrumentation Engineering</p>

          <p>CGPA: 8.32</p>

          <p>2024 - 2028</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <div className="contact-card">
          <p>
            <strong>Email:</strong> varshininerhru@gmail.com
          </p>

          <p>
            <strong>Location:</strong> Tamil Nadu, India
          </p>

          <p>
            <strong>GitHub:</strong> github.com/varshini
          </p>

          <p>
            <strong>LinkedIn:</strong> linkedin.com/in/varshini
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Varshini | MERN Stack Developer</p>
      </footer>
    </>
  );
}

export default App;