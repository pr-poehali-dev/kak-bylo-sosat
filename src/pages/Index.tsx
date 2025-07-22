import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const characters = [
    {
      name: "FREDDY",
      stats: "ГЛАВНЫЙ АНТАГОНИСТ",
      health: 100,
      power: 95,
      image: "img/5fc5ae0a-2172-4ec1-a22e-19dec7e5dd19.jpg"
    },
    {
      name: "BONNIE",
      stats: "GUITARIST",
      health: 85,
      power: 80,
      image: "img/5fc5ae0a-2172-4ec1-a22e-19dec7e5dd19.jpg"
    },
    {
      name: "CHICA",
      stats: "CHEF",
      health: 75,
      power: 70,
      image: "img/5fc5ae0a-2172-4ec1-a22e-19dec7e5dd19.jpg"
    }
  ];

  const gameStats = [
    { icon: "Target", label: "Убийства", value: "24" },
    { icon: "Clock", label: "Время", value: "05:47" },
    { icon: "Star", label: "Уровень", value: "7" },
    { icon: "Trophy", label: "Очки", value: "1,245" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent animate-fade-in">
            FIVE NIGHTS AT FREDDY'S
          </h1>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in">
            Выживи 5 ночей в пиццерии ужасов
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold">
              НАЧАТЬ ИГРУ
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10 px-8 py-3 text-lg">
              ПРАВИЛА
            </Button>
          </div>
        </div>
      </div>

      {/* Game Stats */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gameStats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover-scale">
              <CardContent className="p-4 text-center">
                <Icon name={stat.icon} size={32} className="mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Characters Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
          ВЫБЕРИ УБИЙЦУ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card key={index} className="bg-gray-800/60 border-gray-600 hover-scale group cursor-pointer transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{character.name}</h3>
                    <p className="text-gray-400 text-sm">{character.stats}</p>
                  </div>
                  <Icon name="User" size={24} className="text-orange-400" />
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Здоровье</span>
                      <span className="text-white">{character.health}%</span>
                    </div>
                    <Progress value={character.health} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Сила</span>
                      <span className="text-white">{character.power}%</span>
                    </div>
                    <Progress value={character.power} className="h-2" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                    ВЫБРАТЬ
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700">
                    <Icon name="Info" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Game Mode Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          РЕЖИМЫ ИГРЫ
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-700 hover-scale group cursor-pointer">
            <CardContent className="p-8 text-center">
              <Icon name="Skull" size={48} className="mx-auto mb-4 text-red-400 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-4 text-red-300">ОХОТА</h3>
              <p className="text-gray-300 mb-6">
                Играй за аниматроника и охоться на охранников в темных коридорах пиццерии
              </p>
              <div className="flex gap-2 justify-center">
                <Badge className="bg-red-600">Экшен</Badge>
                <Badge className="bg-orange-600">Хоррор</Badge>
              </div>
              <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                НАЧАТЬ ОХОТУ
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-700 hover-scale group cursor-pointer">
            <CardContent className="p-8 text-center">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-blue-400 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-4 text-blue-300">ВЫЖИВАНИЕ</h3>
              <p className="text-gray-300 mb-6">
                Играй за охранника и попытайся пережить 5 ночей ужаса
              </p>
              <div className="flex gap-2 justify-center">
                <Badge className="bg-blue-600">Стратегия</Badge>
                <Badge className="bg-purple-600">Выживание</Badge>
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                ВЫЖИТЬ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Five Nights at Freddy's Game. Создано с 💀 для настоящих фанатов хоррора
          </p>
        </div>
      </footer>
    </div>
  );
}