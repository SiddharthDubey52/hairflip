import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { profile } from '../data/resume.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section className="section contact" id="contact">
      <Reveal className="wrap">
        <p className="eyebrow">Contact</p>
        <h2>Need a pipeline built, or a team trained?</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="cta-row">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <footer className="footer mono">
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </Reveal>
    </section>
  );
}
