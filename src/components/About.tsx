import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '150+', label: 'Реализованных проектов' },
  { value: '12', label: 'Лет опыта' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '25', label: 'Наград и признаний' }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="text-sm tracking-[0.3em] uppercase text-gradient font-semibold">
              О нас
            </span>
            <h2 className="text-4xl md:text-6xl font-light mt-4 mb-6">
              Студия <span className="text-gradient">дизайна интерьеров</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Мы создаём пространства, которые вдохновляют и отражают индивидуальность каждого клиента. 
              Наша команда профессионалов с многолетним опытом превращает ваши идеи в реальность, 
              сочетая эстетику, функциональность и инновационные решения.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              От концепции до финальной реализации — мы сопровождаем проект на каждом этапе, 
              гарантируя безупречное качество и внимание к мельчайшим деталям.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold">Международные награды</p>
                <p className="text-sm text-muted-foreground">в области дизайна интерьеров</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl glass-morphism hover:-translate-y-1"
              >
                <h3 className="text-4xl md:text-5xl font-light text-gradient mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;