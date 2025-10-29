import Icon from '@/components/ui/icon';

const steps = [
  {
    number: '01',
    icon: 'MessageCircle',
    title: 'Консультация',
    description: 'Обсуждаем ваши идеи, пожелания и бюджет проекта'
  },
  {
    number: '02',
    icon: 'Lightbulb',
    title: 'Концепция',
    description: 'Разрабатываем уникальную концепцию дизайна интерьера'
  },
  {
    number: '03',
    icon: 'FileText',
    title: 'Проектирование',
    description: 'Создаём полный комплект рабочей документации'
  },
  {
    number: '04',
    icon: 'Hammer',
    title: 'Реализация',
    description: 'Воплощаем проект в жизнь с авторским надзором'
  },
  {
    number: '05',
    icon: 'CheckCircle',
    title: 'Сдача проекта',
    description: 'Финальная расстановка мебели и декора, передача ключей'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm tracking-[0.3em] uppercase text-gradient font-semibold">
            Как мы работаем
          </span>
          <h2 className="text-4xl md:text-6xl font-light mt-4 mb-6">
            Процесс <span className="text-gradient">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачный и понятный процесс от первой встречи до реализации
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 gradient-primary rounded-full -translate-y-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-background p-6 rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 glass-morphism hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center shadow-md">
                    <Icon name={step.icon} size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;