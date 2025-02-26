const HeroBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    width="100%"
    height="100%"
    viewBox="0 0 1200 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid Pattern */}
    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />

    {/* Abstract Shapes */}
    <circle cx="200" cy="200" r="100" fill="url(#gradient1)" fillOpacity="0.4" />
    <circle cx="1000" cy="400" r="150" fill="url(#gradient2)" fillOpacity="0.4" />
    <path d="M600 100 Q 800 300 600 500" stroke="url(#gradient3)" strokeWidth="50" strokeLinecap="round" fillOpacity="0.4" />

    {/* Gradients */}
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="200" y2="200">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="gradient2" x1="900" y1="300" x2="1100" y2="500">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
      <linearGradient id="gradient3" x1="600" y1="100" x2="600" y2="500">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
  </svg>
);

export default HeroBackground; 