'use client';

import { useEffect } from 'react';
import { StickerPhoto, type StickerSource } from './sticker-photo';
import { ArrowUpRight } from 'lucide-react';

const results = [
  ['2025', 'Championnat jeunesse du Québec · Rapid', '1st place', 'chess-rapid-2025-1st.jpg'],
  ['2025', 'Québec vs Ontario · Team tournament', '1st place', 'team-quebec-ontario-2025-1st.jpg'],
  ['2025', 'Championnat jeunesse du Québec', '2nd place', ''],
  ['2024', 'Championnat jeunesse du Québec · Rapid', '3rd place', 'chess-rapid-2024-3rd.jpg'],
  ['2024', 'Québec vs Ontario · Team tournament', '2nd place', ''],
  ['2024–25', 'Canadian Youth Chess Championship', 'Participant', 'cycc-2025.jpg'],
  ['2025', 'North American Youth Chess Championship', 'Participant', 'naycc-2025.jpg'],
];
const projects = [
  {
    name: 'Lipscribe',
    image: 'lipscribe-hackdecouverte.png',
    alt: 'Our Lipscribe team at HackDécouverte',
    copy: 'Our team won 3rd place overall at HackDécouverte with Lipscribe.',
  },
  {
    name: 'Mathematics',
    image: 'optimath-finalist.jpg',
    alt: 'Optimath finalist award',
    copy: 'I reached the AQJM finals from 2023 to 2025 and the Optimath finals in 2025.',
  },
  {
    name: 'LookLens',
    image: 'marihacks-ix-gemma.jpg',
    alt: 'MariHacks IX winning team',
    link: 'https://devpost.com/software/looklens',
    copy: 'At MariHacks IX, my team built LookLens and won Best Use of Google Gemma.',
  },
  {
    name: 'respace',
    video: 'https://www.youtube.com/embed/wYBMc4XSPHs',
    copy: 'Now I’m building an app to scan rooms and plan furniture layouts.',
  },
];

export default function Home() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.project-scene, .chess-memory, .album-print, .community-story, .hello, .footer-bottom, h2').forEach(el => observer.observe(el));
    return () => observer.disconnect();
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
          <figure className="work-visual"><div className="photo-mat">{project.video ? <iframe className="project-video" src={project.video} title="respace app demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/> : <StickerPhoto source={project.image as StickerSource} alt={project.alt!}/>}</div></figure>
        </div></article>)}</div>
      </section>
      <section className="chess-section" id="chess">
        <div className="chess-heading"><h2 className="reveal">Chess <i>results</i></h2></div>
        <div className="chess-gallery">
          <figure className="chess-memory"><StickerPhoto source="chess-rapid-2024-3rd.jpg" alt="2024 Québec youth rapid chess podium"/><figcaption><div className="print-heading"><strong>3rd place</strong><span>2024</span></div><span>Québec youth rapid</span></figcaption></figure>
          <figure className="chess-memory chess-memory-main"><StickerPhoto source="chess-rapid-2025-1st.jpg" alt="Full podium at the 2025 Québec youth rapid chess championship"/><figcaption><div className="print-heading"><strong>1st place</strong><span>2025</span></div><span>Québec youth rapid</span></figcaption></figure>
          <figure className="chess-memory"><img src="/assets/team-quebec-ontario-2025-1st.jpg" alt="Québec team at the 2025 Québec versus Ontario tournament" loading="lazy"/><figcaption><div className="print-heading"><strong>1st place</strong><span>2025</span></div><span>Québec vs Ontario</span></figcaption></figure>
        </div>
        <div className="chess-album">{results.filter(result => result[2] === 'Participant').map(([year,name,,photo]) => <div className="album-entry" key={name}><figure className="album-print">
          <a href={'/assets/'+photo} target="_blank" rel="noreferrer" aria-label={'View photo: '+name}><img src={'/assets/'+photo} alt={name} loading="lazy"/></a>
          <figcaption><div className="print-heading"><strong>{name.startsWith('Canadian') ? 'CYCC' : 'NAYCC'}</strong><span>{year}</span></div><span>{name}</span><span className="print-location">{name.startsWith('Canadian') ? 'Vancouver' : 'Kingston'}</span></figcaption>
        </figure></div>)}</div>
      </section>
      <section className="community community-connected" id="community">
        <div className="community-heading"><h2 className="reveal">Volunteering</h2></div>
        <div className="community-stories">
          <article className="community-story"><div className="community-logo"><img src="/assets/muhc.png" alt="McGill University Health Centre" loading="lazy"/></div><div className="community-copy reveal"><h3>McGill University Health Centre</h3></div></article>
          <article className="community-story"><div className="community-logo"><img src="/assets/lachine.png" alt="Demi-marathon Lachine" loading="lazy"/></div><div className="community-copy reveal"><h3>Demi-marathon Lachine</h3></div></article>
        </div>
      </section>
      <footer id="contact"><a className="hello" href="mailto:jiacai.song.qc@gmail.com">Contact<ArrowUpRight/></a><div className="footer-bottom"><a href="mailto:jiacai.song.qc@gmail.com">jiacai.song.qc@gmail.com</a><div><a href="https://github.com/skibidiJCS" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/jiacai-song-96612a39b/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="footer-checks" aria-hidden="true"/></footer>
    </main>
  </>;
}
