import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">G•M</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Студия дизайна интерьеров премиум-класса. 
              Создаём пространства, которые вдохновляют.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#hero" className="hover:opacity-100 hover:text-accent transition-all">Главная</a></li>
              <li><a href="#portfolio" className="hover:opacity-100 hover:text-accent transition-all">Портфолио</a></li>
              <li><a href="#services" className="hover:opacity-100 hover:text-accent transition-all">Услуги</a></li>
              <li><a href="#about" className="hover:opacity-100 hover:text-accent transition-all">О студии</a></li>
              <li><a href="#process" className="hover:opacity-100 hover:text-accent transition-all">Процесс работы</a></li>
              <li><a href="#contact" className="hover:opacity-100 hover:text-accent transition-all">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Следите за нами</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all group">
                <Icon name="Instagram" size={20} className="group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all group">
                <Icon name="Facebook" size={20} className="group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all group">
                <Icon name="Linkedin" size={20} className="group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60">
          <p>&copy; {currentYear} G•M Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
