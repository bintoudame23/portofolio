
"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   CONFIGURATION
========================================================= */

const CV_PATH = "/CV_Fatou_Bintou_SYLLA.pdf";
const CV_FILENAME = "CV_Fatou_Bintou_SYLLA.pdf";

const EMAIL = "fasylla2003@gmail.com";
const PHONE = "+221 77 877 33 60";

/* =========================================================
   NAVIGATION
========================================================= */

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

/* =========================================================
   COMPÉTENCES
========================================================= */

const skills = [
  {
    title: "IA & Data",
    groups: [
      {
        label: "Langages",
        items: [
          "Python",
          "Java",
          "C",
          "JavaScript / TypeScript",
          "PHP",
        ],
      },
      {
        label: "Data Science",
        items: [
          "Analyse exploratoire (EDA)",
          "Machine Learning",
          "Régression",
          "Classification",
          "Clustering",
        ],
      },
      {
        label: "Librairies",
        items: [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
        ],
      },
    ],
  },

  {
    title: "Big Data",
    groups: [
      {
        label: "Concepts",
        items: [
          "Volume",
          "Vélocité",
          "Variété",
        ],
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
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "TypeScript",
        ],
      },
      {
        label: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "PHP",
          "Laravel",
          "API REST",
        ],
      },
      {
        label: "Bases de données",
        items: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
        ],
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
          "Gestion de projet",
          "Agile / Scrum",
          "Leadership",
          "Communication professionnelle",
          "Prise de décision",
          "Business Intelligence",
          "Transformation digitale",
        ],
      },
    ],
  },
];

/* =========================================================
   EXPÉRIENCES
========================================================= */

const experiences = [
  {
    role: "Développeuse Web",
    company: "Sphynx Africa",
    period: "Juin 2025 – Juin 2026",

    stack: [
      "React.js",
      "TypeScript",
      "Appwrite",
      "REST API",
      "Tailwind CSS",
      "Git / GitHub",
      "Clerk",
    ],

    summary:
      "Développement d’une plateforme e-commerce full-stack avec espace client et dashboard administrateur.",

    description:
      "Soma Luxury est une plateforme e-commerce full-stack pensée pour offrir une expérience d’achat moderne, intuitive et élégante. J’ai développé la solution de l’interface client au dashboard administrateur : catalogue produits, panier, commandes, gestion des produits et suivi des ventes. Le projet utilise React.js, TypeScript et Appwrite, avec intégration d’API REST, opérations CRUD et Clerk pour l’authentification et la sécurisation de l’espace administrateur. Une attention particulière a été portée à la performance, la responsivité et l’expérience utilisateur.",
  },

  {
    role: "Stagiaire en Développement Web – Projet de fin d’études",
    company: "Defar Sci",
    period: "Mai 2025 – Juin 2025",

    stack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
    ],

    summary:
      "Développement d’une application de gestion des demandes de support informatique.",

    description:
      "Ticket IT est une application web de gestion des demandes de support informatique développée dans le cadre de mon projet de fin d’études. J’ai conçu et développé la solution avec React et JavaScript, en intégrant un système de gestion des rôles pour les utilisateurs, techniciens et administrateurs. L’application permet également le suivi des tickets, les commentaires, la gestion des statuts ainsi qu’un tableau de bord statistique. Ce projet m’a permis de renforcer mes compétences en conception d’interfaces web, gestion des données, fonctionnalités métier et utilisation de Git et GitHub.",
  },

  {
    role: "Stagiaire Développeuse Web",
    company: "LONASE",
    period: "Mai 2024 – Juin 2024",

    stack: [
      "PHP",
      "HTML5",
      "CSS3",
      "MySQL",
      "MariaDB",
      "Git",
      "GitHub",
    ],

    summary:
      "Participation à la digitalisation du traitement des tickets gagnants.",

    description:
      "Automatisation Ticket Gagnant est une application web conçue pour digitaliser et sécuriser le traitement des tickets gagnants supérieurs à 1 000 000 FCFA. J’ai participé à l’analyse des besoins, à la conception UML et au développement de fonctionnalités permettant la soumission des demandes, la transmission des documents, le suivi de l’état des dossiers et la gestion administrative. Cette expérience m’a permis de travailler sur les bases de données, l’authentification, la validation des dossiers et l’amélioration des processus métier.",
  },
];

/* =========================================================
   FORMATION
========================================================= */

