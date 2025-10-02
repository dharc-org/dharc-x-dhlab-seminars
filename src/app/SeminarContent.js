"use client";
import { useState } from "react";
import Image from "next/image";
import { seminarData } from "./data/seminarData.js";
import RegistrationCTA from "./components/RegistrationCTA.js";
import HeroBackground from "./components/HeroBackground";
import ResearchCenters from "./components/ResearchCenters";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import { getImagePath } from "./utils/getImagePath";
import About from "./components/About.js";
import SectionTitle from "./components/SectionTitle.js";

const SeminarContent = () => {
  const [language, setLanguage] = useState("en");
  const content = seminarData[language] || {};
  const descriptionText = content.subtitle || "";

  const [openSections, setOpenSections] = useState({
    program: true,
    about: true,
    researchCenters: true,
    committee: true
  });

  const handleToggleSection = (sectionName) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <img
                src={getImagePath("/images/dhlandscapes_logo.svg")}
                alt="DH Landscapes Logo"
                className="h-8 w-auto"
              />
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#program"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Program
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#research-centers"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Research Centers
                </a>
                <a
                  href="#committee"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Committee
                </a>
              </div>
            </div>
            <button
              className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setLanguage(language === "en" ? "it" : "en")}
            >
              {language === "en" ? "🇮🇹 Italian" : "🇺🇸 English"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background pt-16 pb-16">
        <div className="absolute inset-0">
          {/* ===== INIZIO MODIFICA ===== */}
          <img
            src={getImagePath("/images/header_bg.png")}
            alt="Abstract background image for the seminar"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          {/* ===== FINE MODIFICA ===== */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/50" />
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
            <div className="relative z-10 max-w-3xl">
              <img
                src={getImagePath("/images/dhlandscapes_logo.svg")}
                alt="DH Landscapes Logo"
                className="h-16 w-auto mb-6"
              />
              <h1 className="text-5xl font-bold tracking-wide leading-tight mb-2">
                {content.title || ""}
              </h1>

              {content.subtitle && (
                <h2 className="text-3xl md:text-4xl mt-0 mb-8 tracking-wide leading-tight">
                  {content.subtitle.map((part, index) => (
                    <span key={index} className={(part.styles || []).join(" ")}>
                      {part.text}
                    </span>
                  ))}
                </h2>
              )}

              <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 text-base mb-8">
                {/* Pillola per la Data */}
                <div className="bg-primary text-white rounded-full px-4 py-1 font-bold tracking-wider">
                  <span>{content.date || ""}</span>
                </div>

                {/* Punto di Separazione */}
                <span className="w-2 h-2 rounded-full bg-primary"></span>

                {/* Pillola per la Location */}
                <div className="bg-primary text-white rounded-full px-4 py-1 font-bold tracking-wider">
                  <span>{content.location || ""}</span>
                </div>
              </div>
              <div className="space-y-4 text-xl text-foreground/90 leading-relaxed">
                {content.introductoryText &&
                  content.introductoryText.map((paragraph, pIndex) => (
                    <p key={pIndex}>
                      {Array.isArray(paragraph)
                        ? paragraph.map((chunk, cIndex) => {
                            const classNames = (chunk.styles || []).join(" ");

                            if (chunk.href) {
                              return (
                                <a
                                  key={cIndex}
                                  href={chunk.href}
                                  className={`${classNames} text-primary hover:underline`}
                                >
                                  {chunk.text}
                                </a>
                              );
                            }

                            return (
                              <span key={cIndex} className={classNames}>
                                {chunk.text}
                              </span>
                            );
                          })
                        : paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <RegistrationCTA registration={content.registration} />

      {/* Schedule Component */}

      <section id="program" className="py-4 md:py-6 bg-background">
        <div className="text-center mb-6">
          <SectionTitle 
            onClick={() => handleToggleSection('program')}
            isOpen={openSections.program}
          >
            {content.scheduleLabels.title || 'Program'}
          </SectionTitle>
        </div>
        
        {/* Il componente Schedule viene mostrato solo se openSections.program è true */}
        {openSections.program && (
          <Schedule
            schedule={content.schedule || []}
            labels={content.scheduleLabels || {}}
          />
        )}
      </section>

      {/* --- SEZIONE ABOUT --- */}
      <section id="about" className="py-4 md:py-6 bg-background border-t border-border">
        <div className="text-center mb-6">
          <SectionTitle 
            onClick={() => handleToggleSection('about')}
            isOpen={openSections.about}
          >
            {content.about.title || 'About'}
          </SectionTitle>
        </div>

        {/* Il componente About viene mostrato solo se openSections.about è true */}
        {openSections.about && (
          <About about={content.about} />
        )}
      </section>

      {/* Research Centers Section */}
      <section id="research-centers" className="py-4 md:py-6 bg-background border-t border-border">
        <div className="text-center mb-6">
          <SectionTitle 
            onClick={() => handleToggleSection('researchCenters')}
            isOpen={openSections.researchCenters}
          >
            Research Centers
          </SectionTitle>
        </div>
        
        {openSections.researchCenters && (
          <ResearchCenters />
        )}
      </section>

      {/* Organizing Committee Section */}
      <section id="committee" className="py-4 md:py-6 bg-background border-t border-border">
        <div className="text-center mb-6">
          <SectionTitle 
            onClick={() => handleToggleSection('committee')}
            isOpen={openSections.committee}
          >
            Organizing Committee
          </SectionTitle>
        </div>
        
        {openSections.committee && (
          <Footer language={language} />
        )}
      </section>
    </div>
  );
};

export default SeminarContent;
