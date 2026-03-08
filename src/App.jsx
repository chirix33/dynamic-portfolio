import { useTheme } from './hooks/useTheme';
import { useScrollObserver } from './hooks/useScrollObserver';
import { useParallaxImages } from './hooks/useParallaxImages';
import Header from './components/Header';
import ThemeButton from './components/ThemeButton';
import ThemeModal from './components/ThemeModal';
import Bio from './components/Bio';
import ParallaxBackground from './components/ParallaxBackground';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { theme, showModal, toggleTheme, openModal, closeModal } = useTheme();
  const { activeSection, scrollToSection, headerRef, menuRef } = useScrollObserver();
  const parallaxImages = useParallaxImages();

  return (
    <div className="antialiased bg-cream-cheese-50 dark:bg-gray-900 dark:text-cream-cheese-50 max-w-full overflow-x-hidden min-h-screen">
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        headerRef={headerRef}
        menuRef={menuRef}
      />
      <ThemeButton onOpenModal={openModal} />
      <ThemeModal show={showModal} onClose={closeModal} onSelectTheme={toggleTheme} />
      <main>
        <Bio />
        <ParallaxBackground imageUrl={parallaxImages[0]} index={0} />
        <Experience />
        <ParallaxBackground imageUrl={parallaxImages[1]} index={1} />
        <Projects />
        <ParallaxBackground imageUrl={parallaxImages[2]} index={2} />
        <Footer />
      </main>
    </div>
  );
}

export default App;

