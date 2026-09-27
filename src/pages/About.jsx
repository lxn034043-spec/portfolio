function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>

      <h2>Lian Xiangnan</h2>
<img
  src="/digital%20photo.jpg"
  alt="LXN professional portrait"
  className="profile-photo"
/>
      <p>
        I am a Software Engineering student at Centennial College
        with an interest in software development, web development,
        and artificial intelligence. I am currently developing my
        programming skills through academic projects and practical
        applications.
      </p>

      <h2>Resume</h2>

      <p>
        You can view my resume below:
      </p>

      <a
        href="/LXN%20resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </div>
  );
}

export default About;