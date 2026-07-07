import heroImg from "../assets/Hero_Image.png";

function Engineer() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Software Engineer</p>

          <h1>Educator to Engineer</h1>

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
          I enjoy taking a design and figuring out how to build it in code just as much as I enjoy connecting systems behind the scenes. From responsive interfaces built with Flexbox to API integrations that eliminate duplicate work, I like creating software that's both enjoyable to use and efficient to maintain.
        </p>
        <p>
          Before writing code, I enjoy understanding how people actually work. I like observing where users get frustrated, where processes break down, and where repetitive tasks can be eliminated. The most rewarding projects are the ones where software quietly removes friction and lets people focus on their work instead of the tool they're using.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">Projects</p>
        <h2>Featured Work</h2>

        <div className="project-grid">
             <article className="card">
            <h3>AI Executive Operations Dashboard</h3>
            <p>
              Built an AI-powered reporting system that analyzed Slack conversations across multiple operational channels to generate an interactive HTML dashboard for leadership. The dashboard summarized weekly security incidents, international travel activity, employee welfare checks, and key operational insights, transforming hours of manual reporting into an automated executive briefing.
            </p>
            <span>Claude • JavaScript • HTML • Slack • AI Automation</span>
          </article>
          <article className="card">
            <h3>Travel Itinerary Generator</h3>
            <p>
              A full-stack web application that generates personalized travel itineraries using interactive map selection, user preferences, reverse geocoding, and AI-powered recommendations. Built as my Computer Science capstone to explore modern frontend development, API integration, and LLM workflows.
            </p>
            <span>React • Flask • Google Maps API • LLM</span>
          </article>
          <article className="card">
            <h3>Enterprise Relational Database Architecture</h3>
            <p>
              Consolidated multiple logging systems into a single relational database by connecting sites to violation logs, daily activity reports, badge activity, audits, scorecards, and other security workflows. Eliminated data silos through relational data modeling, creating a centralized source of truth that improved reporting consistency and enabled executive dashboards with real-time operational visibility.
            </p>
            <span>JavaScript • REST APIs • Quickbase</span>
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