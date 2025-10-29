import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient">
          G•M
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">
            Портфолио
          </button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
            Услуги
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
            О студии
          </button>
          <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-primary transition-colors">
            Процесс
          </button>
          <Button onClick={() => scrollToSection('contact')} className="gradient-primary hover:opacity-90 text-white shadow-lg">
            Контакты
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism border-t border-border animate-fade-in shadow-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('hero')} className="text-left hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-accent transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-accent transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-accent transition-colors">
              О студии
            </button>
            <button onClick={() => scrollToSection('process')} className="text-left hover:text-accent transition-colors">
              Процесс
            </button>
            <Button onClick={() => scrollToSection('contact')} className="gradient-primary hover:opacity-90 text-white w-full shadow-lg">
              Контакты
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;