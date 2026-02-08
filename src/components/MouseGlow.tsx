import { useEffect, useRef } from "react";
function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}

export default MouseGlow;
