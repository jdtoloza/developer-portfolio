type HeroProps = {
  name: string;
};

function Hero({ name }: HeroProps) {
  return (
    <section>
      <h1>{name}</h1>
      <p>Full Stack Developer</p>

      /*
      Hero/Intro:

I'm a full stack developer who builds things people actually use. While finishing my CS degree, I spent years at Intuit designing and shipping internal tools for their physical security operations — visitor management, incident notifications, badge issuance, dashboards, and more. Real systems. Real users. Real stakes.


The Work:

At Intuit I wasn't handed a tech stack or a playbook. I worked within a platform's constraints — vanilla HTML, CSS, and JavaScript with REST API integrations — and built full applications from scratch. No frameworks. No shortcuts. Just an understanding of the problem and the fundamentals to solve it. The results are used daily by receptionists, security personnel, and leadership across Intuit facilities.


The "why it matters" paragraph:

Most developers learn by building todo apps. I learned by building systems where downtime has real consequences — where a broken check-in flow affects every visitor walking through the door, where a failed incident notification means leadership is in the dark. That environment taught me to think about reliability, usability, and process before I ever think about code.


The honest one that will make you stand out:

I vibe coded some of it. I Googled constantly. I figured things out as I went. But the badge system works. The dashboards get pulled in meetings. The notifications fire when they need to. At the end of the day that's what matters — not how clean the process was, but whether it solves the problem.


*/
    </section>
  );
}

export default Hero;