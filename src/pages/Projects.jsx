function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>

      {/* Project 1 */}
      <div className="project-card">
        <img
          src="/esp32.jpg"
          alt="ESP32 Camera Monitoring System"
          className="project-image"
        />

        <h2>ESP32 Camera Monitoring System</h2>

        <p>
          A camera monitoring project developed using an ESP32 board
          and an OV3660 camera module. The project focused on camera
          streaming and embedded system development.
        </p>

        <p>
          <strong>My Role:</strong> I worked on hardware setup,
          Arduino IDE programming, camera configuration, and testing.
        </p>

        <p>
          <strong>Outcome:</strong> Successfully created a working
          ESP32 camera streaming system.
        </p>

        <p>
          <strong>Completed:</strong> 2025
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card">
      <a href="/portfolio-home.png" target="_blank" rel="noopener noreferrer">
  <img
    src="/portfolio-home.png"
    alt="React Portfolio Website"
    className="project-image"
  />
</a>
        <h2>React Portfolio Website</h2>

        <p>
          A personal portfolio website developed using React,
          JavaScript, HTML, and CSS.
        </p>

        <p>
          <strong>My Role:</strong> I designed and developed the
          website, including navigation, pages, styling, and
          interactive components.
        </p>

        <p>
          <strong>Outcome:</strong> Created a multi-page portfolio
          website to present my education, projects, skills, and
          contact information.
        </p>

        <p>
          <strong>Status:</strong> In Progress
        </p>
      </div>

      {/* Project 3 */}
      <div className="project-card">
      <a href="/stack.png" target="_blank" rel="noopener noreferrer">
  <img
    src="/stack.png"
    alt="Python Stack Data Structure Program"
    className="project-image"
  />
</a>
        <h2>Stack Data Structure Program</h2>

        <p>
          A Python programming assignment that demonstrates the
          basic operations of a stack data structure.
        </p>

        <p>
          <strong>My Role:</strong> I implemented stack operations
          using Python lists, including adding, viewing, and removing
          items from the stack.
        </p>

        <p>
          <strong>Outcome:</strong> The program successfully demonstrates
          stack behavior, including displaying the top item, reversing
          a name, and handling an empty stack.
        </p>

        <p>
          <strong>Completed:</strong> 2026
        </p>
      </div>
    </div>
  );
}

export default Projects;