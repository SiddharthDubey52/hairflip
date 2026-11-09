import { useState } from 'react';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { skillEvidence, skillGroups } from '../data/resume.js';

const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

export default function Skills() {
  const [selected, setSelected] = useState('Jenkins');
  const group = skillGroups.find((g) => g.skills.includes(selected));
  const evidence = skillEvidence[selected];

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead label="Skills" title={`${totalSkills} tools, one toolchain.`}>
          Select any skill to see where I have used it.
        </SectionHead>
        <div className="skills-layout">
          <Reveal className="skill-groups">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.name}>
                <h3>{g.name}</h3>
                <div className="chips">
                  {g.skills.map((skill) => (
                    <button
                      type="button"
                      key={skill}
                      className={`chip ${skillEvidence[skill] ? 'has-evidence' : ''}`}
                      aria-pressed={selected === skill}
                      onClick={() => setSelected(skill)}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <p className="legend">
              <span className="legend-dot" aria-hidden="true" />
              Used in a role or project listed on this page
            </p>
          </Reveal>
          <aside className="evidence" aria-live="polite">
            <p className="eyebrow">{group.name}</p>
            <h3>{selected}</h3>
            {evidence ? (
              <ul>
                {evidence.map(([where, what]) => (
                  <li key={where}>
                    <strong>{where}</strong>
                    <span>{what}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="evidence-empty">
                Part of my {group.name} toolkit. Ask me how I have used it.
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
