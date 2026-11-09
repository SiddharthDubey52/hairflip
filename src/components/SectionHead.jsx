import Reveal from './Reveal.jsx';

export default function SectionHead({ label, title, children }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </Reveal>
  );
}
