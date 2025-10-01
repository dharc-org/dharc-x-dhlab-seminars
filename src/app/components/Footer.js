import React from "react";
import LogoCloud from './LogoCloud';
import { seminarData } from '../data/seminarData';

const Footer = ({ language = 'en' }) => {
  const content = seminarData[language] || seminarData['en'];
  const committeeMembers = [
    {
      name: "Andrea Schimmenti",
      affiliation: "University of Bologna",
      role: "Chair",
      isProfessor: false,
    },
    {
      name: "Erica Andreose",
      affiliation: "University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Maria Francesca Bocchi",
      affiliation: "University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Enrica Bruno",
      affiliation: "University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Tommaso Battisti",
      affiliation: "University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Remo Grillo",
      affiliation: "University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Matteo Guenci",
      affiliation: "University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Carlo Teo Pedretti",
      affiliation: "Sapienza University of Rome | University of Bologna",
      role: "Member",
      isProfessor: false,
    },
    {
      name: "Dr. Marieke Van Erp",
      affiliation: "KNAW Humanities Cluster",
      role: "Coordinator",
      isProfessor: true,
    },
    {
      name: "Prof. Francesca Tomasi",
      affiliation: "University of Bologna",
      role: "Chair and Supervisor",
      isProfessor: true,
    },
  ];

  return (
    // CAMBIATO: Sfondo ora usa bg-background. Rimosso text-gray-300 perché ereditato da body.
    <footer className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CAMBIATO: Colore del bordo ora usa la variabile border-border. */}
        <div className="border-b border-border pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 tracking-wide text-foreground">
            Organizing Committee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                // CAMBIATO: Ora tutte le card usano lo stesso sfondo e si differenziano per il bordo.
                className={`p-4 rounded-lg shadow-md bg-card-background border ${
                  member.isProfessor ? "border-primary" : "border-border"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    member.isProfessor ? "text-primary" : "text-foreground"
                  }`}
                >
                  {member.name}
                </h3>
                {/* CAMBIATO: Colore testo secondario ora usa text-foreground con opacità. */}
                <p className="text-foreground/70 text-sm">
                  {member.affiliation}
                </p>
                {/* CAMBIATO: Colore del ruolo per i professori ora usa text-foreground. */}
                <p
                  className={`text-xs mt-2 ${
                    member.isProfessor ? "text-foreground/80" : "text-primary"
                  }`}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Contact
            </h3>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:know.land.unibo@gmail.com"
                className="text-primary hover:underline"
              >
                know.land.unibo@gmail.com
              </a>
            </p>
            <p className="mb-2">
              For more information, visit{" "}
              <a
                href="https://dharc-org.github.io/boldh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Bologna DH ecosystem
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Venue
            </h3>
            <p>5th to 7th November 2025</p>
            <p>Aula Affreschi, Via Zamboni 34</p>
            <p>40126 Bologna, Italy</p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* == FUNDING ATTRIBUTION ========================================= */}
        {/* ================================================================ */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-foreground font-semibold">
              {content.footer.fundingText.split('Fondazione Carisbo')[0]}
              <span className="font-bold">Fondazione Carisbo</span>
              {content.footer.fundingText.split('Fondazione Carisbo')[1].split('Cultura e Rigenerazione 2025')[0]}
              <a
                href={content.footer.fundingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold ml-1"
              >
                Cultura e Rigenerazione 2025
              </a>
              {content.footer.fundingText.split('Cultura e Rigenerazione 2025')[1]}
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* == INIZIO SEZIONE LOGHI ======================================== */}
        {/* ================================================================ */}
        
        <div className="mt-8 pt-8 border-t border-border text-center">
            <LogoCloud />
        </div>
        
        {/* ================================================================ */}
        {/* == FINE SEZIONE LOGHI ========================================== */}
        {/* ================================================================ */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>
            © {new Date().getFullYear()} DH.arc & DHLab Seminar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
