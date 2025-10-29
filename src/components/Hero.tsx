import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/f69c7bb0-0bf9-4212-bb90-a3392e3d186f.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
              Премиальный дизайн интерьеров
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-in-up">
            Проект <span className="italic font-normal">сам по себе</span> является ключом к вдохновению
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Создаём пространства, где роскошь встречается с функциональностью, 
            а каждая деталь рассказывает свою историю
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-base"
              onClick={() => scrollToSection('contact')}
            >
              Начать проект
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-base border-2"
              onClick={() => scrollToSection('portfolio')}
            >
              Наши работы
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-accent" />
      </div>
    </section>
  );
};

export default Hero;