const formations = [
  {
    period: "2026 – 2028",
    title: "Master – Administration des Affaires (MBA)",
    school: "Swiss Umef University",
  },

  {
    period: "2025 – 2027",
    title: "Master – Intelligence Artificielle & Big Data (IABD)",
    school: "École Supérieure Polytechnique (ESP)",
  },

  {
    period: "2024 – 2025",
    title:
      "Licence – Génie Logiciel et Systèmes d’Information (GLSI)",
    school: "École Supérieure Polytechnique (ESP)",
  },

  {
    period: "2022 – 2024",
    title:
      "Licence 2 – Diplôme Supérieur de Technologie (DST)",
    school: "École Supérieure Polytechnique (ESP)",
  },

  {
    period: "2021 – 2022",
    title: "Baccalauréat Série S2",
    school:
      "Lycée d’excellence Seydina Limamoulaye de Guédiawaye",
  },
];

/* =========================================================
   SERVICES WEB
========================================================= */

const services = [
  {
    icon: "🌐",
    title: "Site web vitrine",
    desc:
      "Présentez votre activité avec un site moderne, rapide, professionnel et parfaitement adapté aux smartphones.",
  },

  {
    icon: "🛍️",
    title: "Site e-commerce",
    desc:
      "Catalogue produits, panier, commandes et espace administrateur pour gérer efficacement votre boutique.",
  },

  {
    icon: "🧩",
    title: "Application web sur mesure",
    desc:
      "Création d’applications adaptées à vos besoins : espaces utilisateurs, rôles, workflows et tableaux de bord.",
  },

  {
    icon: "📊",
    title: "Data & Intelligence Artificielle",
    desc:
      "Analyse de données et solutions basées sur le machine learning pour transformer les données en informations utiles.",
  },
];

/* =========================================================
   COMPOSANT TITRE
========================================================= */

