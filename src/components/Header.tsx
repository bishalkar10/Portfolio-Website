import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="container header-container">
        <a href="#" className="logo" aria-label="Gain Prasad Kar - Home">
          Bishal<span className="logo-accent">.</span>
        </a>

        <nav ref={navRef} className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/Portfolio-Website/documents/Gain Prasad Kar Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Resume
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
