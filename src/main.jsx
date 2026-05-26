import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  ChevronRight,
  Compass,
  DraftingCompass,
  FileUp,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  SunMedium,
  X,
} from 'lucide-react';
import './styles.css';

import logo from './assets/lumivex-logo.webp';
import p1 from './assets/projects/villa-pool-evening.webp';
import p2 from './assets/projects/interior-perforated-panels.webp';
import p3 from './assets/projects/terrace-perforated-day.webp';
import p4 from './assets/projects/villa-pool-day.webp';
import p5 from './assets/projects/sunset-lamella-detail.webp';
import p6 from './assets/projects/modern-house-harmo.webp';
import p7 from './assets/projects/modern-house-harmo-alt.webp';

const company = {
  name: 'Lumivex Solutions',
  email: 'info@lumivex-solutions.com',
  phone: 'Po dogovoru',
  location: 'Hrvatska / online konzultacije',
};

const homeNav = [
  ['Usluge', 'services'],
  ['Proces', 'process'],
  ['Materijali', 'materials'],
  ['Kontakt', 'contact'],
];

const services = [
  {
    title: 'Razvoj ideje',
    icon: Sparkles,
    text: 'Od početne ideje analiziramo arhitekturu objekta, orijentaciju prema suncu, privatnost, način korištenja prostora i estetski smjer rješenja.',
  },
  {
    title: 'Konzultacije pri odabiru sjenila',
    icon: Compass,
    text: 'Savjetujemo odabir kliznih sjenila, harmo sustava, brisoleja, vertikalnih lamela, perforiranih ispuna i dekorativnih panela.',
  },
  {
    title: 'Rješenja ključ u ruke',
    icon: BadgeCheck,
    text: 'Povezujemo koncept, tehničku razradu, CAD dokumentaciju, vizuale, pripremu za proizvodnju i koordinaciju izvedbe.',
  },
  {
    title: 'CAD projektiranje i ucrtavanje',
    icon: DraftingCompass,
    text: 'Ucrtavanje sjenila u postojeće DWG podloge, izrada presjeka, detalja vodilica, sidrenja i tehničkih prikaza za montažu.',
  },
  {
    title: 'Izrada vizuala gotovog izgleda',
    icon: PenTool,
    text: 'Profesionalni vizuali i renderi pomažu investitorima, arhitektima i projektantima razumjeti konačan izgled prije izvedbe.',
  },
  {
    title: 'Moderna arhitektonska sjenila',
    icon: SunMedium,
    text: 'Razvoj kliznih grilja, harmo grilja, brisoleja, fiksnih sjenila, dekorativnih panela i fasadnih sustava.',
  },
];

const process = [
  ['01', 'Analiza objekta', 'Pregled arhitekture, otvora, osunčanja, privatnosti i načina korištenja prostora.'],
  ['02', 'Koncept rješenja', 'Odabir tipa sjenila, smjera otvaranja, profila, ispuna, vodilica i estetskog ritma.'],
  ['03', 'Tehnička razrada', 'CAD ucrtavanje, detalji montaže, presjeci, pozicije sidrenja i provjera realne izvedivosti.'],
  ['04', 'Vizualizacija', 'Prikaz gotovog izgleda na objektu, s materijalima, atmosferom i varijantama rješenja.'],
];

const materials = [
  ['Aluminijski profili', 'Čista konstrukcija, stabilnost i dugotrajnost.', 'texture-profile'],
  ['WPC ispune', 'Toplina drva uz lakše održavanje.', 'texture-wpc'],
  ['Perforirani limovi', 'Privatnost, sjena i suvremeni ritam fasade.', 'texture-perforated'],
  ['Alubond paneli', 'Ravne plohe i premium minimalistički izgled.', 'texture-alubond'],
  ['Cementne ploče', 'Robustan arhitektonski karakter i monolitna estetika.', 'texture-cement'],
  ['Vertikalne lamele', 'Elegantna linija, kontrola sunca i naglašena visina.', 'texture-lamella'],
];

const projectImages = [
  {
    src: p1,
    title: 'Villa Linear Shade',
    type: 'Klizna sjenila / vertikalne lamele',
    text: 'Koncept vile s velikim staklenim površinama i sjenilima integriranim u ritam fasade.',
  },
  {
    src: p2,
    title: 'Interior Screen View',
    type: 'Perforirani paneli / unutarnji pogled',
    text: 'Vizualni prikaz atmosfere prostora i odnosa perforiranih panela, rasvjete i pogleda prema eksterijeru.',
  },
  {
    src: p3,
    title: 'Terrace Perforated System',
    type: 'Perforirane klizne ispune',
    text: 'Dnevni prikaz terasa s kliznim panelima, preciznim vodilicama i perforiranom dekorativnom ispunom.',
  },
  {
    src: p4,
    title: 'Premium Villa Concept',
    type: 'Klizna sjenila / drveni dekor',
    text: 'Arhitektonska integracija sjenila na modernom objektu s bazenom, staklenim stijenama i toplim dekorom.',
  },
  {
    src: p5,
    title: 'Sunset Lamella Detail',
    type: 'Detalj vertikalnih lamela',
    text: 'Atmosferski detalj sjenila u zalasku sunca s naglaskom na materijal, sjenu i ambijentalnu rasvjetu.',
  },
  {
    src: p6,
    title: 'Harmo System House',
    type: 'Harmo grilje / fasadni sustav',
    text: 'Prikaz harmo elemenata i vertikalnih lamela na suvremenoj kući s kombinacijom kamena i drva.',
  },
  {
    src: p7,
    title: 'Harmo System Variant',
    type: 'Harmo grilje / otvoreni položaji',
    text: 'Varijanta fasadnog rješenja s otvorenim harmo elementima i vertikalnim sjenilima na gornjoj etaži.',
  },
];

