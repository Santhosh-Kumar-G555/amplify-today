// hooks/useScrollProgress.ts
import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Prevent division by zero on initial render or very short pages
      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }
      
      // Normalize between 0 and 1
      setProgress(Math.min(Math.max(scrolled / maxScroll, 0), 1));
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Trigger once on mount to set initial state
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}
