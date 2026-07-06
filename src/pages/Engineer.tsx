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
          Rather than building classroom projects alone, I spent my time solving operational problems where reliability, usability, and clear communication mattered. That experience shaped how I approach software today: understand the problem first, then build tools that make people's work simpler and more effective.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Focus</p>
        <h2>Full-stack development, automation, and integrations</h2>

        <p>
          I enjoy building software that solves real operational problems. Whether it's automating repetitive work, connecting systems through APIs, or creating intuitive internal tools, I like developing solutions that save people time and make their jobs easier.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">Projects</p>
        <h2>Featured Work</h2>

        <div className="project-grid">
          <article className="card">
            <article className="card">
            <h3>AI Executive Operations Dashboard</h3>
            <p>
              Built an AI-powered reporting system that analyzed Slack conversations across multiple operational channels to generate an interactive HTML dashboard for leadership. The dashboard summarized weekly security incidents, international travel activity, employee welfare checks, and key operational insights, transforming hours of manual reporting into an automated executive briefing.
            </p>
            <span>Claude • JavaScript • HTML • Slack • AI Automation</span>
          </article>
            <h3>Travel Itinerary Generator</h3>
            <p>
              A full-stack web application that generates personalized travel itineraries using interactive map selection, user preferences, reverse geocoding, and AI-powered recommendations. Built as my Computer Science capstone to explore modern frontend development, API integration, and LLM workflows.
            </p>
            <span>React • Flask • Google Maps API • LLM</span>
          </article>

          <article className="card">
            <h3>Patrol Route Reviewer</h3>
            <p>
              Developed an internal application that validates security patrols by comparing badge-reader activity against scheduled routes. The system automatically identifies completed patrols, missed checkpoints, and performance metrics, giving leadership clear operational visibility.
            </p>
            <span>JavaScript • REST APIs • Quickbase</span>
          </article>

          
        </div>
      </section>
    </main>
  );
}

export default Engineer;