function setPage(page) {
  window.location.hash = page === 'projects' ? '#/projekti' : '#/';
}

function useHashPage() {
  const [page, setPageState] = useState(() => (window.location.hash.includes('projekti') ? 'projects' : 'home'));

  useEffect(() => {
    const onHash = () => setPageState(window.location.hash.includes('projekti') ? 'projects' : 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return page;
}

function scrollToSection(id) {
  if (window.location.hash.includes('projekti')) {
    window.location.hash = '#/';
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Header({ page }) {
  const [open, setOpen] = useState(false);

  const closeAndRun = (fn) => {
    setOpen(false);
    fn();
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => closeAndRun(() => setPage('home'))} aria-label="Lumivex Solutions početna">
          <img src={logo} alt="Lumivex logo" className="brand-logo" />
          <span className="brand-text">
            <span>LUMIVEX</span>
            <small>Solutions</small>
          </span>
        </button>

        <nav className="desktop-nav">
          <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Početna</button>
          {homeNav.map(([label, id]) => (
            <button key={id} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
          <button className={page === 'projects' ? 'active' : ''} onClick={() => setPage('projects')}>Projekti</button>
        </nav>

        <button className="header-cta" onClick={() => scrollToSection('contact')}>Zatraži konzultacije</button>

        <button className="mobile-toggle" onClick={() => setOpen((value) => !value)} aria-label="Otvori navigaciju">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <button onClick={() => closeAndRun(() => setPage('home'))}>Početna</button>
          {homeNav.map(([label, id]) => (
            <button key={id} onClick={() => closeAndRun(() => scrollToSection(id))}>{label}</button>
          ))}
          <button onClick={() => closeAndRun(() => setPage('projects'))}>Projekti</button>
        </div>
      )}
    </header>
  );
}

function SectionTitle({ label, title, text, centered = false }) {
  return (
    <div className={centered ? 'section-title centered reveal' : 'section-title reveal'}>
      <span>{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function BrandVisual() {
  return (
    <div className="brand-visual reveal" aria-label="Apstraktni vizual arhitektonskih sjenila">
      <div className="visual-glow one" />
      <div className="visual-glow two" />
      <div className="visual-card main-card">
        <img src={logo} alt="Lumivex Solutions logo" />
      </div>
      <div className="visual-card material-card">
        <span className="mini-label">MATERIJALI</span>
        <div className="sample-row">
          <i className="sample sample-gold" />
          <i className="sample sample-dark" />
          <i className="sample sample-stone" />
        </div>
      </div>
      <div className="visual-card technical-card">
        <span className="mini-label">CAD DETAIL</span>
        <div className="cad-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="lamella-stack">
        {Array.from({ length: 8 }).map((_, index) => (
          <i key={index} style={{ '--i': index }} />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero section-bg" id="home">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Premium architectural shading</p>
            <h1>Sjenila koja postaju dio arhitekture.</h1>
            <p className="lead">
              Projektiranje, razvoj i izrada modernih sjenila i arhitektonskih sustava za objekte visoke estetske vrijednosti.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scrollToSection('contact')}>Zatraži konzultacije <ArrowRight size={18} /></button>
              <button className="btn ghost" onClick={() => setPage('projects')}>Otvori zasebnu stranicu projekata</button>
            </div>
            <div className="hero-stats">
              <article><strong>CAD</strong><span>tehnička razrada</span></article>
              <article><strong>3D</strong><span>vizuali koncepta</span></article>
              <article><strong>360°</strong><span>razvoj rješenja</span></article>
            </div>
          </div>
          <BrandVisual />
        </div>
      </section>

      <section className="about" id="about">
        <div className="container about-grid">
          <SectionTitle
            label="O nama"
            title="Spoj moderne arhitekture, tehničke stručnosti i premium dizajna."
            text="Lumivex Solutions specijaliziran je za razvoj i projektiranje profesionalnih sjenila i arhitektonskih sustava za moderne objekte. Fokus je na estetski čistim rješenjima, realnoj izvedivosti i integraciji sjenila u samu arhitekturu objekta."
          />
          <div className="about-points reveal">
            <article><ShieldCheck /><span>Tehnički izvediva rješenja</span></article>
            <article><Ruler /><span>Precizni detalji vodilica i sidrenja</span></article>
            <article><Blocks /><span>Moderni materijali i ispune</span></article>
            <article><SunMedium /><span>Kontrola sunca, privatnosti i estetike</span></article>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <SectionTitle
            centered
            label="Usluge"
            title="Od prve ideje do jasne podloge za izvedbu."
            text="Stranica ne prikazuje projektne fotografije na početnoj. Umjesto toga, glavna stranica gradi brend kroz usluge, materijale, proces i kontakt."
          />
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card reveal" key={service.title}>
                  <div className="icon-box"><Icon size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container">
          <SectionTitle
            label="Proces"
            title="Jasan tijek rada za arhitekte, investitore i projektante."
            text="Cilj je da sjenilo ne izgleda kao naknadni dodatak, nego kao sastavni dio arhitekture."
          />
          <div className="timeline">
            {process.map(([number, title, text]) => (
              <article className="timeline-card reveal" key={number}>
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="materials" id="materials">
        <div className="container">
          <SectionTitle
            centered
            label="Materijali i ispune"
            title="Premium teksture bez prikaza projektnih slika na početnoj."
            text="Početna stranica koristi apstraktne i materijalne prikaze, dok su konkretni projekti izdvojeni na posebnoj stranici."
          />
          <div className="materials-grid">
            {materials.map(([title, text, texture]) => (
              <article className="material-card-item reveal" key={title}>
                <div className={`material-swatch ${texture}`} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero section-bg">
        <div className="container projects-hero-grid">
          <div className="reveal">
            <p className="eyebrow"><span /> Lumivex projects</p>
            <h1>Projekti su izdvojeni na posebnoj stranici.</h1>
            <p className="lead">
              Ovdje se prikazuju konceptni renderi izrađeni prema zahtjevima klijenata za razvoj i izradu profesionalnih sjenila te služe kao vizualni prikaz mogućih arhitektonskih rješenja.
            </p>
          </div>
          <div className="projects-note reveal">
            <img src={logo} alt="Lumivex logo" />
            <p>Glavna stranica ostaje čisti premium landing page bez projektnih fotografija.</p>
          </div>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="container">
          <div className="project-gallery">
            {projectImages.map((project, index) => (
              <article className={index === 1 || index === 5 ? 'project-card tall reveal' : 'project-card reveal'} key={project.title}>
                <img src={project.src} alt={project.title} loading="lazy" />
                <div className="project-content">
                  <span>{project.type}</span>
                  <h2>{project.title}</h2>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactSection compact />
    </main>
  );
}

function ContactSection({ compact = false }) {
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const mailLink = useMemo(() => {
    const subject = encodeURIComponent(`Upit za projekt - ${form.name || 'Lumivex Solutions'}`);
    const body = encodeURIComponent(
      `Ime i prezime: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\nDatoteka/nacrt: ${fileName || 'nije odabrano'}\n\nOpis projekta:\n${form.message}`
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  }, [form, fileName]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    window.location.href = mailLink;
  };

  return (
    <section className={compact ? 'contact compact' : 'contact'} id="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <SectionTitle
            label="Kontakt"
            title="Pošaljite nacrt, sliku objekta ili ideju."
            text="Za početak su dovoljni osnovni podaci o objektu, željeni tip sjenila i nekoliko fotografija ili nacrta."
          />
          <div className="contact-links">
            <a href={`mailto:${company.email}`}><Mail size={19} /> {company.email}</a>
            <span><Phone size={19} /> {company.phone}</span>
            <span><MapPin size={19} /> {company.location}</span>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <label>
            Ime i prezime
            <input name="name" value={form.name} onChange={updateField} required placeholder="Vaše ime" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={updateField} required placeholder="vas@email.com" />
          </label>
          <label>
            Broj telefona
            <input name="phone" value={form.phone} onChange={updateField} placeholder="+385 ..." />
          </label>
          <label>
            Opis projekta
            <textarea name="message" value={form.message} onChange={updateField} required rows="5" placeholder="Opišite objekt, vrstu sjenila, materijal, dimenzije ili ideju..." />
          </label>
          <label className="file-field">
            <input type="file" accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.webp" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} />
            <FileUp size={20} />
            <span>{fileName || 'Dodaj nacrt, sliku objekta ili PDF'}</span>
          </label>
          <button className="btn primary" type="submit">Pošalji upit <Send size={18} /></button>
          <small>Na GitHub Pages verziji forma otvara email klijent. Za stvarno slanje priloga potrebno je kasnije spojiti backend, Formspree ili EmailJS.</small>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Lumivex Solutions. Sva prava pridržana.</p>
        <p>Moderna sjenila · CAD projektiranje · Vizuali</p>
      </div>
    </footer>
  );
}

function App() {
  const page = useHashPage();

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) element.classList.add('visible');
      });
    };
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, [page]);

  return (
    <>
      <div className="page-noise" />
      <Header page={page} />
      {page === 'projects' ? <ProjectsPage /> : <HomePage />}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
