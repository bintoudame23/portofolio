"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // ✅ DOWNLOAD CV
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Fatou_Bintou_SYLLA.pdf";
    link.download = "CV_Fatou_Bintou_SYLLA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main
      id="site-content"
      className="min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth bg-gradient-to-br from-[#fff7f5] via-[#fff1e6] to-[#fef3ff] text-gray-900 font-sans"
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
          <h1 className="font-bold tracking-widest text-sm">
            FATOU BINTOU SYLLA PORTFOLIO
          </h1>

<nav className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-600">            {[
              ["Home", "hero"],
              ["About", "about"],
              ["Skills", "skills"],
              ["Experiences", "projects"],
              ["Formation", "Formation"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-black transition"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <div className="space-y-6">
            <span className="px-4 py-2 text-s bg-white shadow rounded-full">
              AI & BIG DATA ENGINEER & FUTURE MBA
            </span>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
              Fatou Bintou
              <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                SYLLA
              </span>
            </h1>

            <p className="text-gray-600 text-lg">
              AI & Big Data Engineer spécialisée dans les systèmes intelligents
              et les architectures data modernes.
            </p>

            <div className="flex gap-4 flex-wrap">
              <p>📍 Dakar, Sénégal</p>
              <p>📧 fasylla2003@gmail.com</p>
              <p>📞 77 877 33 60</p>
              <p>🚗 Permis B</p>

              <button
                onClick={downloadCV}
                className="no-print px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:scale-105 transition"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group w-[250px] h-[250px] md:w-[360px] md:h-[360px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 via-orange-200 to-rose-300 blur-2xl opacity-50 group-hover:opacity-70 transition" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition">
                <img
                  src="/IMG_2687.jpeg"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Fatou Bintou Sylla"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-4xl bg-white rounded-3xl shadow-xl p-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Étudiante en Master 1 Intelligence Artificielle et Big Data ainsi
            qu’en MBA, je développe un profil hybride alliant IA, data science,
            développement web et stratégie business. Spécialisée en machine
            learning et deep learning, je conçois des modèles et solutions
            intelligentes permettant d’exploiter les données pour améliorer la
            prise de décision et la performance des organisations.

            <br />
            En tant que développeuse web full-stack, je suis capable de créer
            des applications complètes intégrant des systèmes d’intelligence
            artificielle, du frontend au backend. Cette polyvalence me permet de
            transformer des besoins métiers en solutions digitales concrètes,
            performantes et évolutives.

            <br />
            Grâce à ma formation en MBA, j’adopte également une vision orientée
            business, assurant l’alignement entre innovation technologique et
            objectifs stratégiques.

            <br />
            Mon objectif est de concevoir des solutions intelligentes à fort
            impact en combinant IA, développement et stratégie.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              [
                "IA & Data",
                `Python, Java, C, JavaScript/TypeScript, PHP 
Analyse exploratoire des données (EDA), Machine Learning (régression, classification, clustering) 
Pandas, NumPy, Matplotlib, Seaborn`,
              ],

              [
                "Big Data",
                `Concepts Big Data : Volume, Vélocité, Variété 
Hadoop, Spark, Data Pipeline, Traitement de données massives`,
              ],

              [
                "Développement Web",
                `Frontend : HTML, CSS, JavaScript, React.js 
Backend : PHP/Laravel, API REST 
Bases de données : MySQL, PostgreSQL, MongoDB`,
              ],

              [
                "MBA & Business",
                `Analyse de marché, stratégie d’entreprise, gestion de projet (Agile/Scrum), leadership, communication professionnelle, prise de décision, business intelligence, digital transformation`,
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition"
              >
                <h3 className="font-bold text-pink-500">{t}</h3>

                <p className="text-sm md:text-xl text-gray-500 mt-2">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Expériences professionnelles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "Développeuse Web Sphynx Africa (juin 2025) - 1 an",
                "Conception et développement d’une plateforme e-commerce avec React.js et TypeScript. Intégration backend avec Appwrite, gestion des API REST (CRUD), optimisation UX et performance.",
              ],

              [
                "Stagiaire Développeuse Web – LONASE - (Mai 2024 - Juin 2024)",
                "Développement d’un système de gestion des tickets gagnants, automatisation des paiements, conception de base de données relationnelle et analyse des besoins fonctionnels.",
              ],
            ].map(([n, d]) => (
              <div
                key={n}
                className="bg-white rounded-2xl p-20 shadow hover:shadow-xl transition"
              >
                <h3 className="text-orange-500 text-xl font-bold">{n}</h3>

                <p className="text-gray-500 text-xl mt-5">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section
        id="Formation"
        className="min-h-screen flex items-center justify-center px-10 py-24"
      >
        <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-8 space-y-5">
          <h2 className="text-3xl font-bold mb-10">Formation</h2>

          <div className="bg-purple-50 hover:bg-purple-100 p-10 rounded-3xl border border-purple-200 space-y-4 text-black text-lg shadow-xl hover:shadow-lg transition-all transform hover:-translate-y-2">
            <p>
              2026-2028 - Master – Administration des Affaires (MBA) – Umef
              Swiss University
            </p>

            <p>
              2025-2027 - Master – Intelligence Artificielle & Big Data (IABD)
              – Ecole Supérieure Polytechnique(ESP)
            </p>

            <p>
              2024-2025 - Licence - Génie Logiciel et Systeme d'information
              (GLSI) – Ecole Supérieure Polytechnique(ESP)
            </p>

            <p>
              2022-2024 - licence 2 - Diplôme Supérieur de Technologie (DST) –
              Ecole Supérieure Polytechnique (ESP)
            </p>

            <p>
              2021-2022 - Baccalauréat Série S2 - Lycée Seydina Limamoulaye de
              Guediawaye
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 no-print"
      >
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-3xl font-bold text-center">Contact</h2>

          <input
            placeholder="Name"
            className="w-full p-3 rounded-xl border"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl border"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 h-32 rounded-xl border"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <a
            href={`mailto:fasylla2003@gmail.com?subject=Portfolio&body=${form.message}`}
            className="block text-center py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
          >
            Send Message
          </a>

          {/* FOOTER CONTACT AVEC LOGOS */}
          <div className="w-full bg-white/70 backdrop-blur-xl border-t border-gray-200 mt-6">
          <div className="flex justify-center gap-12 py-4">
  <a
    href="https://github.com/bintoudame23"
    target="_blank"
    className="flex items-center gap-2 text-gray-700 hover:text-black transition"
  >
    <FaGithub size={22} />
    GitHub
  </a>

  <a
    href="mailto:fasylla2003@gmail.com"
    className="flex items-center gap-2 text-gray-700 hover:text-black transition"
  >
    <FaEnvelope size={22} />
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/fatou-bintou-sylla-362985257"
    target="_blank"
    className="flex items-center gap-2 text-gray-700 hover:text-black transition"
  >
    <FaLinkedin size={22} />
    LinkedIn
  </a>
</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full text-center text-black text-sm py-4 bg-white/60 backdrop-blur-xl border-t border-gray-200">
        ©️ 2026 Fatou Bintou SYLLA – AI & Big Data Engineer & Dev web . All
        rights reserved.
      </footer>
    </main>
  );
}