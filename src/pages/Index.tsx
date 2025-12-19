import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Стол River',
      category: 'tables',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/8a0e69e4-9697-46a1-ab69-768e4a400a5b.jpg',
      description: 'Эпоксидный стол с эффектом реки, деревянные края и янтарная смола',
      details: 'Размеры: 180×90 см. Массив дуба и прозрачная эпоксидная смола с металлическим пигментом.',
      price: 'от 45 000 ₽'
    },
    {
      id: 2,
      title: 'Часы из эпоксидной смолы',
      category: 'clocks',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/db482a87-1d1d-44ad-aad3-63a5509d4035.jpg',
      description: 'Настенные часы с янтарной смолой, древесным срезом и золотыми вкраплениями',
      details: 'Диаметр: 35 см. Массив дерева, эпоксидная смола с металлическими пигментами. Бесшумный механизм.',
      price: 'от 8 500 ₽'
    },
    {
      id: 3,
      title: 'Набор подставок',
      category: 'coasters',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/d874fbe5-d324-420d-a9a7-6bf09c83ce80.jpg',
      description: 'Элегантные подставки с мраморным эффектом и золотыми вкраплениями',
      details: 'Набор из 4 подставок. Диаметр: 10 см. Защитное покрытие от влаги.',
      price: 'от 3 500 ₽'
    },
    {
      id: 4,
      title: 'Вязаные изделия из пряжи',
      category: 'knitted',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/25ad4a60-e363-4ba6-bcec-1271b1d4e202.jpg',
      description: 'Уютные вязаные изделия ручной работы: свитера, пледы, игрушки и аксессуары',
      details: 'Индивидуальный подбор пряжи, размеров и цветовой гаммы. Натуральные материалы.',
      price: 'от 2 500 ₽'
    },
    {
      id: 5,
      title: 'Эксклюзивные горшки для растений',
      category: 'pots',
      image: 'https://cdn.poehali.dev/projects/b36eeb0d-1e82-41ad-b9f9-74898f02ef21/files/c3d15778-f2d8-4ec5-b7bc-2cc6ac27fbf1.jpg',
      description: 'Дизайнерские горшки ручной работы: керамика, бетон, авторская роспись',
      details: 'Размеры от 10 до 40 см. Керамика с глазурью, минималистичный бетон, геометрические узоры.',
      price: 'от 1 800 ₽'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    } else {
      newIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    }
    
    setSelectedImage(filteredProjects[newIndex].id);
  };

  const currentProject = projects.find(p => p.id === selectedImage);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">RESIN CRAFT</h1>
          <div className="hidden md:flex gap-8">
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О мастере</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Проект Создания Волшебства
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Изделия ручной работы, созданные с любовью: смола, вязание, керамика и многое другое
          </p>
          <Button size="lg" className="animate-scale-in">
            <Icon name="Mail" className="mr-2" size={20} />
            Заказать изделие
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея работ</h2>
          
          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6 bg-muted">
              <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>Все</TabsTrigger>
              <TabsTrigger value="tables" onClick={() => setSelectedCategory('tables')}>Столы</TabsTrigger>
              <TabsTrigger value="clocks" onClick={() => setSelectedCategory('clocks')}>Часы</TabsTrigger>
              <TabsTrigger value="coasters" onClick={() => setSelectedCategory('coasters')}>Подставки</TabsTrigger>
              <TabsTrigger value="knitted" onClick={() => setSelectedCategory('knitted')}>Вязание</TabsTrigger>
              <TabsTrigger value="pots" onClick={() => setSelectedCategory('pots')}>Горшки</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(project.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Icon name="Eye" size={18} />
                        <span className="text-sm font-medium">Посмотреть детали</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{project.price}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-6xl w-full p-0 border-0 bg-transparent overflow-hidden">
          <DialogTitle className="sr-only">
            {currentProject?.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {currentProject?.description}
          </DialogDescription>
          <div className="relative bg-background/95 backdrop-blur-xl rounded-lg overflow-hidden animate-scale-in">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <Icon name="X" size={24} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={currentProject?.image}
                  alt={currentProject?.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="m-4 p-3 rounded-full bg-background/80 hover:bg-background backdrop-blur-sm transition-colors"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="m-4 p-3 rounded-full bg-background/80 hover:bg-background backdrop-blur-sm transition-colors"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{currentProject?.title}</h3>
                  <p className="text-muted-foreground">{currentProject?.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium mb-1">Детали изделия</p>
                      <p className="text-sm text-muted-foreground">{currentProject?.details}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Tag" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium mb-1">Стоимость</p>
                      <p className="text-sm text-muted-foreground">{currentProject?.price}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Заказать такое же
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">О мастерах</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"></div>
              </div>
              <h3 className="text-2xl font-bold">Андрей — Мастер по работе со смолой</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Более 5 лет создаю уникальные предметы интерьера из эпоксидной смолы. 
                Каждое изделие — это результат тщательной работы и внимания к деталям.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Моя философия — соединить природную красоту дерева с современными материалами, 
                создавая произведения, которые станут центром внимания в любом пространстве.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">5+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                  <span className="font-semibold">100+ изделий</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm"></div>
              </div>
              <h3 className="text-2xl font-bold">Ольга — Мастер вязания и керамики</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Занимаюсь рукоделием более 7 лет. Специализируюсь на вязаных изделиях из натуральной пряжи 
                и создании авторской керамики. Каждая работа наполнена теплом и заботой.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Вдохновляюсь скандинавским минимализмом и природными текстурами. 
                Создаю уютные вещи, которые дарят комфорт и делают дом по-настоящему живым.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">7+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={24} />
                  <span className="font-semibold">150+ изделий</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16">Процесс создания</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Pencil" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">1. Эскиз и планирование</h3>
              <p className="text-muted-foreground">
                Обсуждаем концепцию, размеры и цветовую гамму будущего изделия
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Hammer" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">2. Подготовка материалов</h3>
              <p className="text-muted-foreground">
                Выбор древесины, подготовка формы и смешивание смолы с пигментами
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Sparkles" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">3. Заливка и финиш</h3>
              <p className="text-muted-foreground">
                Послойная заливка, полировка и нанесение защитного покрытия
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы заказать уникальное изделие?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Свяжитесь со мной для обсуждения вашего проекта. Каждое изделие создаётся индивидуально под ваши пожелания.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto">
              <Icon name="Mail" className="mr-2" size={20} />
              info@resincraft.ru
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Resin Craft. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;