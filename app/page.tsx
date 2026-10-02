"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/* ⚠️ Le CV doit être dans public/ avec EXACTEMENT ce nom */
const CV_PATH = "/CV_Fatou_Bintou_SYLLA.pdf";
const CV_FILENAME = "CV_Fatou_Bintou_SYLLA.pdf";
const EMAIL = "fasylla2003@gmail.com";
const PHONE = "77 877 33 60";

/* Ordre des slides = ordre de la page */
const slides: [string, string][] = [
  ["Accueil", "hero"],
  ["À propos", "about"],
  ["Compétences", "skills"],
  ["Expériences", "projects"],
  ["Formation", "formation"],
  ["Conception web", "web"],
  ["Contact", "contact"],
];

const headerNav: [string, string][] = [
  ["Home", "hero"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experiences", "projects"],
  ["Formation", "formation"],
  ["Contact", "contact"],
];

const theme = Array(7).fill("lt");

const skills = [
  {
    title: "IA & Data",
    groups: [
      {
        label: "Langages",
        items: ["Python", "Java", "C", "JavaScript/TypeScript", "PHP"],
      },
      {
        label: "Data Science",
        items: [
          "Analyse exploratoire (EDA)",
          "Machine Learning (régression, classification, clustering)",
        ],
      },
      {
        label: "Librairies",
        items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      },
    ],
  },
  {
    title: "Big Data",
    groups: [
      {
        label: "Concepts",
        items: ["Volume", "Vélocité", "Variété"],
      },
      {
        label: "Outils",
        items: [
          "Hadoop",
          "Spark",
          "Data Pipeline",
          "Traitement de données massives",
        ],
      },
    ],
  },
  {
    title: "Développement Web",
    groups: [
      {
        label: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React.js"],
      },
      {
        label: "Backend",
        items: ["PHP/Laravel", "API REST"],
      },
      {
        label: "Bases de données",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
      },
    ],
  },
  {
    title: "Business & MBA",
    groups: [
      {
        label: "Compétences",
        items: [
          "Analyse de marché",
          "Stratégie d’entreprise",
          "Gestion de projet (Agile/Scrum)",
          "Leadership",
          "Communication professionnelle",
          "Prise de décision",
          "Business intelligence",
          "Digital transformation",
        ],
      },
    ],
  },
];

const experiences = [
  {
    role: "Développeuse Web",
    company: "Sphynx Africa",
    period: "Juin 2025 – juin 2026",
    stack: [
      "React.js",
      "TypeScript",
      "Appwrite",
      "REST API",
      "Tailwind CSS",
      "Git/GitHub",
      "Clerk",
    ],
    summary:
      "Plateforme e-commerce full-stack « Soma Luxury », du site client au dashboard administrateur.",
    description:
      "Soma Luxury est une plateforme e-commerce full-stack pensée pour offrir une expérience d’achat moderne, intuitive et élégante. J’ai développé l’ensemble de la solution, de l’interface client au dashboard administrateur : catalogue produits, panier, commandes, gestion des produits et suivi des ventes. Le projet utilise React.js, TypeScript et Appwrite, avec intégration d’API REST, opérations CRUD et Clerk pour l’authentification et la sécurisation de l’accès à l’espace administrateur. Une attention particulière a été portée à la performance, la responsivité et l’expérience utilisateur.",
  },
  {
    role: "Stagiaire en Développement Web (à distance) – Projet de fin d’études",
    company: "Defar Sci",
    period: "Mai 2025 – Juin 2025",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"],
    summary:
      "Ticket IT : gestion des demandes de support avec rôles, commentaires et statistiques.",
    description:
      "Ticket IT est une application web de gestion des demandes de support informatique, développée dans le cadre de mon projet de fin d’études. J’ai conçu et développé la solution avec React et JavaScript, en intégrant un système de gestion des rôles (utilisateur, technicien et administrateur), le suivi des tickets par commentaires et un tableau de bord statistique. Le projet m’a permis de mettre en pratique la conception d’interfaces web, la gestion des données, le développement de fonctionnalités métier ainsi que l’utilisation de Git et GitHub.",
  },
  {
    role: "Stagiaire Développeuse Web",
    company: "LONASE",
    period: "Mai 2024 – Juin 2024",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"],
    summary:
      "Digitalisation du paiement des tickets gagnants supérieurs à 1 000 000 FCFA.",
    description:
      "Automatisation Ticket Gagnant — LONASE est une application web conçue pour digitaliser et sécuriser le paiement des tickets gagnants supérieurs à 1 000 000 FCFA. J’ai participé à la conception et au développement de la solution permettant aux parieurs de soumettre leurs demandes, transmettre leurs documents, suivre l’état de leur dossier et recevoir des notifications, avec un espace de gestion pour l’administration. Analyse des besoins, modélisation UML, développement web, bases de données, authentification, validation des dossiers et support client.",
  },
];

const formations = [
  {
    period: "2026 - 2028",
    title: "Master – Administration des Affaires (MBA)",
    school: "Swiss Umef University",
  },
  {
    period: "2025 - 2027",
    title: "Master – Intelligence Artificielle & Big Data (IABD)",
    school: "Ecole Supérieure Polytechnique (ESP)",
  },
  {
    period: "2024 - 2025",
    title: "Licence – Génie Logiciel et Système d'Information (GLSI)",
    school: "Ecole Supérieure Polytechnique (ESP)",
  },
  {
    period: "2022 - 2024",
    title: "Licence 2 – Diplôme Supérieur de Technologie (DST)",
    school: "Ecole Supérieure Polytechnique (ESP)",
  },
  {
    period: "2021 - 2022",
    title: "Baccalauréat Série S2",
    school: "Lycée d'excellence Seydina Limamoulaye de Guédiawaye",
  },
];

const services = [
  {
    icon: "🌐",
    title: "Site web vitrine",
    desc: "Présentez votre activité avec un site rapide, clair et adapté à tous les écrans.",
  },
  {
    icon: "🛍️",
    title: "Site e-commerce",
    desc: "Catalogue produits, panier, commandes et dashboard administrateur pour gérer vos ventes.",
  },
  {
    icon: "🧩",
    title: "Application web sur mesure",
    desc: "Espaces utilisateurs, gestion des rôles, suivi de demandes et tableaux de bord.",
  },
  {
    icon: "📊",
    title: "Data & intelligence artificielle",
    desc: "Analyse de données et modèles de machine learning pour mieux décider.",
  },
];

const journey = [
  {
    y: "2021",
    t: "Baccalauréat S2 au lycée d’excellence Seydina Limamoulaye de Guédiawaye.",
  },
  {
    y: "2022",
    t: "Entrée à l’ESP : Licence 2 – Diplôme Supérieur de Technologie (DST).",
  },
  {
    y: "2024",
    t: "Stage de développeuse web à la LONASE et Licence en Génie Logiciel et Système d’Information.",
  },
  {
    y: "2025",
    t: "Master IA & Big Data, projet de fin d’études chez Defar Sci, puis développeuse web chez Sphynx Africa.",
  },
  {
    y: "2026",
    t: "Début du MBA à Swiss Umef University.",
  },
];

function Head({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-10 rv" style={{ ["--i" as string]: 0 }}>
      <span
        className="block w-12 h-1 rounded-full mb-5"
        style={{ background: "var(--acc)" }}
      />

      <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-none">
        {title}
      </h2>

      {sub && (
        <p className="muted mt-3 text-lg max-w-2xl">
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const scroller = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");

  const notify = useCallback((m: string) => {
    setToast(m);
    setTimeout(() => setToast(""), 2800);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const el = document.getElementById(
        slides[Math.max(0, Math.min(slides.length - 1, i))][1]
      );

      el?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    },
    []
  );

  /* Slide active + progression */
  useEffect(() => {
    const root = scroller.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(
              slides.findIndex(
                ([, id]) => id === e.target.id
              )
            );
          }
        }),
      {
        root,
        threshold: 0.55,
      }
    );

    slides.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onScroll = () =>
      setProgress(
        (root.scrollTop /
          Math.max(1, root.scrollHeight - root.clientHeight)) *
          100
      );

    root.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      io.disconnect();
      root.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Navigation au clavier */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;

      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(tag)
      )
        return;

      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        goTo(active + 1);
      }

      if (
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        goTo(active - 1);
      }
    };

    window.addEventListener("keydown", onKey);

    return () =>
      window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  /*
   * TÉLÉCHARGEMENT DIRECT DU CV
   *
   * Le fichier est pris directement depuis public/
   * Aucun fetch
   * Aucun Blob
   * Aucune conversion
   * Aucune modification du PDF
   */
  const downloadCV = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const a = document.createElement("a");

    a.href = CV_PATH;
    a.download = CV_FILENAME;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    notify("Téléchargement du CV lancé");
  };

  const validate = () => {
    const er: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      er.name = "Indiquez votre nom.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      er.email = "Adresse email invalide.";
    }

    if (form.message.trim().length < 10) {
      er.message =
        "Message trop court (10 caractères minimum).";
    }

    setErrors(er);

    return !Object.keys(er).length;
  };

  const text = () =>
    `${form.message}\n\nNom : ${form.name}\nEmail : ${form.email}`;

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio - ${form.name}`
    )}&body=${encodeURIComponent(text())}`;

    notify("Ouverture de votre messagerie");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      notify("Email copié");
    } catch {
      notify(EMAIL);
    }
  };

  const askQuote = (topic: string) => {
    setForm((f) => ({
      ...f,
      message: `Bonjour, je souhaite un devis pour : ${topic}.`,
    }));

    goTo(slides.length - 1);
  };

  /*
   * BOUTON CV
   */
  const CvButton = ({
    className,
  }: {
    className: string;
  }) => (
    <a
      href={CV_PATH}
      download={CV_FILENAME}
      onClick={downloadCV}
      className={className}
    >
      Download CV
    </a>
  );

  const S = (i: number) =>
    ({
      ["--i" as string]: i,
    } as React.CSSProperties);

  return (
    <>
      <style>{`
        .root{
          font-family:'Times New Roman',Times,serif;
          color:#1f2233
        }

        .font-display{
          font-family:'Times New Roman',Times,serif;
          letter-spacing:.01em
        }

        .scroller{
          height:100vh;
          height:100dvh;
          overflow-y:auto;
          scroll-snap-type:y proximity;
          scroll-behavior:smooth;
          background:linear-gradient(
            135deg,
            #fde7f1 0%,
            #fff6f2 45%,
            #fde9dc 100%
          ) fixed
        }

        @media (min-width:1024px){
          .scroller{
            scroll-snap-type:y mandatory
          }
        }

        .slide{
          min-height:100vh;
          min-height:100dvh;
          scroll-snap-align:start;
          scroll-snap-stop:always;
          display:flex;
          align-items:center;
          padding:6.5rem 1.5rem 4rem;
          color:var(--text)
        }

        .lt{
          --text:#1f2233;
          --muted:#4b5563;
          --line:rgba(236,72,153,.2);
          --card:rgba(255,255,255,.78);
          --soft:rgba(236,72,153,.08);
          --acc:#ec4899
        }

        .muted{
          color:var(--muted)
        }

        .acc{
          background:linear-gradient(
            90deg,
            #ec4899,
            #fb923c
          );
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent
        }

        .card2{
          background:var(--card);
          backdrop-filter:blur(10px);
          border:1px solid #fff;
          border-radius:1.5rem;
          box-shadow:0 10px 30px rgba(236,72,153,.10)
        }

        .chip{
          background:rgba(255,255,255,.85);
          border:1px solid var(--line);
          color:var(--text);
          border-radius:999px;
          padding:.4rem .9rem;
          font-size:.9rem
        }

        .btn{
          display:inline-block;
          text-align:center;
          padding:.9rem 1.8rem;
          border-radius:1rem;
          font-weight:600;
          background:linear-gradient(
            90deg,
            #ec4899,
            #fb923c
          );
          color:#fff;
          transition:transform .2s,box-shadow .2s
        }

        .btn:hover{
          transform:translateY(-2px);
          box-shadow:0 12px 28px rgba(236,72,153,.3)
        }

        .btn-o{
          background:#fff;
          color:var(--text);
          border:1px solid var(--line)
        }

        .field{
          width:100%;
          padding:.9rem 1rem;
          border-radius:.9rem;
          background:#fff;
          border:1px solid var(--line);
          color:var(--text);
          font-family:inherit
        }

        .field:focus{
          outline:2px solid #ec4899
        }

        .hov{
          transition:transform .25s,box-shadow .25s
        }

        .hov:hover{
          transform:translateY(-5px);
          box-shadow:0 18px 40px rgba(236,72,153,.2)
        }

        .rv{
          opacity:0;
          transform:translateY(36px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.8,.2,1);
          transition-delay:calc(var(--i,0)*90ms)
        }

        .slide.on .rv{
          opacity:1;
          transform:none
        }

        a:focus-visible,
        button:focus-visible{
          outline:2px solid #ec4899;
          outline-offset:3px
        }

        .print-cv{
          display:none
        }

        @media print{
          .root{
            display:none!important
          }

          .print-cv{
            display:block!important;
            color:#111
          }
        }

        @media (prefers-reduced-motion:reduce){
          .rv{
            opacity:1;
            transform:none;
            transition:none
          }

          .scroller{
            scroll-behavior:auto
          }
        }
      `}</style>

      <div className="root relative">

        {/* EN-TÊTE */}
        <header
          className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-white"
          style={{
            fontFamily:
              "'Times New Roman', Times, serif",
          }}
        >
          <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-12">

            <button
              onClick={() => goTo(0)}
              className="font-bold text-[13px] tracking-[0.18em] uppercase text-neutral-900"
            >
              Fatou Bintou Sylla Portfolio
            </button>

            <nav
              className="hidden lg:flex gap-7 text-sm"
              aria-label="Sections"
            >
              {headerNav.map(([l, id]) => (
                <button
                  key={id}
                  onClick={() =>
                    goTo(
                      slides.findIndex(
                        ([, x]) => x === id
                      )
                    )
                  }
                  aria-current={
                    slides[active]?.[1] === id
                  }
                  className={`pb-0.5 border-b-2 transition ${
                    slides[active]?.[1] === id
                      ? "border-pink-400 text-neutral-900"
                      : "border-transparent text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {l}
                </button>
              ))}
            </nav>

            <button
              className="lg:hidden text-2xl w-10 h-10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden bg-white border-t border-neutral-200 px-4 py-2">
              {slides.map(([l], i) => (
                <button
                  key={l}
                  onClick={() => goTo(i)}
                  className="block w-full text-left px-3 py-3 text-neutral-800 hover:bg-pink-50 rounded-lg"
                >
                  {l}
                </button>
              ))}

              <CvButton className="btn !block my-2" />
            </div>
          )}

          <div
            className="absolute -bottom-px left-0 h-0.5"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg,#ec4899,#fb923c)",
            }}
          />
        </header>

        {/* POINTS DE NAVIGATION */}
        <nav
          className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
          aria-label="Slides"
        >
          {slides.map(([l], i) => (
            <button
              key={l}
              onClick={() => goTo(i)}
              aria-label={l}
              title={l}
              className={`w-3 h-3 rounded-full border-2 transition ${
                active === i
                  ? "bg-pink-500 border-pink-500 scale-125"
                  : "border-neutral-400 bg-transparent hover:border-pink-400"
              }`}
            />
          ))}
        </nav>

        <div
          ref={scroller}
          className="scroller"
        >

          {/* ACCUEIL */}
          <section
            id="hero"
            className={`slide ${theme[0]} ${
              active === 0 ? "on" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

              <div className="order-2 lg:order-1">

                <span
                  className="rv inline-block px-4 py-2 text-sm uppercase bg-white rounded-full shadow-sm"
                  style={S(0)}
                >
                  AI &amp; Big Data Engineer &amp; Future MBA
                </span>

                <h1
                  className="rv font-display font-bold text-6xl sm:text-7xl leading-[1.15] mt-3 tracking-wide"
                  style={S(1)}
                >
                  Fatou Bintou{" "}
                  <span className="block acc">
                    SYLLA
                  </span>
                </h1>

                <p
                  className="rv muted text-lg max-w-lg mt-6 leading-relaxed"
                  style={S(2)}
                >
                  AI &amp; Big Data Engineer spécialisée dans
                  les systèmes intelligents et les architectures
                  data modernes.
                </p>

                <div
                  className="rv flex flex-wrap gap-x-5 gap-y-2 mt-6"
                  style={S(3)}
                >
                  {[
                    ["📍", "Dakar, Sénégal"],
                    ["📧", EMAIL],
                    ["📞", PHONE],
                    ["🚗", "Permis B"],
                  ].map(([i, t]) => (
                    <span key={t}>
                      {i} {t}
                    </span>
                  ))}
                </div>

                <div
                  className="rv mt-6"
                  style={S(4)}
                >
                  <CvButton className="btn" />
                </div>
              </div>

              <div
                className="rv order-1 lg:order-2 flex justify-center"
                style={S(2)}
              >
                <img
                  src="/IMG_2687.jpeg"
                  alt="Fatou Bintou SYLLA"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover border-4 border-white"
                  style={{
                    boxShadow:
                      "0 25px 70px rgba(236,72,153,.28)",
                  }}
                />
              </div>
            </div>
          </section>

          {/* À PROPOS */}
          <section
            id="about"
            className={`slide ${theme[1]} ${
              active === 1 ? "on" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl w-full">

              <Head
                title="À propos"
                sub="L’intelligence artificielle au service de l’innovation et de la performance."
              />

              <div className="w-full">
                <div
                  className="rv card2 w-full p-8 md:p-10 space-y-5"
                  style={S(1)}
                >

                  <p className="muted leading-relaxed">
                    Titulaire d’une Licence en Génie Logiciel
                    et Systèmes d’Information, je poursuis un
                    Master 1 en Intelligence Artificielle et Big
                    Data ainsi qu’un MBA en Administration des
                    Affaires. Mon ambition est de créer des
                    solutions technologiques innovantes qui
                    transforment les données en opportunités et
                    répondent aux enjeux réels des entreprises.
                  </p>

                  <p className="muted leading-relaxed">
                    Passionnée par la Data Science et
                    l’intelligence artificielle, je m’intéresse
                    particulièrement au machine learning, au
                    deep learning et aux systèmes intelligents.
                    Mon objectif est de concevoir des solutions
                    capables d’analyser les données, d’automatiser
                    certains processus et d’éclairer la prise de
                    décision afin de générer une réelle valeur
                    ajoutée pour les organisations.
                  </p>

                  <p className="muted leading-relaxed">
                    En parallèle, mon expertise en développement
                    web Full-Stack me permet de donner vie aux
                    idées : de la conception d’interfaces modernes
                    au développement d’API et de fonctionnalités
                    backend, je transforme les besoins en
                    applications web fonctionnelles, intuitives
                    et évolutives. J’aime concevoir des produits
                    numériques qui associent performance technique,
                    expérience utilisateur et utilité concrète.
                  </p>

                  <p className="muted leading-relaxed">
                    Mon parcours en management des affaires
                    complète cette approche technique par une
                    vision stratégique. Au-delà du code et des
                    algorithmes, je m’intéresse à la manière dont
                    la technologie peut soutenir la croissance,
                    optimiser les opérations et accompagner la
                    transformation digitale des entreprises.
                  </p>

                  <p className="muted leading-relaxed">
                    Aujourd’hui, je souhaite rejoindre une équipe
                    ambitieuse où je pourrai mettre mes compétences
                    au service de projets innovants, continuer à
                    apprendre et contribuer à la création de
                    solutions à fort impact. Je suis également
                    ouverte aux collaborations et aux projets
                    freelance en développement web, e-commerce
                    et solutions numériques.
                  </p>

                </div>
              </div>
            </div>
          </section>

          {/* COMPÉTENCES */}
          <section
            id="skills"
            className={`slide ${theme[2]} ${
              active === 2 ? "on" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl w-full">

              <Head
                title="Compétences"
                sub="Quatre domaines que je combine dans mes projets."
              />

              <div
                className="rv flex flex-wrap items-center gap-2 mb-6"
                style={S(1)}
              >
                {skills.map((s, i) => (
                  <button
                    key={s.title}
                    onClick={() => setTab(i)}
                    aria-pressed={tab === i}
                    className={`px-5 py-2.5 rounded-full font-semibold transition ${
                      tab === i
                        ? "btn !py-2.5 !px-5"
                        : "card2 !rounded-full hover:opacity-70"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              <div
                className="rv card2 p-8 md:p-10 space-y-6 min-h-[16rem]"
                style={S(2)}
              >
                {skills[tab].groups.map((g) => (
                  <div key={g.label}>
                    <p className="text-sm font-semibold acc mb-3">
                      {g.label}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="chip"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXPÉRIENCES */}
          <section
            id="projects"
            className={`slide ${theme[3]} ${
              active === 3 ? "on" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl w-full">

              <Head
                title="Expériences professionnelles"
                sub="Trois expériences, du stage au poste de développeuse."
              />

              <div className="space-y-4">
                {experiences.map((e, i) => (
                  <article
                    key={e.company}
                    className="rv card2 p-6 md:p-7"
                    style={S(i + 1)}
                  >

                    <button
                      onClick={() =>
                        setOpen(open === i ? null : i)
                      }
                      aria-expanded={open === i}
                      className="w-full text-left flex items-start justify-between gap-4"
                    >
                      <div>

                        <span className="chip !text-xs">
                          {e.period}
                        </span>

                        <h3 className="font-display text-2xl md:text-3xl font-extrabold mt-3">
                          {e.company}
                        </h3>

                        <h4 className="acc font-bold mt-1">
                          {e.role}
                        </h4>

                        {open !== i && (
                          <p className="muted mt-2 text-sm">
                            {e.summary}
                          </p>
                        )}
                      </div>

                      <span
                        className={`text-2xl transition-transform ${
                          open === i
                            ? "rotate-45"
                            : ""
                        }`}
                      >
                        ＋
                      </span>
                    </button>

                    {open === i && (
                      <div className="mt-4">

                        <p className="muted leading-relaxed text-sm md:text-base">
                          {e.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {e.stack.map((s) => (
                            <span
                              key={s}
                              className="chip !text-xs"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FORMATION */}
          <section
            id="formation"
            className={`slide ${theme[4]} ${
              active === 4 ? "on" : ""
            }`}
          >
            <div className="mx-auto max-w-4xl w-full">

              <Head title="Formation" />

              <div
                className="relative border-l-2 ml-3 space-y-4"
                style={{
                  borderColor: "var(--line)",
                }}
              >
                {formations.map((f, i) => (
                  <div
                    key={f.title}
                    className="rv relative pl-8"
                    style={S(i + 1)}
                  >

                    <span
                      className="absolute -left-[9px] top-7 w-4 h-4 rounded-full"
                      style={{
                        background: "var(--acc)",
                      }}
                    />

                    <div className="card2 p-5 md:flex md:items-center md:gap-8">

                      <p className="font-display text-xl font-extrabold acc md:w-40 shrink-0">
                        {f.period}
                      </p>

                      <div>
                        <p className="font-semibold">
                          {f.title}
                        </p>

                        <p className="muted text-sm mt-1">
                          {f.school}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONCEPTION WEB */}
          <section
            id="web"
            className={`slide ${theme[5]} ${
              active === 5 ? "on" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl w-full">

              <Head
                title="Conception de sites web"
                sub="Du site vitrine à la boutique en ligne, je conçois des solutions web sur mesure."
              />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((v, i) => (
                  <div
                    key={v.title}
                    className="rv card2 hov p-7 flex flex-col"
                    style={S(i + 1)}
                  >

                    <span className="font-display text-sm font-bold acc mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="chip !rounded-2xl w-14 h-14 flex items-center justify-center text-2xl !p-0">
                      {v.icon}
                    </span>

                    <h3 className="font-display font-bold text-xl mt-5">
                      {v.title}
                    </h3>

                    <p className="muted mt-2 text-sm leading-relaxed flex-1">
                      {v.desc}
                    </p>

                    <button
                      onClick={() => askQuote(v.title)}
                      className="mt-5 text-sm font-semibold acc hover:underline text-left"
                    >
                      Demander un devis
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className={`slide ${theme[6]} ${
              active === 6 ? "on" : ""
            }`}
            style={{
              paddingBottom: "6rem",
            }}
          >
            <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">

              <div>

                <div
                  className="rv"
                  style={S(0)}
                >
                  <span
                    className="block w-12 h-1 rounded-full mb-5"
                    style={{
                      background: "var(--acc)",
                    }}
                  />

                  <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-none">
                    Travaillons ensemble
                  </h2>

                  <p className="muted mt-4 text-lg max-w-sm">
                    Un talent à recruter, un site vitrine à créer,
                    une boutique en ligne à lancer ou un projet
                    Data & IA à concrétiser ? Je suis ouverte aux
                    opportunités professionnelles et aux
                    collaborations qui donnent vie aux idées
                    ambitieuses.
                  </p>
                </div>

                <div
                  className="rv mt-8 flex flex-col gap-3 items-start"
                  style={S(1)}
                >
                  <button
                    onClick={copyEmail}
                    className="font-semibold underline underline-offset-4 break-all text-left"
                    title="Copier l’email"
                  >
                    {EMAIL} (copier)
                  </button>

                  <a
                    href="https://github.com/bintoudame23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fatou-bintou-sylla-362985257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    LinkedIn
                  </a>
                </div>

                <div
                  className="rv mt-8 space-y-1 text-sm muted"
                  style={S(2)}
                >
                  <p>📍 Dakar, Sénégal</p>
                  <p>📞 {PHONE}</p>
                  <p>⏱️ Réponse par email sous 24 h</p>
                </div>

                <div
                  className="rv mt-6"
                  style={S(3)}
                >
                  <CvButton className="btn" />
                </div>

              </div>

              <form
                onSubmit={sendMail}
                noValidate
                className="rv card2 p-6 md:p-8 space-y-4"
                style={S(2)}
              >

                {(["name", "email"] as const).map((k) => (
                  <div key={k}>

                    <input
                      aria-label={k}
                      aria-invalid={!!errors[k]}
                      placeholder={
                        k === "name"
                          ? "Votre nom"
                          : "Votre email"
                      }
                      className="field"
                      value={form[k]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [k]: e.target.value,
                        })
                      }
                    />

                    {errors[k] && (
                      <p className="text-rose-500 text-sm mt-1">
                        {errors[k]}
                      </p>
                    )}
                  </div>
                ))}

                <div>

                  <textarea
                    aria-label="Message"
                    aria-invalid={!!errors.message}
                    placeholder="Votre message"
                    className="field h-28"
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                  />

                  {errors.message && (
                    <p className="text-rose-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn w-full"
                >
                  Envoyer le message
                </button>

              </form>
            </div>

            <footer
              className="absolute bottom-0 inset-x-0 bg-white/70 backdrop-blur-md border-t border-white py-4 text-center text-sm text-neutral-900"
              style={{
                fontFamily:
                  "'Times New Roman', Times, serif",
              }}
            >
              © 2026 Fatou Bintou SYLLA – AI &amp; Big Data
              Engineer &amp; Dev web . All rights reserved.
            </footer>
          </section>

        </div>

        {toast && (
          <div
            role="status"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] px-5 py-3 rounded-full bg-black text-white shadow-2xl text-sm font-semibold"
          >
            {toast}
          </div>
        )}

      </div>

      {/* CV imprimable conservé comme dans ton projet */}
      <div
        className="print-cv p-10 text-sm leading-relaxed"
        style={{
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Fatou Bintou SYLLA
        </h1>

        <p>
          AI & Big Data Engineer · Développeuse web · Future MBA
        </p>

        <p>
          Dakar, Sénégal | {EMAIL} | {PHONE} | Permis B
        </p>

        <h2
          style={{
            fontWeight: 700,
            marginTop: 18,
            borderBottom: "1px solid #999",
          }}
        >
          Expériences
        </h2>

        {experiences.map((e) => (
          <div
            key={e.company}
            style={{
              marginTop: 8,
            }}
          >
            <b>
              {e.company} – {e.role} ({e.period})
            </b>

            <div>
              {e.stack.join(", ")}
            </div>

            <div>
              {e.description}
            </div>
          </div>
        ))}

        <h2
          style={{
            fontWeight: 700,
            marginTop: 18,
            borderBottom: "1px solid #999",
          }}
        >
          Formation
        </h2>

        {formations.map((f) => (
          <p key={f.title}>
            {f.period} – {f.title}, {f.school}
          </p>
        ))}

        <h2
          style={{
            fontWeight: 700,
            marginTop: 18,
            borderBottom: "1px solid #999",
          }}
        >
          Compétences
        </h2>

        {skills.map((s) => (
          <p key={s.title}>
            <b>{s.title} :</b>{" "}
            {s.groups
              .flatMap((g) => g.items)
              .join(", ")}
          </p>
        ))}
      </div>
    </>
  );
}