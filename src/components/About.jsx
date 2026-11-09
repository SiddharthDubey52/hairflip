import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { highlights } from '../data/resume.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead label="About" title="I ship infrastructure and teach it." />
        <div className="about-grid">
          <Reveal className="about-card">
            <h3>Build</h3>
            <p>
              Hands-on with the full delivery path: CI/CD pipelines in Jenkins, containers in
              Docker, orchestration on Kubernetes and deployment on AWS. My frontend background
              in React and real-time WebRTC means I understand the applications I deploy.
            </p>
          </Reveal>
          <Reveal className="about-card">
            <h3>Teach</h3>
            <p>
              I have trained corporate teams at Capgemini and TestYantra in DevOps and cloud.
              Today I deliver Cloud Security training at Lovely Professional University and teach
              MERN full-stack development at Chandigarh University.
            </p>
          </Reveal>
        </div>
        <Reveal as="dl" className="stats">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
