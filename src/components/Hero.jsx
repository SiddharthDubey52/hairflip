import Pipeline from './Pipeline.jsx';
import { profile } from '../data/resume.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="status">
            <span className="pulse" aria-hidden="true" />
            Now: Technical Trainer at byteXL
          </p>
          <h1>Siddharth Dubey</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-lede">
            I build Jenkins pipelines, containerize applications with Docker, run them on
            Kubernetes and ship them to AWS. Then I teach teams to do the same.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#experience">See my work</a>
            <a className="btn" href="#contact">Get in touch</a>
            {profile.resumeUrl && (
              <a className="btn" href={profile.resumeUrl} download>Download resume</a>
            )}
          </div>
        </div>
        <figure className="portrait">
          <img
            src="./siddharth.jpg"
            alt="Siddharth Dubey smiling outdoors in a navy blue kurta"
            width="1050"
            height="1400"
          />
          <figcaption className="mono">{profile.location}</figcaption>
        </figure>
      </div>
      <div className="wrap">
        <Pipeline />
      </div>
    </section>
  );
}
