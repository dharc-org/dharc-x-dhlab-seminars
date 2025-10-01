// src/app/components/About.js
import SectionTitle from './SectionTitle';

const About = ({ about }) => {
  if (!about || !about.title) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

        <div className="space-y-6 text-xl text-foreground/90 leading-relaxed">
          {about.description.map((paragraph, pIndex) => (
            <p key={pIndex}>
              {/* Se il paragrafo è un array, mappa i pezzi. Altrimenti, stampa la stringa. */}
              {Array.isArray(paragraph)
                ? paragraph.map((chunk, cIndex) => {
                    const classNames = (chunk.styles || []).join(" ");
                    
                    // Se c'è un link (href), crea un tag <a>
                    if (chunk.href) {
                      return (
                        <a
                          key={cIndex}
                          href={chunk.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${classNames} text-primary hover:underline`}
                        >
                          {chunk.text}
                        </a>
                      );
                    }
                    
                    // Altrimenti, crea un semplice <span>
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
    </section>
  );
};

export default About;