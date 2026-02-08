import { useEffect, useRef } from 'react';

export function useReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed to keep it visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into view
      }
    );

    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll('[data-reveal]');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (container) {
        const elements = container.querySelectorAll('[data-reveal]');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return containerRef;
}
