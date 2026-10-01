"use client";

import React, { useState } from "react";

/* Votre CV doit se trouver dans le dossier /public */
const CV_PATH = "/CV_Fatou_Bintou_SYLLA.pdf";
const CV_FILENAME = "CV_Fatou_Bintou_SYLLA.pdf";

const navItems: [string, string][] = [
  ["Home", "hero"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experiences", "projects"],
  ["Formation", "Formation"],
  ["Contact", "contact"],
];

const infos = [
  { icon: "📍", text: "Dakar, Sénégal" },
  { icon: "📧", text: "fasylla2003@gmail.com" },
  { icon: "📞", text: "77 877 33 60" },
  { icon: "🚗", text: "Permis B" },
];

const skills = [
  {
    icon: "🤖",
    title: "IA & Data",
    groups: [
      {
        label: "Langages",
        items: ["Python", "Java", "C", "JavaScript/TypeScript", "PHP"],
      },
      {
        label: "Data Science",
        items: [
          "Analyse exploratoire des données (EDA)",
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
    icon: "🗄️",
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
    icon: "💻",
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
    icon: "📈",
    title: "MBA & Business",
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
    period: "Juin 2025 – aout 2026",
    stack:"Stack : React.js · TypeScript · Appwrite · REST API · Tailwind CSS · Git/GitHub · Clerk",
    description: " Soma Luxury est une plateforme e-commerce full-stack pensée pour offrir une expérience d’achat moderne, intuitive et élégante.J’ai développé l’ensemble de la solution, de l’interface client au dashboard administrateur : catalogue produits, panier, commandes, gestion des produits et suivi des ventes.Le projet utilise React.js, TypeScript et Appwrite, avec intégration d’API REST, opérations CRUD et Clerk pour l’authentification et la sécurisation de l’accès à l’espace administrateur. Une attention particulière a été portée à la performance, la responsivité et l’expérience utilisateur. "
 },
  {
    role: "Stagiaire en Développement Web | Stage à distance | Projet de fin d’études ",
    company: "Defar Sci",
    period: "Mai 2025 – Juin 2025",
    stack:"Stack : React.js · JavaScript · HTML5 · CSS3 · Git · GitHub",
    description:"Ticket IT est une application web de gestion des demandes de support informatique, développée dans le cadre de mon projet de fin d’études.J’ai conçu et développé la solution avec React et JavaScript, en intégrant un système de gestion des rôles (utilisateur, technicien et administrateur), le suivi des tickets par commentaires et un tableau de bord statistique.Le projet m’a permis de mettre en pratique la conception d’interfaces web, la gestion des données, le développement de fonctionnalités métier ainsi que l’utilisation de Git et GitHub pour le suivi du développement."
  } ,
  {
    role: "Stagiaire Développeuse Web",
    company: "LONASE",
    period: "Mai 2024 – Juin 2024",
    stack:"Stack : React.js · JavaScript · HTML5 · CSS3 · Git · GitHub",
    description:
      "Automatisation Ticket Gagnant — LONASE est une application web conçue pour digitaliser et sécuriser le processus de paiement des tickets gagnants supérieurs à 1 000 000 FCFA.J’ai participé à la conception et au développement de la solution permettant aux parieurs de soumettre leurs demandes de paiement, transmettre leurs documents, suivre l’état de leur dossier et recevoir des notifications, avec un espace de gestion destiné à l’administration.Le projet m’a permis de mettre en pratique l’analyse des besoins, la modélisation UML, le développement web et la gestion de bases de données, tout en travaillant sur des fonctionnalités d’authentification, de validation des dossiers, de notifications et de support client.",
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
    school: "Lycée d'excellenceSeydina Limamoulaye de Guediawaye",
  },
];

function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>
      {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-rose-500" />
    </div>
  );
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const mailtoHref = `mailto:fasylla2003@gmail.com?subject=${encodeURIComponent(
    `Portfolio${form.name ? " - " + form.name : ""}`
  )}&body=${encodeURIComponent(
    `${form.message}${form.email ? `\n\nMon email : ${form.email}` : ""}`
  )}`;

  return (
    <main
      id="site-content"
      className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth bg-gradient-to-br from-[#fff7f5] via-[#fff1e6] to-[#fef3ff] text-gray-900 font-sans"
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-200 blur-[160px] opacity-40 -top-40 -left-40 rounded-full" />
        <div className="absolute w-[600px] h-[600px] bg-orange-200 blur-[180px] opacity-30 bottom-[-200px] right-[-150px] rounded-full" />
        <div className="absolute w-[500px] h-[500px] bg-rose-200 blur-[160px] opacity-20 top-[40%] left-[60%] rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold tracking-widest text-xs sm:text-sm">
            FATOU BINTOU SYLLA PORTFOLIO
          </h1>

          <nav className="hidden md:flex gap-1 text-sm text-gray-600">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-4 py-2 rounded-full hover:text-black hover:bg-white transition"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 px-6 py-3">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left py-3 text-gray-700 border-b border-gray-100 last:border-0"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen snap-start flex items-center justify-center px-6 pt-28 pb-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          <div className="space-y-6 order-2 md:order-1">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-white shadow rounded-full">
              AI & BIG DATA ENGINEER & FUTURE MBA
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Fatou Bintou
              <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                SYLLA
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-lg">
              AI & Big Data Engineer spécialisée dans les systèmes intelligents
              et les architectures data modernes.
            </p>

            <div className="flex flex-wrap gap-2">
              {infos.map((i) => (
                <span
                  key={i.text}
                  className="px-4 py-2 text-sm bg-white/80 backdrop-blur rounded-full shadow-sm border border-white"
                >
                  {i.icon} {i.text}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap pt-2">
              <a
                href={CV_PATH}
                download={CV_FILENAME}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
              >
                ⬇ Download CV
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-3 rounded-xl bg-white text-gray-800 font-semibold shadow hover:scale-105 hover:shadow-lg transition"
              >
                Me contacter
              </button>
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 via-orange-200 to-rose-300 blur-2xl opacity-50 group-hover:opacity-70 transition" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition">
                <img
                  src="/IMG_2687.jpeg"
                  alt="Fatou Bintou SYLLA"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative min-h-screen snap-start flex items-center justify-center px-6 py-28"
      >
        <div className="max-w-4xl w-full">
          <SectionTitle>About Me</SectionTitle>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 space-y-5 border-l-8 border-pink-400">
            <p className="text-gray-600 text-lg leading-relaxed">
              Étudiante en Master 1 Intelligence Artificielle et Big Data ainsi
              qu’en MBA, je développe un profil hybride alliant IA, data
              science, développement web et stratégie business. Spécialisée en
              machine learning et deep learning, je conçois des modèles et
              solutions intelligentes permettant d’exploiter les données pour
              améliorer la prise de décision et la performance des
              organisations.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              En tant que développeuse web full-stack, je suis capable de créer
              des applications complètes intégrant des systèmes d’intelligence
              artificielle, du frontend au backend. Cette polyvalence me permet
              de transformer des besoins métiers en solutions digitales
              concrètes, performantes et évolutives.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Grâce à ma formation en MBA, j’adopte également une vision
              orientée business, assurant l’alignement entre innovation
              technologique et objectifs stratégiques.
            </p>

            <p className="text-lg leading-relaxed font-semibold bg-gradient-to-r from-pink-500 via-orange-400 to-rose-500 bg-clip-text text-transparent">
              Mon objectif est de concevoir des solutions intelligentes à fort
              impact en combinant IA, développement et stratégie.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative min-h-screen snap-start flex items-center justify-center px-6 py-28"
      >
        <div className="max-w-6xl w-full">
          <SectionTitle>Skills</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-50 text-xl">
                    {s.icon}
                  </span>
                  <h3 className="font-bold text-pink-500">{s.title}</h3>
                </div>

                <div className="space-y-4">
                  {s.groups.map((g) => (
                    <div key={g.label}>
                      <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                        {g.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 text-xs rounded-full bg-pink-50 text-gray-700 border border-pink-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section
        id="projects"
        className="relative min-h-screen snap-start flex items-center justify-center px-6 py-28"
      >
        <div className="max-w-5xl w-full">
          <SectionTitle>Expériences professionnelles</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((e) => (
              <div
                key={e.company}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition border-t-4 border-orange-400"
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs rounded-full bg-orange-50 text-orange-500 font-medium">
                  {e.period}
                </span>

                <h3 className="text-orange-500 text-xl font-bold">{e.role}</h3>
                <p className="text-gray-800 font-semibold mt-1">{e.company}</p>
                 <p className="text-gray-800 font-semibold mt-1">{e.stack}</p>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section
        id="Formation"
        className="relative min-h-screen snap-start flex items-center justify-center px-6 py-28"
      >
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-6 md:p-10">
          <SectionTitle>Formation</SectionTitle>

          <div className="relative border-l-2 border-purple-200 ml-3 space-y-6">
            {formations.map((f) => (
              <div key={f.title} className="relative pl-8">
                <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 border-2 border-white shadow" />

                <div className="bg-purple-50 hover:bg-purple-100 p-6 rounded-3xl border border-purple-200 text-black shadow-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-pink-500">
                    {f.period}
                  </span>
                  <p className="text-lg font-semibold mt-1">{f.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{f.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative min-h-screen snap-start flex items-center justify-center px-6 py-28 no-print"
      >
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 space-y-4">
          <SectionTitle subtitle="Une question, un projet ? Écrivez-moi.">
            Contact
          </SectionTitle>

          <input
            placeholder="Name"
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 h-32 rounded-xl border focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <a
            href={mailtoHref}
            className="block text-center py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
          >
            Send Message
          </a>

          {/* LIENS */}
          <div className="w-full border-t border-gray-200 mt-6 pt-2">
            <div className="flex flex-wrap justify-center gap-8 py-4">
              <a
                href="https://github.com/bintoudame23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.7 5.7.7 12.2c0 5.2 3.4 9.6 8.1 11.1.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.6 1.3-3.6-.1-.3-.6-1.7.1-3.5 0 0 1.1-.3 3.6 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.5-1.6 3.6-1.3 3.6-1.3.7 1.8.2 3.2.1 3.5.8 1 1.3 2.2 1.3 3.6 0 4.8-2.8 5.9-5.5 6.2z" />
                </svg>
                GitHub
              </a>

              <a
                href="mailto:fasylla2003@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/fatou-bintou-sylla-362985257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9 7H7v9h3v-9zm-1.5-4A1.5 1.5 0 1 0 7 7a1.5 1.5 0 0 0 1.5-1zM18 19v-5.3c0-2.2-1.2-3.2-2.8-3.2-1.2 0-2 .7-2.3 1.3V10H10v9h3v-5c0-1 .6-1.8 1.6-1.8 1 0 1.4.8 1.4 1.8V19h2z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER GLOBAL (VISIBLE PARTOUT) */}
      <footer className="fixed bottom-0 w-full text-center text-black text-xs sm:text-sm py-3 bg-white/60 backdrop-blur-xl border-t border-gray-200 z-40">
        ©️ 2026 Fatou Bintou SYLLA – AI & Big Data Engineer & Dev web . All
        rights reserved.
      </footer>
    </main>
  );
}