import heroImg from "../assets/Hero_Image.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        {/* <p className="eyebrow">Educator • Engineer • Lifelong Learner</p> */}

        <h1>Hi, I&apos;m Josh Toloza.</h1>

        <p className="intro">
          I build practical web apps, automation tools, and internal systems
          that make real workflows easier to manage.
        </p>
        <p>
          While finishing my Computer Science degree, I spent years at Intuit
          designing and shipping tools for physical security operations,
          including visitor management, incident notifications, badge issuance,
          dashboards, and workflow automation.
        </p>
        <br></br>
        <p>
          I learned by building systems with real users and real stakes, where
          reliability, usability, and clear processes mattered as much as the
          code itself.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">
            Contact Me
          </a>
        </div>
      </div>

      <img
        src={heroImg}
        className="hero-image"
        alt="Pixel art portrait of Josh"
      />
    </section>
  );
}

export default Hero;