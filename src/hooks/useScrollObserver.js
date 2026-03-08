import { useEffect, useState, useRef } from 'react';

export function useScrollObserver() {
  const [activeSection, setActiveSection] = useState('bio');
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const isHeaderVisible = useRef(true);

  useEffect(() => {
    const header = headerRef.current;
    const menu = menuRef.current;

    if (!header || !menu) return;

    const updateMenuClass = () => {
      if (isHeaderVisible.current) {
        menu.classList.remove('scrolled');
        menu.classList.remove('dark-scrolled');
      } else if (document.body.classList.contains('dark')) {
        menu.classList.remove('scrolled');
        menu.classList.add('dark-scrolled');
      } else {
        menu.classList.remove('dark-scrolled');
        menu.classList.add('scrolled');
      }
    };

    // Observer for header visibility — drives floating nav appearance
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeaderVisible.current = entry.isIntersecting;
          updateMenuClass();
        });
      },
      { threshold: 0 }
    );

    headerObserver.observe(header);

    // Watch for theme changes so floating nav style updates immediately
    const bodyObserver = new MutationObserver(updateMenuClass);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

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
      headerObserver.disconnect();
      bodyObserver.disconnect();
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
