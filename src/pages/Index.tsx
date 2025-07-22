import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [gameMode, setGameMode] = useState<'lobby' | 'role-select' | 'game' | null>(null);
  const [playerRole, setPlayerRole] = useState<'killer' | 'survivor' | null>(null);
  const [roomCode, setRoomCode] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [connectedPlayers, setConnectedPlayers] = useState<string[]>([]);
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold">
                  ИГРАТЬ НА ДВОИХ
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-400 text-center">
                    МУЛЬТИПЛЕЕР ЛОББИ
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 p-4">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-300">ТВОЕ ИМЯ</label>
                    <Input 
                      placeholder="Введи свое имя..."
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => {
                        setGameMode('role-select');
                        setRoomCode('ROOM-' + Math.random().toString(36).substr(2, 6).toUpperCase());
                      }}
                    >
                      <Icon name="Plus" className="mr-2" size={18} />
                      СОЗДАТЬ КОМНАТУ
                    </Button>
                    
                    <div className="flex items-center gap-3">
                      <Separator className="flex-1" />
                      <span className="text-gray-400 text-sm">ИЛИ</span>
                      <Separator className="flex-1" />
                    </div>
                    
                    <div className="space-y-3">
                      <Input 
                        placeholder="Код комнаты..."
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => setGameMode('role-select')}
                      >
                        <Icon name="Users" className="mr-2" size={18} />
                        ПОДКЛЮЧИТЬСЯ
                      </Button>
                    </div>
                  </div>
                  
                  {gameMode === 'role-select' && (
                    <div className="space-y-4 p-4 bg-gray-800 rounded-lg">
                      <h3 className="font-bold text-center text-orange-400">КОМНАТА: {roomCode}</h3>
                      <div className="space-y-3">
                        <p className="text-sm text-gray-300 text-center">Выбери свою роль:</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Button 
                            variant={playerRole === 'killer' ? 'default' : 'outline'}
                            className={playerRole === 'killer' ? 'bg-red-600 hover:bg-red-700' : 'border-red-500 text-red-400 hover:bg-red-500/10'}
                            onClick={() => setPlayerRole('killer')}
                          >
                            <Icon name="Skull" className="mr-2" size={16} />
                            УБИЙЦА
                          </Button>
                          <Button 
                            variant={playerRole === 'survivor' ? 'default' : 'outline'}
                            className={playerRole === 'survivor' ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-500 text-blue-400 hover:bg-blue-500/10'}
                            onClick={() => setPlayerRole('survivor')}
                          >
                            <Icon name="Shield" className="mr-2" size={16} />
                            ОХРАННИК
                          </Button>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-xs text-gray-400">Подключенные игроки:</p>
                          <div className="flex items-center gap-2 p-2 bg-gray-700 rounded">
                            <Icon name="User" size={14} className="text-green-400" />
                            <span className="text-sm">{playerName || 'Игрок 1'} ({playerRole || 'Не выбрано'})</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-700 rounded opacity-50">
                            <Icon name="UserPlus" size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-400">Ожидание второго игрока...</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-orange-600 hover:bg-orange-700"
                          disabled={!playerRole}
                          onClick={() => setGameMode('game')}
                        >
                          НАЧАТЬ ИГРУ
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
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

      {/* Multiplayer Features Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          МУЛЬТИПЛЕЕРНЫЙ РЕЖИМ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Icon name="Skull" size={48} className="text-red-400" />
                <div>
                  <h3 className="text-2xl font-bold text-red-300">РОЛЬ УБИЙЦЫ</h3>
                  <p className="text-gray-400">Аниматроник-охотник</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Icon name="Eye" size={16} className="text-red-400" />
                  <span>Видишь охранника через камеры</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Zap" size={16} className="text-red-400" />
                  <span>Можешь отключать свет и двери</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Move" size={16} className="text-red-400" />
                  <span>Перемещайся по вентиляции</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Target" size={16} className="text-red-400" />
                  <span>Цель: поймать охранника до 6:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Icon name="Shield" size={48} className="text-blue-400" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">РОЛЬ ОХРАННИКА</h3>
                  <p className="text-gray-400">Ночной сторож</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Icon name="Camera" size={16} className="text-blue-400" />
                  <span>Следи через систему камер</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="DoorOpen" size={16} className="text-blue-400" />
                  <span>Закрывай двери для защиты</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Lightbulb" size={16} className="text-blue-400" />
                  <span>Включай свет в коридорах</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={16} className="text-blue-400" />
                  <span>Цель: дожить до 6:00 утра</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-900/50 to-orange-900/50 border-purple-700 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Icon name="Users" size={32} className="text-purple-400" />
                <div className="text-left">
                  <h4 className="font-bold text-white">ОНЛАЙН БИТВА 1 VS 1</h4>
                  <p className="text-gray-300 text-sm">Один охотится, другой выживает</p>
                </div>
              </div>
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