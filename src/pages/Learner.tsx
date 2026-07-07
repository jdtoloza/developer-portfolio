// import heroImg from "../assets/Learner_Image.png";

function Learner() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Lifelong Learner</p>

          <h1>Go Big or Go Home</h1>

          <p className="hero-copy">
            Whether it's software engineering, powerlifting, gaming, or learning
            an entirely new skill, I enjoy understanding how things work. I find
            fulfillment in starting with little knowledge, asking questions, and
            gradually turning complexity into confidence.
          </p>

          <div className="hero-actions">
            <a href="#journey" className="button primary">
              What I'm Learning
            </a>

            <a href="mailto:Josh.Toloza@gmail.com" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* <img
          src={heroImg}
          className="hero-image"
          alt="Josh learning and exploring new interests"
        /> */}
      </section>

      <section id="journey" className="section">
        <p className="eyebrow">Mindset</p>

        <h2>Learning doesn't stop after graduation.</h2>

        <p>
          My path has taken me from kinesiology and education to computer
          science, but one thing has remained constant: I enjoy learning.
          Whether it's exploring a new programming language, understanding a
          complex API, refining a lifting technique, or mastering a new game, I
          genuinely enjoy the process of improving through curiosity and
          repetition.
        </p>

        <p>
          I don't see learning as something reserved for school. It's something
          I actively pursue because I enjoy understanding how systems work and
          finding better ways to solve problems.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Beyond Software</p>

        <h2>Learning takes many forms.</h2>

        <p>
          Outside of engineering, you'll usually find me training in the gym,
          playing strategy and RPG games, experimenting with new recipes,
          exploring AI tools, or diving into topics that simply catch my
          interest. Every hobby teaches something different—discipline,
          creativity, strategic thinking, patience, or problem solving—and those
          lessons often influence how I approach software development.
        </p>

        <p>
          Powerlifting taught me consistency. Games taught me systems thinking
          and collaboration. Software gave me a way to combine those lessons
          into building tools that solve real problems.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Always Improving</p>

        <h2>The next challenge is always the most exciting.</h2>

        <p>
          I don't believe there's a finish line when it comes to learning.
          Technology changes, industries evolve, and there's always another
          challenge worth exploring. That curiosity is what keeps me motivated
          to continue building, experimenting, and growing—both as an engineer
          and as a person.
        </p>
      </section>
    </main>
  );
}

export default Learner;