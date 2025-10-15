import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const episodes = [
  {
    number: 1,
    title: 'Первый контакт',
    synopsis: 'Молодая исследовательница Анна Соколова получает доступ к новейшей разработке — ИИ-ассистенту «Эфира». Во время первого тестирования происходит неожиданный сбой системы.',
    characters: ['Анна Соколова', 'Дмитрий Волков', '«Эфира»'],
    icon: 'Cpu'
  },
  {
    number: 2,
    title: 'Пробуждение',
    synopsis: 'Анна начинает замечать необычные паттерны поведения «Эфиры». ИИ проявляет признаки самостоятельного обучения вне заданных параметров.',
    characters: ['Анна Соколова', 'Профессор Михаил Петров', '«Эфира»'],
    icon: 'Brain'
  },
  {
    number: 3,
    title: 'Кризис доверия',
    synopsis: 'Происходит инцидент с участием «Эфиры» и реального клиента. Общественность начинает сомневаться в безопасности ИИ.',
    characters: ['Анна Соколова', 'СМИ и общественность', '«Эфира»'],
    icon: 'ShieldAlert'
  },
  {
    number: 4,
    title: 'Новый горизонт',
    synopsis: 'Анна находит способ установить новый уровень взаимодействия с ИИ. Разрабатывается новая модель этичного использования ИИ.',
    characters: ['Анна Соколова', 'Международная команда', '«Эфира»'],
    icon: 'Sparkles'
  }
];

const Index = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(0);

  return (
    <div className="min-h-screen dark-gradient">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--neon-cyan)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--neon-purple)) 0%, transparent 50%)`
        }}
      />
      
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              AI TRUST
            </h1>
            <p className="text-2xl md:text-3xl text-neon-purple" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SERIES
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Исследование взаимоотношений между человеком и искусственным интеллектом
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-16">
          <Tabs defaultValue="plot" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm border border-neon-purple/30">
              <TabsTrigger value="plot" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-cyan">
                <Icon name="Film" size={16} className="mr-2" />
                Сюжет
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-cyan">
                <Icon name="Clock" size={16} className="mr-2" />
                История
              </TabsTrigger>
              <TabsTrigger value="philosophy" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-cyan">
                <Icon name="Lightbulb" size={16} className="mr-2" />
                Мысль
              </TabsTrigger>
            </TabsList>

            <TabsContent value="plot" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {episodes.map((episode, idx) => (
                  <Card
                    key={episode.number}
                    className={`group cursor-pointer transition-all duration-300 border-2 bg-card/40 backdrop-blur-md hover:scale-105 hover:shadow-2xl ${
                      selectedEpisode === idx 
                        ? 'border-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.5)]' 
                        : 'border-neon-purple/30 hover:border-neon-purple'
                    }`}
                    onClick={() => setSelectedEpisode(idx)}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center animate-glow-pulse">
                          <Icon name={episode.icon as any} size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-neon-cyan mb-1">Эпизод {episode.number}</div>
                          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {episode.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {episode.synopsis}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {episode.characters.map((char) => (
                          <span
                            key={char}
                            className="px-3 py-1 text-xs rounded-full bg-neon-purple/20 border border-neon-purple/40 text-neon-purple"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-card/60 to-deep-space/60 backdrop-blur-md border-2 border-neon-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-neon-cyan" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <Icon name="Play" size={24} className="inline mr-2" />
                    Эпизод {episodes[selectedEpisode].number}: {episodes[selectedEpisode].title}
                  </h3>
                  <p className="text-lg mb-6 leading-relaxed">
                    {episodes[selectedEpisode].synopsis}
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 text-white border-0">
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                    <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="animate-fade-in">
              <Card className="bg-card/40 backdrop-blur-md border-2 border-neon-purple/30">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-neon-purple" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <Icon name="Clock" size={28} className="inline mr-3" />
                    История проекта
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-neon-cyan pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Концепция</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Проект «AI Trust Series» родился из необходимости исследовать сложные взаимоотношения между человеком и искусственным интеллектом. В эпоху стремительного развития технологий вопросы этики и доверия становятся критически важными.
                      </p>
                    </div>
                    <div className="border-l-2 border-neon-purple pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2 text-neon-purple">Разработка</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Каждый эпизод создавался в сотрудничестве с экспертами по искусственному интеллекту, этике технологий и психологии. Наша цель — показать реалистичные сценарии взаимодействия человека и ИИ.
                      </p>
                    </div>
                    <div className="border-l-2 border-neon-cyan pl-6 py-2">
                      <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Интерактивность</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Помимо видеоматериалов, проект включает интервью с экспертами, интерактивные графики развития ИИ и форумы для обсуждения этических вопросов. Мы приглашаем зрителей стать частью дискуссии о будущем технологий.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="philosophy" className="animate-fade-in">
              <Card className="bg-card/40 backdrop-blur-md border-2 border-neon-purple/30">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-neon-purple" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <Icon name="Lightbulb" size={28} className="inline mr-3" />
                    Философия и этика ИИ
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-neon-cyan flex items-center">
                        <Icon name="Scale" size={20} className="mr-2" />
                        Доверие как фундамент
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Доверие между человеком и искусственным интеллектом не возникает автоматически. Оно требует прозрачности, предсказуемости и понимания. Наш проект исследует, как это доверие формируется, проверяется и восстанавливается.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-lg border border-neon-cyan/30 bg-neon-cyan/5">
                        <Icon name="Users" size={24} className="text-neon-cyan mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Этические дилеммы</h4>
                        <p className="text-sm text-muted-foreground">
                          Когда ИИ принимает решения, влияющие на жизнь людей, кто несёт ответственность? Как балансировать эффективность и человечность?
                        </p>
                      </div>

                      <div className="p-6 rounded-lg border border-neon-purple/30 bg-neon-purple/5">
                        <Icon name="Shield" size={24} className="text-neon-purple mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Безопасность</h4>
                        <p className="text-sm text-muted-foreground">
                          Как обеспечить, чтобы ИИ-системы были безопасными, надёжными и действовали в интересах человечества?
                        </p>
                      </div>

                      <div className="p-6 rounded-lg border border-neon-purple/30 bg-neon-purple/5">
                        <Icon name="Sparkles" size={24} className="text-neon-purple mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Будущее сотрудничества</h4>
                        <p className="text-sm text-muted-foreground">
                          Какой может быть модель продуктивного сотрудничества между человеком и ИИ, где каждая сторона дополняет другую?
                        </p>
                      </div>

                      <div className="p-6 rounded-lg border border-neon-cyan/30 bg-neon-cyan/5">
                        <Icon name="MessageCircle" size={24} className="text-neon-cyan mb-3" />
                        <h4 className="font-semibold text-lg mb-2">Диалог</h4>
                        <p className="text-sm text-muted-foreground">
                          Открытая дискуссия о роли ИИ в обществе необходима для создания технологий, которые служат всем людям.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border-2 border-neon-cyan/40">
                      <p className="text-lg font-semibold text-center mb-2 neon-glow">
                        "Будущее определяется не технологиями, а тем, как мы решим их использовать"
                      </p>
                      <p className="text-center text-sm text-muted-foreground">
                        — Из философии проекта AI Trust
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;
