import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { experience } from '../data/resume.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHead label="Experience" title="Build history" />
        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" key={job.company} className={`job ${job.current ? 'is-current' : ''}`}>
              <div className="job-meta">
                <span className="mono">{job.period}</span>
                {job.current && <span className="badge">Current</span>}
              </div>
              <div className="job-body">
                <h3>{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <ul>
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="tags">
                  {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
