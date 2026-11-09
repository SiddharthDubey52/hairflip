import { useEffect, useState } from 'react';
import { pipelineStages as stages } from '../data/resume.js';

const STEP_MS = 520;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Pipeline() {
  // `step` is the index of the running stage; stages.length means all passed.
  const [step, setStep] = useState(() => (reducedMotion() ? stages.length : 0));

  useEffect(() => {
    if (step >= stages.length) return undefined;
    const timer = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => clearTimeout(timer);
  }, [step]);

  const finished = step >= stages.length;

  return (
    <section className="pipeline" aria-label="My delivery toolchain, shown as a CI/CD pipeline">
      <div className="pipeline-bar">
        <span className="mono">career / main</span>
        <span className={`pipeline-state ${finished ? 'is-passed' : ''}`} role="status">
          {finished ? 'pipeline passed' : `running: ${stages[step].name.toLowerCase()}`}
        </span>
        <button
          type="button"
          className="text-btn"
          disabled={!finished}
          onClick={() => setStep(0)}
        >
          Replay
        </button>
      </div>
      <ol className="stages">
        {stages.map((stage, i) => {
          const status = i < step ? 'passed' : i === step ? 'running' : 'queued';
          return (
            <li key={stage.name} className={`stage is-${status}`}>
              <span className="stage-node" aria-hidden="true" />
              <strong>{stage.name}</strong>
              <span className="stage-tools">{stage.tools}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