function Head({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div
      className="mb-8 md:mb-10 rv"
      style={{ "--i": 0 } as React.CSSProperties}
    >
      <span
        className="block w-12 h-1 rounded-full mb-5"
        style={{
          background: "var(--acc)",
        }}
      />

      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none">
        {title}
      </h2>

      {sub && (
        <p className="muted mt-3 text-base md:text-lg max-w-2xl leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   PAGE PRINCIPALE
========================================================= */

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

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [toast, setToast] = useState("");

  /* =======================================================
     NOTIFICATION
  ======================================================= */

  const notify = useCallback((message: string) => {
    setToast(message);

    window.setTimeout(() => {
      setToast("");
    }, 2800);
  }, []);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const goTo = useCallback((index: number) => {
    const safeIndex = Math.max(
      0,
      Math.min(slides.length - 1, index)
    );

    const id = slides[safeIndex][1];

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  }, []);

  /* =======================================================
     OBSERVER + PROGRESSION
  ======================================================= */

  useEffect(() => {
    const root = scroller.current;

    if (!root) return;

    const sections = slides
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slides.findIndex(
              ([, id]) => id === entry.target.id
            );

            if (index !== -1) {
              setActive(index);
            }
          }
        });
      },
      {
        root,
        threshold: 0.35,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    const handleScroll = () => {
      const maxScroll =
        root.scrollHeight - root.clientHeight;

      const value =
        maxScroll > 0
          ? (root.scrollTop / maxScroll) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, value)));
    };

    root.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      observer.disconnect();
      root.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     NAVIGATION CLAVIER
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(
          target.tagName
        )
      ) {
        return;
      }

      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown"
      ) {
        event.preventDefault();
        goTo(active + 1);
      }

      if (
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        event.preventDefault();
        goTo(active - 1);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [active, goTo]);

  /* =======================================================
     TÉLÉCHARGEMENT CV
  ======================================================= */

  const downloadCV = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const link = document.createElement("a");

    link.href = CV_PATH;
    link.download = CV_FILENAME;

    document.body.appendChild(link);
    link.click();
    link.remove();

    notify("Téléchargement du CV lancé");
  };

  /* =======================================================
     VALIDATION FORMULAIRE
  ======================================================= */

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      newErrors.name = "Indiquez votre nom.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim()
      )
    ) {
      newErrors.email = "Adresse email invalide.";
    }

    if (form.message.trim().length < 10) {
      newErrors.message =
        "Message trop court (10 caractères minimum).";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =======================================================
     EMAIL
  ======================================================= */

  const buildMailBody = () => {
    return `${form.message}

Nom : ${form.name}
Email : ${form.email}`;
  };

  const sendMail = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validate()) return;

    const subject = `Portfolio - ${form.name}`;

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMailBody())}`;

    window.location.href = mailto;

    notify("Ouverture de votre messagerie");
  };

  /* =======================================================
     COPIER EMAIL
  ======================================================= */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      notify("Email copié");
    } catch {
      notify(EMAIL);
    }
  };

  /* =======================================================
     DEMANDER DEVIS
  ======================================================= */

  const askQuote = (topic: string) => {
    setForm((current) => ({
      ...current,
      message: `Bonjour, je souhaite obtenir des informations concernant : ${topic}.`,
    }));

    goTo(slides.length - 1);
  };

  /* =======================================================
     BOUTON CV
  ======================================================= */

  const CvButton = ({
    className = "btn",
  }: {
    className?: string;
  }) => {
    return (
      <a
        href={CV_PATH}
        download={CV_FILENAME}
        onClick={downloadCV}
        className={className}
      >
        Télécharger mon CV
      </a>
    );
  };

  /* =======================================================
     ANIMATION
  ======================================================= */

  const S = (index: number) =>
    ({
      "--i": index,
    } as React.CSSProperties);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <style>{`
        /* ===================================================
           BASE
        =================================================== */

        .root {
          font-family: "Times New Roman", Times, serif;
          color: #1f2233;
          width: 100%;
          min-height: 100dvh;
        }

        .font-display {
          font-family: "Times New Roman", Times, serif;
          letter-spacing: 0.01em;
        }

        /* ===================================================
           SCROLLER
        =================================================== */

        .scroller {
          width: 100%;
          height: 100dvh;
          overflow-y: auto;
          overflow-x: hidden;

          scroll-behavior: smooth;

          background:
            linear-gradient(
              135deg,
              #fde7f1 0%,
              #fff6f2 45%,
              #fde9dc 100%
            );

          -webkit-overflow-scrolling: touch;
        }

        @media (min-width: 1024px) {
          .scroller {
            scroll-snap-type: y mandatory;
          }
        }

        /* ===================================================
           SECTIONS
        =================================================== */

        .slide {
          position: relative;

          min-height: 100dvh;

          display: flex;
          align-items: center;

          scroll-snap-align: start;

          padding:
            5.5rem
            1rem
            3rem;

          color: var(--text);
        }

        @media (min-width: 640px) {
          .slide {
            padding:
              6rem
              1.5rem
              3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .slide {
            padding:
              6rem
              2rem
              4rem;
          }
        }

        /* ===================================================
           THEME
        =================================================== */

        .lt {
          --text: #1f2233;
          --muted: #4b5563;
          --line: rgba(236, 72, 153, 0.2);
          --card: rgba(255, 255, 255, 0.78);
          --soft: rgba(236, 72, 153, 0.08);
          --acc: #ec4899;
        }

        .muted {
          color: var(--muted);
        }

        /* ===================================================
           ACCENT
        =================================================== */

        .acc {
          background:
            linear-gradient(
              90deg,
              #ec4899,
              #fb923c
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        /* ===================================================
           CARDS
        =================================================== */

        .card2 {
          background: var(--card);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          border: 1px solid rgba(255,255,255,0.9);

          border-radius: 1.5rem;

          box-shadow:
            0 10px 30px rgba(236,72,153,0.10);
        }

        /* ===================================================
           CHIPS
        =================================================== */

        .chip {
          display: inline-flex;
          align-items: center;

          background: rgba(255,255,255,0.85);

          border: 1px solid var(--line);

          color: var(--text);

          border-radius: 999px;

          padding: 0.4rem 0.9rem;

          font-size: 0.9rem;

          max-width: 100%;
        }

        /* ===================================================
           BUTTONS
        =================================================== */

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 44px;

          text-align: center;

          padding:
            0.85rem
            1.5rem;

          border-radius: 1rem;

          font-weight: 600;

          background:
            linear-gradient(
              90deg,
              #ec4899,
              #fb923c
            );

          color: #fff;

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(236,72,153,0.3);
        }

        .btn-o {
          background: #fff;
          color: var(--text);
          border: 1px solid var(--line);
        }

        /* ===================================================
           FORM
        =================================================== */

        .field {
          width: 100%;

          padding: 0.9rem 1rem;

          border-radius: 0.9rem;

          background: #fff;

          border:
            1px solid
            var(--line);

          color: var(--text);

          font-family: inherit;

          font-size: 16px;

          resize: vertical;
        }

        .field:focus {
          outline:
            2px solid
            #ec4899;

          outline-offset: 1px;
        }

        /* ===================================================
           HOVER
        =================================================== */

        .hov {
          transition:
            transform 0.25s,
            box-shadow 0.25s;
        }

        @media (hover: hover) {
          .hov:hover {
            transform: translateY(-5px);

            box-shadow:
              0 18px 40px
              rgba(236,72,153,0.2);
          }
        }

        /* ===================================================
           ANIMATION
        =================================================== */

        .rv {
          opacity: 0;

          transform:
            translateY(36px);

          transition:
            opacity 0.7s ease,
            transform
              0.7s
              cubic-bezier(.2,.8,.2,1);

          transition-delay:
            calc(var(--i, 0) * 90ms);
        }

        .slide.on .rv {
          opacity: 1;
          transform: none;
        }

        /* ===================================================
           FOCUS
        =================================================== */

        a:focus-visible,
        button:focus-visible {
          outline:
            2px solid
            #ec4899;

          outline-offset: 3px;
        }

        /* ===================================================
           CV IMPRESSION
        =================================================== */

        .print-cv {
          display: none;
        }

        @media print {
          .root {
            display: none !important;
          }

          .print-cv {
            display: block !important;
            color: #111;
          }
        }

        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 639px) {
          .slide {
            align-items: flex-start;
          }

          .rv {
            transform:
              translateY(20px);
          }

          .card2 {
            border-radius: 1.15rem;
          }
        }

        /* ===================================================
           ACCESSIBILITÉ
        =================================================== */

        @media (prefers-reduced-motion: reduce) {
          .rv {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .scroller {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <div className="root relative">
        {/* =================================================
            HEADER
        ================================================= */}

        <header
          className="
            fixed
            top-0
            left-0
            right-0
            z-50
            bg-white/80
            backdrop-blur-md
            border-b
            border-white
          "
        >
          <div
            className="
              mx-auto
              max-w-6xl
              flex
              items-center
              justify-between
              px-4
              sm:px-6
              h-14
            "
          >
            {/* LOGO */}

            <button
              onClick={() => goTo(0)}
              className="
                font-bold
                text-[11px]
                sm:text-[13px]
                tracking-[0.12em]
                sm:tracking-[0.18em]
                uppercase
                text-neutral-900
                text-left
                max-w-[220px]
              "
            >
              Fatou Bintou Sylla
              <span className="hidden sm:inline">
                {" "}Portfolio
              </span>
            </button>

            {/* DESKTOP NAVIGATION */}

            <nav
              className="
                hidden
                lg:flex
                gap-7
                text-sm
              "
              aria-label="Sections"
            >
              {headerNav.map(([label, id]) => {
                const index = slides.findIndex(
                  ([, sectionId]) =>
                    sectionId === id
                );

                const isActive =
                  slides[active]?.[1] === id;

                return (
                  <button
                    key={id}
                    onClick={() => goTo(index)}
                    aria-current={
                      isActive
                        ? "page"
                        : undefined
                    }
                    className={`
                      pb-0.5
                      border-b-2
                      transition
                      ${
                        isActive
                          ? "border-pink-400 text-neutral-900"
                          : "border-transparent text-neutral-600 hover:text-neutral-900"
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>

            {/* MOBILE MENU */}

            <button
              className="
                lg:hidden
                text-2xl
                w-10
                h-10
                flex
                items-center
                justify-center
              "
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* MOBILE NAV */}

          {menuOpen && (
            <div
              className="
                lg:hidden
                bg-white
                border-t
                border-neutral-200
                px-4
                py-3
                shadow-lg
              "
            >
              {slides.map(([label], index) => (
                <button
                  key={label}
                  onClick={() => goTo(index)}
                  className="
                    block
                    w-full
                    text-left
                    px-3
                    py-3
                    text-neutral-800
                    hover:bg-pink-50
                    rounded-lg
                  "
                >
                  {label}
                </button>
              ))}

              <CvButton
                className="
                  btn
                  w-full
                  mt-2
                "
              />
            </div>
          )}

          {/* PROGRESS BAR */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-0.5
            "
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg,#ec4899,#fb923c)",
            }}
          />
        </header>

        {/* =================================================
            DOTS
        ================================================= */}

        <nav
          className="
            hidden
            lg:flex
            fixed
            right-5
            top-1/2
            -translate-y-1/2
            z-40
            flex-col
            gap-3
          "
          aria-label="Navigation des sections"
        >
          {slides.map(([label], index) => (
            <button
              key={label}
              onClick={() => goTo(index)}
              aria-label={label}
              title={label}
              className={`
                w-3
                h-3
                rounded-full
                border-2
                transition
                ${
                  active === index
                    ? "bg-pink-500 border-pink-500 scale-125"
                    : "border-neutral-400 bg-transparent hover:border-pink-400"
                }
              `}
            />
          ))}
        </nav>

        {/* =================================================
            SCROLLER
        ================================================= */}

        <div
          ref={scroller}
          className="scroller"
        >
          {/* =================================================
              ACCUEIL
          ================================================= */}

          <section
            id="hero"
            className={`
              slide
              lt
              ${active === 0 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-6xl
                w-full
                grid
                lg:grid-cols-[1.2fr_1fr]
                gap-10
                lg:gap-12
                items-center
              "
            >
              {/* TEXTE */}

              <div
                className="
                  order-2
                  lg:order-1
                "
              >
                <span
                  className="
                    rv
                    inline-block
                    px-4
                    py-2
                    text-xs
                    sm:text-sm
                    uppercase
                    bg-white
                    rounded-full
                    shadow-sm
                  "
                  style={S(0)}
                >
                  AI &amp; Big Data Engineer
                  <span className="hidden sm:inline">
                    {" "} &amp; Future MBA
                  </span>
                </span>

                <h1
                  className="
                    rv
                    font-display
                    font-bold
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    leading-[1.05]
                    mt-4
                  "
                  style={S(1)}
                >
                  Fatou Bintou

                  <span className="block acc">
                    SYLLA
                  </span>
                </h1>

                <p
                  className="
                    rv
                    muted
                    text-base
                    sm:text-lg
                    max-w-lg
                    mt-6
                    leading-relaxed
                  "
                  style={S(2)}
                >
                  AI &amp; Big Data Engineer spécialisée
                  dans les systèmes intelligents,
                  la Data Science et le développement
                  de solutions digitales modernes.
                </p>

                <div
                  className="
                    rv
                    flex
                    flex-wrap
                    gap-x-4
                    gap-y-2
                    mt-6
                    text-sm
                    sm:text-base
                  "
                  style={S(3)}
                >
                  <span>
                    📍 Dakar, Sénégal
                  </span>

                  <span>
                    📧 {EMAIL}
                  </span>

                  <span>
                    📞 {PHONE}
                  </span>

                  <span>
                    🚗 Permis B
                  </span>
                </div>

                <div
                  className="rv mt-7"
                  style={S(4)}
                >
                  <CvButton />
                </div>
              </div>

              {/* PHOTO */}

              <div
                className="
                  rv
                  order-1
                  lg:order-2
                  flex
                  justify-center
                "
                style={S(2)}
              >
                <img
                  src="/IMG_2687.jpeg"
                  alt="Fatou Bintou SYLLA"
                  className="
                    w-52
                    h-52
                    sm:w-72
                    sm:h-72
                    lg:w-[22rem]
                    lg:h-[22rem]
                    rounded-full
                    object-cover
                    border-4
                    border-white
                  "
                  style={{
                    boxShadow:
                      "0 25px 70px rgba(236,72,153,.28)",
                  }}
                />
              </div>
            </div>
          </section>

          {/* =================================================
              À PROPOS
          ================================================= */}

          <section
            id="about"
            className={`
              slide
              lt
              ${active === 1 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-6xl
                w-full
              "
            >
              <Head
                title="À propos"
                sub="L’intelligence artificielle au service de l’innovation et de la performance."
              />

              <div className="w-full">
                <div
                  className="
                    rv
                    card2
                    w-full
                    p-6
                    sm:p-8
                    md:p-10
                    space-y-5
                  "
                  style={S(1)}
                >
                  <p className="muted leading-relaxed">
                    Titulaire d’une Licence en Génie
                    Logiciel et Systèmes d’Information,
                    je poursuis un Master 1 en Intelligence
                    Artificielle et Big Data ainsi qu’un
                    MBA en Administration des Affaires.
                    Mon ambition est de créer des solutions
                    technologiques innovantes qui transforment
                    les données en opportunités et répondent
                    aux enjeux réels des entreprises.
                  </p>

                  <p className="muted leading-relaxed">
                    Passionnée par la Data Science et
                    l’intelligence artificielle, je m’intéresse
                    particulièrement au machine learning,
                    au deep learning et aux systèmes intelligents.
                    Mon objectif est de concevoir des solutions
                    capables d’analyser les données, d’automatiser
                    certains processus et d’éclairer la prise
                    de décision.
                  </p>

                  <p className="muted leading-relaxed">
                    En parallèle, mon expertise en développement
                    web Full-Stack me permet de donner vie aux
                    idées : de la conception d’interfaces modernes
                    au développement d’API et de fonctionnalités
                    backend, je transforme les besoins en
                    applications web fonctionnelles, intuitives
                    et évolutives.
                  </p>

                  <p className="muted leading-relaxed">
                    Mon parcours en management des affaires
                    complète cette approche technique par une
                    vision stratégique. Au-delà du code et des
                    algorithmes, je m’intéresse à la manière dont
                    la technologie peut soutenir la croissance,
                    optimiser les opérations et accompagner
                    la transformation digitale des entreprises.
                  </p>

                  <p className="muted leading-relaxed">
                    Aujourd’hui, je souhaite rejoindre une équipe
                    ambitieuse où je pourrai mettre mes compétences
                    au service de projets innovants, continuer
                    à apprendre et contribuer à la création de
                    solutions à forte valeur ajoutée.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              COMPÉTENCES
          ================================================= */}

          <section
            id="skills"
            className={`
              slide
              lt
              ${active === 2 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-6xl
                w-full
              "
            >
              <Head
                title="Compétences"
                sub="Un profil hybride combinant IA, Data, développement web et management."
              />

              <div
                className="
                  rv
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  mb-6
                "
                style={S(1)}
              >
                {skills.map((skill, index) => (
                  <button
                    key={skill.title}
                    onClick={() =>
                      setTab(index)
                    }
                    aria-pressed={
                      tab === index
                    }
                    className={`
                      px-4
                      sm:px-5
                      py-2.5
                      rounded-full
                      font-semibold
                      text-sm
                      sm:text-base
                      transition
                      ${
                        tab === index
                          ? "btn"
                          : "card2 hover:opacity-70"
                      }
                    `}
                  >
                    {skill.title}
                  </button>
                ))}
              </div>

              <div
                className="
                  rv
                  card2
                  p-6
                  sm:p-8
                  md:p-10
                  space-y-6
                  min-h-[16rem]
                "
                style={S(2)}
              >
                {skills[tab].groups.map(
                  (group) => (
                    <div key={group.label}>
                      <p
                        className="
                          text-sm
                          font-semibold
                          acc
                          mb-3
                        "
                      >
                        {group.label}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map(
                          (item) => (
                            <span
                              key={item}
                              className="chip"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* =================================================
              EXPÉRIENCES
          ================================================= */}

          <section
            id="projects"
            className={`
              slide
              lt
              ${active === 3 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-6xl
                w-full
              "
            >
              <Head
                title="Expériences professionnelles"
                sub="Des expériences en développement web et en conception de solutions digitales."
              />

              <div className="space-y-4">
                {experiences.map(
                  (experience, index) => (
                    <article
                      key={experience.company}
                      className="
                        rv
                        card2
                        p-5
                        sm:p-6
                        md:p-7
                      "
                      style={S(index + 1)}
                    >
                      <button
                        onClick={() =>
                          setOpen(
                            open === index
                              ? null
                              : index
                          )
                        }
                        aria-expanded={
                          open === index
                        }
                        className="
                          w-full
                          text-left
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                      >
                        <div className="min-w-0">
                          <span className="chip !text-xs">
                            {experience.period}
                          </span>

                          <h3
                            className="
                              font-display
                              text-xl
                              sm:text-2xl
                              md:text-3xl
                              font-extrabold
                              mt-3
                            "
                          >
                            {experience.company}
                          </h3>

                          <h4 className="acc font-bold mt-1">
                            {experience.role}
                          </h4>

                          {open !== index && (
                            <p
                              className="
                                muted
                                mt-2
                                text-sm
                              "
                            >
                              {experience.summary}
                            </p>
                          )}
                        </div>

                        <span
                          className={`
                            text-2xl
                            transition-transform
                            shrink-0
                            ${
                              open === index
                                ? "rotate-45"
                                : ""
                            }
                          `}
                        >
                          +
                        </span>
                      </button>

                      {open === index && (
                        <div className="mt-5">
                          <p
                            className="
                              muted
                              leading-relaxed
                              text-sm
                              md:text-base
                            "
                          >
                            {experience.description}
                          </p>

                          <div
                            className="
                              flex
                              flex-wrap
                              gap-2
                              mt-4
                            "
                          >
                            {experience.stack.map(
                              (item) => (
                                <span
                                  key={item}
                                  className="
                                    chip
                                    !text-xs
                                  "
                                >
                                  {item}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </article>
                  )
                )}
              </div>
            </div>
          </section>

          {/* =================================================
              FORMATION
          ================================================= */}

          <section
            id="formation"
            className={`
              slide
              lt
              ${active === 4 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-4xl
                w-full
              "
            >
              <Head title="Formation" />

              <div
                className="
                  relative
                  border-l-2
                  ml-3
                  space-y-4
                "
                style={{
                  borderColor:
                    "var(--line)",
                }}
              >
                {formations.map(
                  (formation, index) => (
                    <div
                      key={formation.title}
                      className="
                        rv
                        relative
                        pl-7
                        sm:pl-8
                      "
                      style={S(index + 1)}
                    >
                      <span
                        className="
                          absolute
                          -left-[9px]
                          top-7
                          w-4
                          h-4
                          rounded-full
                        "
                        style={{
                          background:
                            "var(--acc)",
                        }}
                      />

                      <div
                        className="
                          card2
                          p-5
                          md:flex
                          md:items-center
                          md:gap-8
                        "
                      >
                        <p
                          className="
                            font-display
                            text-xl
                            font-extrabold
                            acc
                            md:w-40
                            shrink-0
                          "
                        >
                          {formation.period}
                        </p>

                        <div className="mt-2 md:mt-0">
                          <p className="font-semibold">
                            {formation.title}
                          </p>

                          <p className="muted text-sm mt-1">
                            {formation.school}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* =================================================
              CONCEPTION WEB
          ================================================= */}

          <section
            id="web"
            className={`
              slide
              lt
              ${active === 5 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-6xl
                w-full
              "
            >
              <Head
                title="Conception de sites web"
                sub="Du site vitrine à la boutique en ligne, je conçois des solutions web sur mesure."
              />

              <div
                className="
                  grid
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-5
                "
              >
                {services.map(
                  (service, index) => (
                    <div
                      key={service.title}
                      className="
                        rv
                        card2
                        hov
                        p-6
                        md:p-7
                        flex
                        flex-col
                      "
                      style={S(index + 1)}
                    >
                      <span
                        className="
                          font-display
                          text-sm
                          font-bold
                          acc
                          mb-3
                        "
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className="
                          chip
                          !rounded-2xl
                          w-14
                          h-14
                          flex
                          items-center
                          justify-center
                          text-2xl
                          !p-0
                        "
                      >
                        {service.icon}
                      </span>

                      <h3
                        className="
                          font-display
                          font-bold
                          text-xl
                          mt-5
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          muted
                          mt-2
                          text-sm
                          leading-relaxed
                          flex-1
                        "
                      >
                        {service.desc}
                      </p>

                      <button
                        onClick={() =>
                          askQuote(
                            service.title
                          )
                        }
                        className="
                          mt-5
                          text-sm
                          font-semibold
                          acc
                          hover:underline
                          text-left
                        "
                      >
                        Demander un devis →
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* =================================================
              CONTACT
          ================================================= */}

          <section
            id="contact"
            className={`
              slide
              lt
              ${active === 6 ? "on" : ""}
            `}
          >
            <div
              className="
                mx-auto
                max-w-6xl
                w-full
              "
            >
              <div
                className="
                  grid
                  md:grid-cols-2
                  gap-8
                  lg:gap-10
                  items-start
                "
              >
                {/* INFORMATIONS */}

                <div>
                  <div
                    className="rv"
                    style={S(0)}
                  >
                    <span
                      className="
                        block
                        w-12
                        h-1
                        rounded-full
                        mb-5
                      "
                      style={{
                        background:
                          "var(--acc)",
                      }}
                    />

                    <h2
                      className="
                        font-display
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        font-extrabold
                        leading-none
                      "
                    >
                      Travaillons ensemble
                    </h2>

                    <p
                      className="
                        muted
                        mt-4
                        text-base
                        sm:text-lg
                        max-w-xl
                        leading-relaxed
                      "
                    >
                      Un talent à recruter,
                      un site vitrine à créer,
                      une boutique en ligne
                      à lancer ou un projet
                      Data &amp; IA à concrétiser ?
                      Je suis ouverte aux opportunités
                      professionnelles et aux
                      collaborations.
                    </p>
                  </div>

                  <div
                    className="
                      rv
                      mt-8
                      flex
                      flex-col
                      gap-3
                      items-start
                    "
                    style={S(1)}
                  >
                    <button
                      onClick={copyEmail}
                      className="
                        font-semibold
                        underline
                        underline-offset-4
                        break-all
                        text-left
                      "
                      title="Copier l’email"
                    >
                      {EMAIL}
                      {" "}
                      <span className="text-sm">
                        (copier)
                      </span>
                    </button>

                    <a
                      href="https://github.com/bintoudame23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        font-semibold
                        underline
                        underline-offset-4
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/fatou-bintou-sylla-362985257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        font-semibold
                        underline
                        underline-offset-4
                      "
                    >
                      LinkedIn
                    </a>
                  </div>

                  <div
                    className="
                      rv
                      mt-8
                      space-y-1
                      text-sm
                      muted
                    "
                    style={S(2)}
                  >
                    <p>
                      📍 Dakar, Sénégal
                    </p>

                    <p>
                      📞 {PHONE}
                    </p>

                    <p>
                      ⏱️ Réponse par email sous 24 h
                    </p>
                  </div>

                  <div
                    className="rv mt-6"
                    style={S(3)}
                  >
                    <CvButton />
                  </div>
                </div>

                {/* FORMULAIRE */}

                <form
                  onSubmit={sendMail}
                  noValidate
                  className="
                    rv
                    card2
                    p-5
                    sm:p-6
                    md:p-8
                    space-y-4
                  "
                  style={S(2)}
                >
                  <div>
                    <input
                      aria-label="Nom"
                      aria-invalid={
                        !!errors.name
                      }
                      placeholder="Votre nom"
                      className="field"
                      value={form.name}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          name:
                            event.target.value,
                        })
                      }
                    />

                    {errors.name && (
                      <p
                        className="
                          text-rose-500
                          text-sm
                          mt-1
                        "
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      aria-label="Email"
                      aria-invalid={
                        !!errors.email
                      }
                      placeholder="Votre email"
                      className="field"
                      value={form.email}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          email:
                            event.target.value,
                        })
                      }
                    />

                    {errors.email && (
                      <p
                        className="
                          text-rose-500
                          text-sm
                          mt-1
                        "
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      aria-label="Message"
                      aria-invalid={
                        !!errors.message
                      }
                      placeholder="Votre message"
                      className="
                        field
                        min-h-[140px]
                      "
                      value={form.message}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          message:
                            event.target.value,
                        })
                      }
                    />

                    {errors.message && (
                      <p
                        className="
                          text-rose-500
                          text-sm
                          mt-1
                        "
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="
                      btn
                      w-full
                    "
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* FOOTER */}

              <footer
                className="
                  mt-12
                  border-t
                  border-white
                  pt-5
                  pb-2
                  text-center
                  text-xs
                  sm:text-sm
                  text-neutral-900
                "
              >
                © 2026 Fatou Bintou SYLLA
                {" – "}
                AI &amp; Big Data Engineer
                {" & "}
                Développeuse Web.
                Tous droits réservés.
              </footer>
            </div>
          </section>
        </div>

        {/* =================================================
            TOAST
        ================================================= */}

        {toast && (
          <div
            role="status"
            className="
              fixed
              bottom-5
              left-1/2
              -translate-x-1/2
              z-[110]
              px-5
              py-3
              rounded-full
              bg-black
              text-white
              shadow-2xl
              text-sm
              font-semibold
              max-w-[90vw]
              text-center
            "
          >
            {toast}
          </div>
        )}
      </div>

      {/* =====================================================
          VERSION IMPRIMABLE
      ===================================================== */}

      <div
        className="
          print-cv
          p-10
          text-sm
          leading-relaxed
        "
        style={{
          fontFamily:
            "system-ui, sans-serif",
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
          AI &amp; Big Data Engineer ·
          Développeuse Web · Future MBA
        </p>

        <p>
          Dakar, Sénégal | {EMAIL} | {PHONE}
          {" | "}Permis B
        </p>

        <h2
          style={{
            fontWeight: 700,
            marginTop: 18,
            borderBottom:
              "1px solid #999",
          }}
        >
          Expériences
        </h2>

        {experiences.map((experience) => (
          <div
            key={experience.company}
            style={{
              marginTop: 8,
            }}
          >
            <b>
              {experience.company}
              {" – "}
              {experience.role}
              {" ("}
              {experience.period}
              {")"}
            </b>

            <div>
              {experience.stack.join(
                ", "
              )}
            </div>

            <div>
              {experience.description}
            </div>
          </div>
        ))}

        <h2
          style={{
            fontWeight: 700,
            marginTop: 18,
            borderBottom:
              "1px solid #999",
          }}
        >
          Formation
        </h2>

        {formations.map((formation) => (
          <p key={formation.title}>
            {formation.period}
            {" – "}
            {formation.title}
            {", "}
            {formation.school}
          </p>
        ))}

        <h2
          style={{
            fontWeight: 700,
            marginTop: 18,
            borderBottom:
              "1px solid #999",
          }}
        >
          Compétences
        </h2>

        {skills.map((skill) => (
          <p key={skill.title}>
            <b>
              {skill.title} :
            </b>{" "}
            {skill.groups
              .flatMap(
                (group) => group.items
              )
              .join(", ")}
          </p>
        ))}
      </div>
    </>
  );
}
