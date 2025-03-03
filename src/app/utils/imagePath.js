/**
 * Get the correct path for images in both development and production
 * Using the static GitHub repository URL for production
 */
export function getImagePath(path) {
  // Remove any leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is
  // In production, use the full GitHub repository URL
  if (process.env.NODE_ENV === 'production') {
    // Using the exact GitHub raw content URL
    return `https://raw.githubusercontent.com/dharc-org/dharc-x-dhlab-seminars/refs/heads/main/public/${cleanPath}`;
  }
  
  // For local development
  return `/${cleanPath}`;
} 