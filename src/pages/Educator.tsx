// import heroImg from "../assets/Teacher_Image.png";

function Educator() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Educator</p>

          <h1>Helping Students Become Strong</h1>

          <p className="hero-copy">
            Before pursuing software engineering, I spent several years teaching
            physical education at the middle and high school level. Every day
            was about creating an environment where students felt supported,
            challenged, and confident enough to grow.
          </p>

          <div className="hero-actions">
            <a href="#journey" className="button primary">
              My Journey
            </a>

            <a href="mailto:Josh.Toloza@gmail.com" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* <img
          src={heroImg}
          className="hero-image"
          alt="Josh teaching physical education"
        /> */}
      </section>

      <section id="journey" className="section">
        <p className="eyebrow">Teaching</p>

        <h2>More than physical education</h2>

        <p>
          As a teacher, I believed physical education was about much more than
          sports. It was an opportunity to help students develop confidence,
          resilience, teamwork, and lifelong habits that extended far beyond the
          classroom. Every lesson required balancing structure with flexibility,
          adapting to different learning styles, and making sure every student
          had an opportunity to succeed.
        </p>

        <p>
          Whether I was introducing a new skill, organizing large groups,
          resolving conflicts, or encouraging reluctant students to participate,
          I learned that the best results came from understanding people first
          and adjusting my approach to meet their needs.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Lessons Learned</p>

        <h2>Skills that carried into engineering</h2>

        <p>
          Teaching strengthened my communication, leadership, and problem-solving
          skills in ways that continue to influence how I build software today.
          Explaining complex ideas clearly, listening to feedback, and designing
          experiences that are intuitive for users became second nature long
          before I wrote my first line of production code.
        </p>

        <p>
          Those experiences continue to shape how I collaborate with
          stakeholders, document systems, and create software that is designed
          around the people who use it.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Beyond the Classroom</p>

        <h2>Building relationships that mattered</h2>

        <p>
          The most rewarding part of teaching wasn't the curriculum—it was
          watching students grow in confidence, overcome challenges, and achieve
          things they didn't think were possible. Those relationships reinforced
          my belief that the best work, whether in education or engineering,
          begins with empathy and a genuine desire to help others succeed.
        </p>
      </section>
    </main>
  );
}

export default Educator;