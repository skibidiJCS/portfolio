'use client';

import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Lipscribe',
    cutout: 'lipscribe-team.webp',
    link: 'https://devpost.com/software/lipscribe',
    alt: 'Our Lipscribe team at HackDécouverte',
    copy: 'Our team won 3rd place overall at HackDécouverte with Lipscribe.',
  },
  {
    name: 'LookLens',
    cutout: 'looklens-team.webp',
    alt: 'MariHacks IX winning team',
    link: 'https://devpost.com/software/looklens',
    copy: 'At MariHacks IX, my team built LookLens and won Best Use of Google Gemma.',
  },
  {
    name: 'Mathematics',
    cutout: 'math-award.webp',
    alt: 'Optimath finalist award',
    copy: 'I reached the AQJM finals from 2023 to 2025 and the Optimath finals in 2025.',
  },
  {
    name: 'respace',
    cutout: 'respace-award.webp',
    alt: 'The respace team holding the Excellent Award',
    copy: 'respace won the Excellent Award at the Canadian Youth Innovation Competition.',
  },
];

export default function Home() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll<HTMLElement>('.project-scene, .chess-memory, .community-story, h2');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('awaiting-entry');
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -40px 0px" });
    for (const target of targets) {
      if (target.getBoundingClientRect().top >= window.innerHeight) {
        target.classList.add('awaiting-entry');
        observer.observe(target);
      }
    }
    return () => {
      observer.disconnect();
      targets.forEach(target => target.classList.remove('awaiting-entry'));
    };
  }, []);
  return <>
    <a className="skip-link" href="#work">Skip introduction</a>
    <main>
      <section id="top" className="opening">
        <div className="opening-stage">
          <p className="intro">Hi, my name is</p><h1 aria-label="Jiacai Song">Jiacai</h1>
          <figure className="hero-portrait"><img src="/assets/hero-mountain.jpeg" alt="Jiacai in the mountains" fetchPriority="high"/></figure>
        </div>
      </section>
      <section className="work work-cinema" id="work">
        <div className="work-heading"><h2 className="reveal">Projects <i>& activities</i></h2></div>
        <div className="work-list">{projects.map((project, index) => <article className={'project-scroll project-scroll-' + index} key={project.name}><div className="project-scene">
          <div className="work-copy reveal"><h3>{project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.name} <ArrowUpRight aria-hidden="true"/></a> : project.name}</h3><p>{project.copy}</p></div>
          <figure className="work-visual"><div className="photo-mat"><img className="team-cutout" src={'/assets/' + project.cutout} alt={project.alt} loading="lazy"/></div></figure>
        </div></article>)}</div>
      </section>
      <section className="chess-section" id="chess">
        <div className="chess-heading"><h2 className="reveal">Chess</h2></div>
        <div className="chess-gallery">
          <figure className="chess-memory"><img loading="lazy" className="team-cutout" src="/assets/podium-2024.webp" alt="2024 Québec youth rapid chess podium"/><figcaption><div className="print-heading"><strong>3rd place</strong><span>2024</span></div><span>Québec youth rapid</span></figcaption></figure>
          <figure className="chess-memory chess-memory-main"><img loading="lazy" className="team-cutout" src="/assets/podium-2025.webp" alt="Full podium at the 2025 Québec youth rapid chess championship"/><figcaption><div className="print-heading"><strong>1st place</strong><span>2025</span></div><span>Québec youth rapid</span></figcaption></figure>
          <figure className="chess-memory"><img className="team-cutout" src="/assets/quebec-team.webp" alt="Collège Sainte-Anne team at the 2025 Québec versus Ontario tournament" loading="lazy"/><figcaption><div className="print-heading"><strong>1st place</strong><span>2025</span></div><span>Québec vs Ontario · Collège Sainte-Anne</span></figcaption></figure>
        </div>
      </section>
      <section className="community community-connected" id="community">
        <div className="community-heading"><h2 className="reveal">Volunteering</h2></div>
        <div className="community-stories">
          <article className="community-story"><div className="community-logo"><img src="/assets/muhc.png" alt="McGill University Health Centre" loading="lazy"/></div><div className="community-copy reveal"><h3>McGill University Health Centre</h3></div></article>
          <article className="community-story"><div className="community-logo"><img src="/assets/lachine.png" alt="Demi-marathon Lachine" loading="lazy"/></div><div className="community-copy reveal"><h3>Demi-marathon Lachine</h3></div></article>
          <article className="community-story"><div className="community-logo"><img src="/assets/wca-logo.svg" alt="" loading="lazy"/></div><div className="community-copy"><h3>World Cube Association</h3></div></article>
        </div>
      </section>
      <footer id="contact"><div className="footer-bottom"><a href="mailto:jiacai.song.qc@gmail.com">jiacai.song.qc@gmail.com</a><div><a href="https://github.com/skibidiJCS" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/jiacai-song-96612a39b/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="footer-checks" aria-hidden="true"/></footer>
    </main>
  </>;
}
