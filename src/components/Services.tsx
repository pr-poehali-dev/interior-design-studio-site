import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Pencil',
    title: 'Проектирование',
    description: 'Разработка концепции и полного комплекта документации с учётом всех технических требований'
  },
  {
    icon: 'Eye',
    title: 'Авторский надзор',
    description: 'Контроль качества выполнения работ и соответствия проекту на всех этапах реализации'
  },
  {
    icon: 'Package',
    title: 'Комплектация',
    description: 'Подбор и закупка мебели, отделочных материалов, декора и всех элементов интерьера'
  },
  {
    icon: 'Key',
    title: 'Реализация под ключ',
    description: 'Полный цикл работ от проектирования до финальной расстановки мебели и аксессуаров'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm tracking-[0.3em] uppercase text-gradient font-semibold">
            Что мы предлагаем
          </span>
          <h2 className="text-4xl md:text-6xl font-light mt-4 mb-6">
            Наши <span className="text-gradient">услуги</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к созданию интерьеров вашей мечты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-fade-in rounded-3xl glass-morphism group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;