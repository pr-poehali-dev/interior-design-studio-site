import { Card } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'Современная гостиная',
    category: 'Жилые интерьеры',
    image: 'https://cdn.poehali.dev/projects/92e10efd-1bd0-4f90-bc27-21b67f75f3b5/files/3a05c733-aef0-4519-b5e6-9e64f32dcef8.jpg',
    area: '120 м²'
  },
  {
    id: 2,
    title: 'Элегантная спальня',
    category: 'Жилые интерьеры',
    image: 'https://cdn.poehali.dev/projects/92e10efd-1bd0-4f90-bc27-21b67f75f3b5/files/9b099691-1a67-4233-83f6-6ea61fafb309.jpg',
    area: '85 м²'
  },
  {
    id: 3,
    title: 'Дизайнерская кухня',
    category: 'Жилые интерьеры',
    image: 'https://cdn.poehali.dev/projects/92e10efd-1bd0-4f90-bc27-21b67f75f3b5/files/9cac6356-d149-4905-b04a-02be26ff2403.jpg',
    area: '65 м²'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm tracking-[0.3em] uppercase text-gradient font-semibold">
            Наши работы
          </span>
          <h2 className="text-4xl md:text-6xl font-light mt-4 mb-6">
            Портфолио <span className="text-gradient">проектов</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый проект — это уникальное пространство, созданное с вниманием к деталям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in rounded-3xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-95 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs tracking-[0.2em] uppercase opacity-80 block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.area}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-card">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.area}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;