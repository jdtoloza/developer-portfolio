import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <main className="app">
      <section className="hero-section">
        <div className="hero-text">
          <p className="eyebrow">Educator • Engineer • Strength Athlete</p>

          <h1>Hi, I&apos;m Josh Toloza.</h1>

          <p className="intro">
            I build practical web apps, automation tools, and systems that make
            real workflows easier to manage.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact" className="secondary">
              Contact Me
            </a>
          </div>
        </div>

        <img src={heroImg} className="hero-image" alt="Pixel art portrait of Josh" />
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <p>Portfolio projects coming soon.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Let&apos;s build something useful.</p>
      </section>
    </main>
  );
}

export default App;