const SectionTitle = ({ children, onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block border border-foreground rounded-full px-6 py-2 text-base font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="flex items-center gap-3">
        <span>{children}</span>
        {/* Aggiungiamo un'icona a freccia che ruota */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </button>
  );
};

export default SectionTitle;
