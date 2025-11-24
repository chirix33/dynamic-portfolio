import { useEffect, useState, useRef } from 'react';

export function useScrollObserver() {
  const [activeSection, setActiveSection] = useState('bio');
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const menu = menuRef.current;

    if (!header || !menu) return;

    // Observer for header scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (document.body.classList.contains('dark')) {
              menu.classList.remove('scrolled');
              menu.classList.add('dark-scrolled');
            } else {
              menu.classList.remove('dark-scrolled');
              menu.classList.add('scrolled');
            }
          } else {
            menu.classList.remove('scrolled');
            menu.classList.remove('dark-scrolled');
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(header);

    // Active section highlighting
    const sections = ['bio', 'experience', 'projects'];
    const setActiveMenuItem = () => {
      let index = sections.length;
      const scrollY = window.scrollY + 200;

      while (--index >= 0) {
        const section = document.getElementById(sections[index]);
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(sections[index]);
          break;
        }
      }
    };

    window.addEventListener('scroll', setActiveMenuItem);
    setActiveMenuItem();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', setActiveMenuItem);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      setActiveSection(sectionId);
    }
  };

  return { activeSection, scrollToSection, headerRef, menuRef };
}

