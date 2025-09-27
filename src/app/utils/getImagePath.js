// Utility function to handle image paths with base path for GitHub Pages deployment
export function getImagePath(path) {
  // In production, prepend the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/dharc-x-dhlab-seminars' : '';
  return `${basePath}${path}`;
}
