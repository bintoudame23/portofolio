"use client";

import React from "react";

export default function Home() {
  return (
   <main
  id="cv-content"
  className="min-h-screen bg-gray-100 text-gray-900 font-sans relative px-6 py-12"
>

      <div className="max-w-6xl mx-auto">

        {/* NAVBAR */}
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 space-y-4 md:space-y-0">
          <h1 className="text-3xl font-bold text-black">Fatou Bintou SYLLA</h1>
          <div className="text-gray-600 text-sm space-y-1">
            {/* <p>Fatou Bintou SYLLA</p> */}
            <p>📍 Dakar, Sénégal</p>
            <p>📧 fasylla2003@gmail.com</p>
             <p>📞 77 877 33 60 </p>
            <p>🚗 Permis B</p>
          </div>
       <a
  href="/CV_Fatou_Bintou_SYLLA.pdf"
  download
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all"
>
  Télécharger CV
</a>
        </nav>
        {/* HERO */}
        <section className="mb-32 max-w-4xl">
          <h2 className="text-6xl font-extrabold leading-tight mb-6 text-black">
            AI & Big Data Engineer <br /> & Future MBA
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Étudiante en Master 1 Intelligence Artificielle et Big Data et MBA, spécialisée dans l’analyse de données et le développement de solutions intelligentes pour la prise de décision. Je combine expertise technique et vision stratégique business pour transformer les données en solutions à forte valeur ajoutée.
          </p>
        </section>

        {/* PROFIL */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-10 text-black">Profil</h2>
          <div className="bg-purple-50 hover:bg-purple-100 p-10 rounded-3xl border border-purple-200 text-gray-800 text-lg leading-relaxed shadow-sm transition-all transform hover:-translate-y-2 hover:shadow-lg">
            Je possède un profil hybride combinant compétences techniques en data/IA et vision stratégique business,
            me permettant de transformer les données en solutions à forte valeur ajoutée.
            Motivée par les défis technologiques, je souhaite évoluer dans des environnements innovants.
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-10 text-black">Compétences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["IA & Data", "Big Data", "Développement Web"].map((title, index) => (
              <div
                key={index}
                className="bg-white hover:bg-purple-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2  "
              >
                <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
                <p className="text-black leading-relaxed">
                  {title === "IA & Data" &&
                    `Python, Java, C, JavaScript/TypeScript, PHP 
                    Analyse exploratoire des données (EDA), Machine Learning (régression, classification, clustering) 
                    Pandas, NumPy, Matplotlib, Seaborn`}
                  {title === "Big Data" &&
                    `Concepts Big Data : Volume, Vélocité, Variété 
                    Hadoop, Spark, Data Pipeline, Traitement de données massives`}
                  {title === "Développement Web" &&
                    `Frontend : HTML, CSS, JavaScript, React.js 
                    Backend : PHP/Laravel, API REST 
                    Bases de données : MySQL, PostgreSQL, MongoDB`}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPÉRIENCES */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-10 text-black">Expériences Professionnelles</h2>
          <div className="space-y-8">
            {[
              {
                title: "Développeuse Web – Sphynx Africa - ( juin 2025 - Avril 2026)",
                desc: "Conception et développement d’une plateforme e-commerce avec React.js et TypeScript. Intégration backend avec Appwrite, gestion des API REST (CRUD), optimisation UX et performance."
              },
              {
                title: "Stagiaire Développeuse Web – LONASE - (Mai 2024 - juin 2024)",
                desc: "Développement d’un système de gestion des tickets gagnants, automatisation des paiements, conception de base de données relationnelle et analyse des besoins fonctionnels."
              }
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-white hover:bg-purple-50 p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2  "
              >
                <h3 className="text-2xl font-semibold mb-2 text-black">{exp.title}</h3>
                <p className="text-gray-700 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FORMATION */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-10 text-black">Formation</h2>
          <div className="bg-purple-50 hover:bg-purple-100 p-10 rounded-3xl border border-purple-200 space-y-4 text-black text-lg shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2">
            <p>2026-2028 - Master – Administration des Affaires (MBA) – Umef Swiss University</p>
            <p>2025-2027 - Master – Intelligence Artificielle & Big Data (IABD) – Ecole Supérieure Polytechnique(ESP)</p>
            <p>2024-2025 - Licence en Génie Logiciel et Systeme d'information (GLSI) – Ecole Supérieure Polytechnique(ESP)</p>
            <p>2022-2024 - Diplôme Supérieur de Technologie – Ecole Supérieure Polytechnique (ESP)</p>
            <p>2021-2022 - Baccalauréat Série S2 - Lycée Seydina Limamoulaye de Guediawaye</p>
          </div>
        </section>

        {/* AUTRES COMPÉTENCES */}
        <section className="mb-32 grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 hover:bg-purple-50 p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2 ">
            <h3 className="text-2xl font-semibold mb-4 text-black">Business & MBA</h3>
            <p className="text-gray-700 leading-relaxed">
              Gestion de projet Agile / Scrum <br />
              Analyse stratégique <br />
              Business Intelligence <br />
              Marketing digital <br />
              Gestion des organisations <br />
              Communication professionnelle
            </p>
          </div>
          <div className="bg-white hover:bg-purple-50 p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-black">Soft Skills & Langues</h3>
            <p className="text-gray-700 leading-relaxed">
              Esprit analytique, Travail en équipe <br />
              Adaptabilité, Organisation et rigueur <br />
              Français : Courant <br />
              Anglais : Intermédiaire
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-black text-sm py-10">
          ©️ 2026 Fatou Bintou SYLLA – AI & Big Data Engineer
        </footer>

      </div>
    </main>
  );
}