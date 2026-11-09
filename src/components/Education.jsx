import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { education } from '../data/resume.js';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHead label="Education" title="Foundations" />
        <div className="education">
          {education.map((item) => (
            <Reveal key={item.school} className="edu">
              <span className="mono">{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.detail}</p>
              <p className="edu-place">{item.place}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
