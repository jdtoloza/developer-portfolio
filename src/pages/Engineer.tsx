import heroImg from "../assets/Hero_Image.png";

function Engineer() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Software Engineer</p>

          <h1>I build practical tools for real workflows</h1>

          <p className="hero-copy">
            I’m a Computer Science graduate and former educator who builds web
            apps, automation tools, dashboards, and internal systems that help
            teams move faster and make better decisions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View Projects
            </a>
            <a href="mailto:Josh.Toloza@gmail.com" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>

        <img
          src={heroImg}
          className="hero-image"
          alt="Pixel art portrait of Josh Toloza"
        />
      </section>

      <section className="section">
        <p className="eyebrow">About Me</p>

        <h2>Building software people depend on</h2>

        <p>
          While completing my Computer Science degree, I spent several years at
          Intuit designing, developing, and supporting internal applications for
          physical security operations. My work included visitor management,
          badge issuance, incident reporting, workflow automation, dashboards,
          and system integrations supporting teams across North America and
          APAC.
        </p>

        <p>
          Rather than building classroom projects alone, I spent my time
          solving operational problems where reliability, usability, and clear
          communication mattered. That experience shaped how I approach software
          today: understand the problem first, then build tools that make
          people's work simpler and more effective.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Focus</p>
        <h2>Full-stack development, automation, and integrations</h2>

        <p>
          My work sits at the intersection of software, operations, and user
          experience. I enjoy turning messy workflows into simple tools people
          can actually use.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">Projects</p>
        <h2>Featured Work</h2>

        <div className="project-grid">
          <article className="card">
            <h3>Travel Itinerary Generator</h3>
            <p>
              A React and Flask app that helps users generate travel plans using
              map selection, user preferences, and LLM-generated suggestions.
            </p>
            <span>React • Flask • APIs • LLM</span>
          </article>

          <article className="card">
            <h3>Internal Operations Tools</h3>
            <p>
              Web-based tools for badge issuance, incident workflows,
              dashboards, notifications, and operational tracking.
            </p>
            <span>JavaScript • REST APIs • Quickbase</span>
          </article>

          <article className="card">
            <h3>Developer Portfolio</h3>
            <p>
              A personal portfolio built with React and TypeScript to showcase
              my engineering projects, background, and growth.
            </p>
            <span>React • TypeScript • CSS</span>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Engineer;