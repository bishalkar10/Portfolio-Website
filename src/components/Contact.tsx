import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const contactLinks = [
  {
    label: "bishalkar10@gmail.com",
    href: "mailto:bishalkar10@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "linkedin.com/in/gain-kar",
    href: "https://linkedin.com/in/gain-kar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "github.com/bishalkar10",
    href: "https://github.com/bishalkar10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

function Contact() {
  const sectionRef = useReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:bishalkar10@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section ref={sectionRef} className="contact section" id="contact">
      <div className="container">
        <header className="section-header" data-reveal>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
        </header>

        <div className="contact-wrapper">
          <div className="contact-info" data-reveal="left">
            <h3>Have a project in mind?</h3>
            <p>
              I'm always open to discussing new opportunities, creative ideas,
              or the chance to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper" data-reveal="right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
