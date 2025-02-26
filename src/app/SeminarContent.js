"use client";
import { useState } from 'react';
import seminarData from './data/seminarData.json';
import HeroBackground from './components/HeroBackground';
import ResearchCenters from './components/ResearchCenters';
import Footer from './components/Footer';

const SeminarContent = () => {
  const [language, setLanguage] = useState('en');
  const content = seminarData[language] || {};

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-wider">DH.arc + DHLab</span>
            </div>
            <button 
              className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
            >
              {language === 'en' ? '🇮🇹 Italian' : '🇺🇸 English'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background pt-16 pb-32">
        <div className="absolute inset-0">
          <HeroBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/50" />
        </div>
        
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
            <div className="relative z-10 max-w-3xl">
              <h1 className="text-5xl font-bold tracking-wide leading-tight mb-8">
                {content.title || ''}
              </h1>
              <div className="flex items-center gap-4 text-xl tracking-wider text-primary mb-8">
                <span>{content.date || ''}</span>
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span>{content.location || ''}</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
                {content.description || ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Centers Component */}
      <ResearchCenters />
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SeminarContent;