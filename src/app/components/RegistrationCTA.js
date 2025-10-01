// src/app/components/RegistrationCTA.js

const RegistrationCTA = ({ registration }) => {
  // Se non ci sono dati per la registrazione, non mostrare nulla
  if (!registration || !registration.formUrl) {
    return null;
  }

  return (
    <section className="pt-4 pb-16 bg-background text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bottone di Registrazione */}
        <a
          href={registration.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-primary text-white text-xl font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          {registration.buttonText}
        </a>

        {/* Nota sulla data di chiusura */}
        {registration.closingDate && (
          <p className="mt-4 text-sm text-foreground/70">
            {registration.closingDate}
          </p>
        )}
        
      </div>
    </section>
  );
};

export default RegistrationCTA;