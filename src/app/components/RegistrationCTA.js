// src/app/components/RegistrationCTA.js

const RegistrationCTA = ({ registration }) => {
  if (!registration || !registration.doiUrl) {
    return null;
  }

  return (
    <section className="pt-4 pb-16 bg-background text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <a
          href={registration.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-primary text-white text-xl font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          {registration.buttonText}
        </a>

        {registration.doiLabel && (
          <p className="mt-4 text-sm text-foreground/70 font-mono">
            {registration.doiLabel}
          </p>
        )}

      </div>
    </section>
  );
};

export default RegistrationCTA;
