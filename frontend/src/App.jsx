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
            Node.js, Express.js, and MongoDB. Currently pursuing B.E.
            Electronics and Instrumentation Engineering at Kongu Engineering
            College.
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
          <div className="skill-card">MongoDB Atlas</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Attendance Management System</h3>

          <p>
            Developed a Full Stack Attendance Management System using React.js,
            Node.js, Express.js, and MongoDB Atlas. The system enables faculty
            to record daily attendance, store attendance records securely in
            MongoDB Atlas, view attendance statistics, and manage student data
            through a responsive web interface.
          </p>

          <a
            href="https://attendance-1-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🚀 Live Demo
          </a>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>

          <p>
            Built a MERN Stack application to manage student records with CRUD
            operations. Users can add, update, delete, and view student details
            through a responsive interface connected to MongoDB Atlas.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>

          <p>
            Designed and developed a responsive portfolio website showcasing
            technical skills, projects, education, and contact information
            using React and modern CSS.
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
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/varshini
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/varshini-n-j-21474232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/varshini-n-j-21474232
            </a>
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