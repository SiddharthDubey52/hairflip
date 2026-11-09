import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { project } from '../data/resume.js';

export default function Project() {
  return (
    <section className="section" id="project">
      <div className="wrap">
        <SectionHead label="Project" title="From commit to production" />
        <Reveal as="article" className="project">
          <div className="project-flow" aria-label={`Delivery flow: ${project.flow.join(', then ')}`}>
            {project.flow.map((step, i) => (
              <span className="flow-step" key={step}>
                <span className="mono flow-index">0{i + 1}</span>
                {step}
              </span>
            ))}
          </div>
          <div className="project-body">
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="tags">
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="btn" href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
