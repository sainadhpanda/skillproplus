import { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';

const EMAIL = 'skillproplus.edu@outlook.com';
const YOUTUBE = 'https://www.youtube.com/@skillproplus';

const pages = {
  home: {
    title: 'SkillproPlus | Internships, Projects & Research Support',
    description: 'Build practical skills with SkillproPlus. Explore student internships, final-year and IEEE project guidance, and research and documentation support.',
  },
  about: {
    title: 'About SkillproPlus | Practical Support for Students',
    description: 'Learn how SkillproPlus helps students connect classroom learning with practical projects, internships, and responsible research support.',
  },
  internships: {
    title: 'Student Internships | SkillproPlus',
    description: 'Explore practical internship learning and career skills support for students with SkillproPlus.',
  },
  projects: {
    title: 'Final-Year & IEEE Project Guidance | SkillproPlus',
    description: 'Get guidance for final-year, IEEE-inspired, and college projects, from topic exploration to planning, implementation, and presentation.',
  },
  research: {
    title: 'Research & Documentation Support | SkillproPlus',
    description: 'Get responsible research guidance and support presenting your own work through clear reports and technical documentation.',
  },
  contact: {
    title: 'Contact SkillproPlus | Student Support',
    description: 'Contact SkillproPlus about internships, final-year projects, research guidance, and technical documentation support.',
  },
};

function SEO({ page }) {
  useEffect(() => {
    const metadata = pages[page] || pages.home;
    document.title = metadata.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = metadata.description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`;
  }, [page]);
  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="announcement"><div className="container announcement-inner"><span>Helping students turn learning into practical experience</span><a href={YOUTUBE} target="_blank" rel="noopener noreferrer">Watch our YouTube channel <span aria-hidden="true">↗</span></a></div></div>
    <header className="header"><div className="container header-inner">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="SkillproPlus home"><span className="brand-mark" aria-hidden="true">S<span>+</span></span><span className="brand-name">skillpro<span>plus</span><small>LEARN · BUILD · GROW</small></span></Link>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      <nav className={`navigation${menuOpen ? ' navigation-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/internships" onClick={closeMenu}>Internships</NavLink><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink><NavLink to="/research" onClick={closeMenu}>Research support</NavLink><NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <Link className="button button-nav" to="/contact" onClick={closeMenu}>Talk to our team <span aria-hidden="true">→</span></Link>
      </nav>
    </div></header>
  </>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link className="brand brand-footer" to="/"><span className="brand-mark" aria-hidden="true">S<span>+</span></span><span className="brand-name">skillpro<span>plus</span><small>LEARN · BUILD · GROW</small></span></Link><p className="footer-about">Practical learning, project guidance, and research support for students building their next chapter.</p></div>
    <div className="footer-column"><h2>Explore</h2><Link to="/internships">Internships</Link><Link to="/projects">Academic projects</Link><Link to="/research">Research support</Link><Link to="/about">About us</Link></div>
    <div className="footer-column"><h2>Connect</h2><Link to="/contact">Contact our team</Link><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={YOUTUBE} target="_blank" rel="noopener noreferrer">YouTube channel ↗</a><span>Bengaluru, Karnataka, India</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} SkillproPlus. All rights reserved.</span><span>Learn with purpose. Build with confidence.</span></div></footer>;
}

function Eyebrow({ children, light = false }) { return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-dot" />{children}</div>; }
function PageIntro({ label, title, highlight, text }) {
  return <section className="page-intro"><div className="container"><Eyebrow>{label}</Eyebrow><h1>{title}<br /><em>{highlight}</em></h1><p>{text}</p></div></section>;
}
function ServiceCard({ number, tag, icon, title, text, to, link, color }) {
  return <article className="service-card"><div className="service-kicker">{number}<span> / {tag}</span></div><div className={`service-icon ${color}`} aria-hidden="true">{icon}</div><h3>{title}</h3><p>{text}</p><Link className="card-link" to={to}>{link} <span aria-hidden="true">→</span></Link></article>;
}
function Home() {
  return <>
    <SEO page="home" />
    <main>
      <section className="hero"><div className="hero-glow" /><div className="container hero-grid"><div className="hero-copy"><Eyebrow light>A practical learning partner for students</Eyebrow><h1>Make your next step<br />in tech <em>count.</em></h1><p>Build real-world confidence with student internships, final-year project guidance, and thoughtful research and documentation support.</p><div className="hero-actions"><Link className="button button-accent" to="/contact">Explore how we can help <span aria-hidden="true">→</span></Link><a className="text-link text-link-light" href="#services">Discover our services <span aria-hidden="true">↓</span></a></div><div className="hero-note"><span aria-hidden="true">✳</span>Support for your learning journey—from first idea to final presentation.</div></div>
        <div className="hero-visual" aria-label="A project workspace illustration" role="img"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="workspace-card"><div className="workspace-top"><i /><i /><i /><span>your-next-project</span></div><div className="workspace-code"><span>01</span> <b>idea</b><i> → </i><strong>project</strong><br /><span>02</span> <b>learn</b><i> → </i><strong>build</strong><br /><span>03</span> <b>practice</b><i> → </i><strong>grow</strong><div className="progress"><i /></div><small>YOUR JOURNEY, WITH A PLAN</small></div></div><div className="float-card float-top"><span>↗</span><div><b>Internships</b><small>Learn by doing</small></div></div><div className="float-card float-bottom"><span>⌘</span><div><b>Student projects</b><small>Make ideas tangible</small></div></div></div>
      </div><div className="container hero-foot"><span>FOR STUDENTS AND EMERGING PROFESSIONALS</span><i /> <span>INTERNSHIPS · PROJECTS · RESEARCH SUPPORT</span></div></section>
      <section className="intro section-space"><div className="container intro-grid"><div><Eyebrow>Welcome to SkillproPlus</Eyebrow><h2>More than a project.<br /><em>A step forward.</em></h2></div><div><p>We help students connect classroom concepts with practical skills. Whether you are exploring an internship, shaping a final-year project, or preparing clear technical documentation, our team is here to guide your next step.</p><Link className="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></Link></div></div></section>
      <section className="services section-space" id="services"><div className="container"><div className="section-heading"><div><Eyebrow>Ways we can help</Eyebrow><h2>Good work starts<br />with <em>the right support.</em></h2></div><p>Student-focused guidance shaped around your goals, subject, and stage of study.</p></div><div className="service-grid"><ServiceCard number="01" tag="CAREER" icon="↗" color="icon-purple" title="Internships & career skills" text="Explore internship learning opportunities and build useful skills through structured, hands-on practice." to="/internships" link="Explore internships" /><ServiceCard number="02" tag="BUILD" icon="⌘" color="icon-green" title="Final-year & IEEE projects" text="Get guidance planning and developing engineering, computing, and interdisciplinary academic projects." to="/projects" link="Explore project guidance" /><ServiceCard number="03" tag="WRITE" icon="✎" color="icon-peach" title="Research & documentation" text="Strengthen your research process and communicate your own work with clear reports and technical documentation." to="/research" link="Discuss your requirements" /></div><p className="integrity-note"><span aria-hidden="true">✳</span>Our research and writing support helps you develop and present your own work responsibly. We do not promise publication or supply published papers.</p></div></section>
      <section className="approach section-space"><div className="container approach-grid"><div><Eyebrow light>A clear, student-first process</Eyebrow><h2>From “where do I start?”<br />to <em>“I built this.”</em></h2><p>Get guidance that keeps the focus on your learning, your contribution, and your course requirements.</p><Link className="button button-accent" to="/contact">Start a conversation <span aria-hidden="true">→</span></Link></div><div className="steps"><Step index="01" title="Tell us what you need" text="Share your subject, timeline, interests, and goals." /><Step index="02" title="Make a practical plan" text="Explore a suitable learning, project, or documentation path." /><Step index="03" title="Learn, build, and present" text="Develop your skills and communicate your work with confidence." /></div></div></section>
      <section className="channel section-space"><div className="container channel-panel"><div className="youtube-icon" aria-hidden="true">▶</div><div className="channel-copy"><Eyebrow>Keep learning with us</Eyebrow><h2>Ideas &amp; guidance<br /><em>on our channel.</em></h2><p>Visit the SkillproPlus YouTube channel for learning content and updates.</p></div><a className="button button-dark" href={YOUTUBE} target="_blank" rel="noopener noreferrer">Visit our YouTube channel <span aria-hidden="true">↗</span></a></div></section>
      <FAQ /><CallToAction />
    </main>
  </>;
}

function Step({ index, title, text }) { return <article className="step"><span className="step-index">{index}</span><div><h3>{title}</h3><p>{text}</p></div><span className="step-arrow" aria-hidden="true">↗</span></article>; }
const questions = [
  ['What does SkillproPlus help students with?', 'We support students with internship learning opportunities, final-year and academic project guidance, and research and technical documentation support.'],
  ['Can you help me choose a final-year project topic?', 'Tell us your course, interests, and college requirements, and we can discuss project directions and a practical plan with you.'],
  ['Do you provide IEEE research papers or guarantee publication?', 'No. We do not claim to have published papers available or guarantee publication. We can discuss responsible research guidance and support presenting your own work.'],
  ['How do I ask about an internship or service?', 'Use our contact page or email SkillproPlus. Include your area of interest and any relevant deadlines so our team can understand your request.'],
];
function FAQ() { return <section className="faq-section section-space"><div className="container faq-grid"><div><Eyebrow>A few helpful details</Eyebrow><h2>Questions?<br /><em>Start here.</em></h2><p>Have a question specific to your college, project, or timeline? <Link to="/contact">Get in touch with us.</Link></p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>; }
function CallToAction() { return <section className="cta"><div className="container cta-inner"><div><Eyebrow light>Your next step can start today</Eyebrow><h2>Have an idea in mind?</h2><p>Tell us what you are working towards. Let’s find a good way to get started.</p></div><Link className="button button-accent" to="/contact">Talk to SkillproPlus <span aria-hidden="true">→</span></Link></div></section>; }

function About() {
  return <><SEO page="about" /><main><PageIntro label="About SkillproPlus" title="Learning that moves" highlight="you forward." text="We help students turn curiosity into practical skills through internships, academic project guidance, and responsible research support." /><section className="content-section section-space"><div className="container content-grid"><div><Eyebrow>Our purpose</Eyebrow><h2>Make learning<br /><em>more practical.</em></h2></div><div className="prose"><p>SkillproPlus is focused on supporting students as they navigate the transition from classroom learning to hands-on work. We offer a welcoming place to explore internship opportunities, discuss academic project ideas, and get help presenting your own research and technical work clearly.</p><p>Our approach is collaborative: understand your goals and academic context first, then help you build a plan that supports your learning. Your institution’s rules, your own contribution, and responsible academic practice remain central.</p><h3>Our commitment</h3><p>We aim to give clear, practical guidance without making promises we cannot substantiate. Service details, timelines, and availability are discussed individually before work begins.</p><Link className="button" to="/contact">Get in touch <span aria-hidden="true">→</span></Link></div></div></section><CallToAction /></main></>;
}
function ServicePage({ page, label, title, highlight, text, points, note }) {
  return <><SEO page={page} /><main><PageIntro label={label} title={title} highlight={highlight} text={text} /><section className="content-section section-space"><div className="container content-grid"><div><Eyebrow>How we can help</Eyebrow><h2>A path shaped<br /><em>around your goals.</em></h2></div><div className="prose"><p>Every student and project is different. We begin by understanding your subject, interests, requirements, and timeline, then discuss a suitable next step with you.</p><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul><p className="service-note">{note}</p><Link className="button" to="/contact">Discuss your goals <span aria-hidden="true">→</span></Link></div></div></section><section className="related-services section-space"><div className="container"><Eyebrow>Explore more</Eyebrow><h2>Support for your <em>next step.</em></h2><div className="service-grid"><ServiceCard number="01" tag="CAREER" icon="↗" color="icon-purple" title="Internships" text="Build confidence through structured, practical learning." to="/internships" link="Internship support" /><ServiceCard number="02" tag="BUILD" icon="⌘" color="icon-green" title="Academic projects" text="Plan and develop an idea that fits your course." to="/projects" link="Project guidance" /><ServiceCard number="03" tag="WRITE" icon="✎" color="icon-peach" title="Research support" text="Present your own research and technical work clearly." to="/research" link="Documentation support" /></div></div></section><CallToAction /></main></>;
}
function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`SkillproPlus enquiry: ${formData.get('topic')}`);
    const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nArea of interest: ${formData.get('topic')}\n\n${formData.get('message')}`);
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }
  return <><SEO page="contact" /><main><PageIntro label="Contact" title="Let’s talk about" highlight="what you’re building." text="Tell us about your course, idea, internship goals, or documentation needs. Our team will help you explore a suitable next step." /><section className="contact-section section-space"><div className="container contact-grid"><div className="contact-details"><Eyebrow>Get in touch</Eyebrow><h2>We’re here to<br /><em>help you plan.</em></h2><p>Share a few details and your email app will open with a ready-to-send enquiry. No contact form data is stored on this website.</p><div className="contact-item"><span aria-hidden="true">✉</span><div><small>EMAIL</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div><div className="contact-item"><span aria-hidden="true">⌖</span><div><small>LOCATION</small><b>Bengaluru, Karnataka, India</b></div></div><a className="contact-youtube" href={YOUTUBE} target="_blank" rel="noopener noreferrer">Visit our YouTube channel ↗</a></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength="100" /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength="200" /></label></div><label>What can we help with?<select name="topic" defaultValue="" required><option value="" disabled>Select a topic</option><option>Internship</option><option>Final-year or IEEE project</option><option>Research or documentation</option><option>Other student enquiry</option></select></label><label>Your message<textarea name="message" rows="5" required maxLength="2000" /></label><button className="button" type="submit">Open email to send <span aria-hidden="true">→</span></button>{sent && <p className="form-message" role="status">Your email app should open with the enquiry details. If it doesn’t, email us directly at {EMAIL}.</p>}<p className="form-privacy">Your message stays in your browser and is not submitted to or stored by a server.</p></form></div></section></main></>;
}
function LegacyRedirect({ to }) { return <Navigate to={to} replace />; }
function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/internships" element={<ServicePage page="internships" label="Internships & career skills" title="Learn by doing." highlight="Grow with purpose." text="Explore practical internship learning opportunities designed to help students build confidence, develop relevant skills, and take a clearer step toward their career goals." points={['Discuss areas of interest and learning goals with our team.', 'Explore practical, structured learning pathways.', 'Build skills and reflect on your learning experience.', 'Ask us about current availability, format, and timelines.']} note="Internship availability, eligibility, format, and any fees are confirmed directly with our team. An internship does not guarantee employment." />} />
    <Route path="/projects" element={<ServicePage page="projects" label="Final-year & academic projects" title="Turn your idea" highlight="into something real." text="Get student-focused guidance for final-year, IEEE-inspired, and college projects—from exploring a relevant topic to planning your implementation and presentation." points={['Explore project topics that fit your course and interests.', 'Plan a scope, milestones, and a practical approach.', 'Get guidance across software, computing, and interdisciplinary projects.', 'Prepare clear technical documentation and a confident project presentation.']} note="Project work is guidance for learning and academic development. Students should follow their college’s rules and make their own contribution to submitted work." />} />
    <Route path="/research" element={<ServicePage page="research" label="Research & documentation" title="Make your work" highlight="clear and credible." text="Thoughtful support for students who want to develop research skills and communicate their own technical work clearly and responsibly." points={['Explore research questions and plan a responsible process.', 'Organize your own findings and technical material.', 'Improve clarity, structure, and readability in reports.', 'Prepare documentation and presentations for your academic work.']} note="We support original student work and responsible academic practice. We do not sell or supply published papers, write work for dishonest submission, or guarantee publication." />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about.html" element={<LegacyRedirect to="/about" />} />
    <Route path="/contact.html" element={<LegacyRedirect to="/contact" />} />
    <Route path="/projects.html" element={<LegacyRedirect to="/projects" />} />
    <Route path="/internship.html" element={<LegacyRedirect to="/internships" />} />
    <Route path="/courses.html" element={<LegacyRedirect to="/internships" />} />
    <Route path="*" element={<main className="not-found"><div className="container"><Eyebrow>404 · Page not found</Eyebrow><h1>This page took<br /><em>a different route.</em></h1><p>The page may have moved. Let’s get you back on track.</p><Link className="button" to="/">Go to the homepage <span aria-hidden="true">→</span></Link></div></main>} />
  </Routes><Footer /></>;
}

export default App;
