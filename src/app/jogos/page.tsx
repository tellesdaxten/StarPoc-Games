"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const games = [
  {
    id: 1,
    title: "Pixel Quest",
    description: "Uma aventura épica em um mundo de fantasia medieval com dragões, magos e guerreiros.",
    genre: "RPG de Ação",
    platform: "Mobile & Desktop",
    emoji: "⚔️",
    status: "Em Desenvolvimento",
    progress: 75
  },
  {
    id: 2,
    title: "Cosmic Raiders",
    description: "Batalhe contra alienígenas em combates espaciais multiplayer intensos.",
    genre: "Multiplayer Shooter",
    platform: "Desktop",
    emoji: "🚀",
    status: "Em Desenvolvimento",
    progress: 60
  },
  {
    id: 3,
    title: "Mystery Manor",
    description: "Resolva enigmas em uma mansão misteriosa cheia de segredos e surpresas.",
    genre: "Narrativa Interativa",
    platform: "Mobile & Desktop",
    emoji: "🏰",
    status: "Beta Fechado",
    progress: 90
  },
  {
    id: 4,
    title: "Neon Racers",
    description: "Corridas futuristas em pistas neon com power-ups e multiplayer online.",
    genre: "Corrida Arcade",
    platform: "Mobile & Desktop",
    emoji: "🏎️",
    status: "Em Desenvolvimento",
    progress: 45
  },
  {
    id: 5,
    title: "Forest Guardians",
    description: "Proteja a floresta mágica em um RPG cooperativo para até 4 jogadores.",
    genre: "RPG Cooperativo",
    platform: "Desktop",
    emoji: "🌲",
    status: "Planejamento",
    progress: 20
  },
  {
    id: 6,
    title: "Time Paradox",
    description: "Viaje no tempo e mude o passado neste puzzle narrativo inovador.",
    genre: "Puzzle Narrativo",
    platform: "Mobile & Desktop",
    emoji: "⏰",
    status: "Em Desenvolvimento",
    progress: 55
  }
];

export default function JogosPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="pixel-text text-3xl md:text-5xl text-[#FFB6D9] text-center mb-6 glow-text">
            Nossos Jogos
          </h1>
          <p className="pixel-text text-xs text-[#FFC9E5] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra mundos incríveis criados pela StarPoc Games
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pixel-card bg-[#2D3561] p-6 hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4 text-center">{game.emoji}</div>
              <h3 className="pixel-text text-sm text-[#FFB6D9] mb-3 text-center">
                {game.title}
              </h3>
              <div className="space-y-3 mb-4">
                <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  {game.description}
                </p>
                <div className="border-t-2 border-[#FFB6D9] pt-3">
                  <p className="pixel-text text-[8px] text-[#FFC9E5] mb-1">
                    Gênero: {game.genre}
                  </p>
                  <p className="pixel-text text-[8px] text-[#FFC9E5] mb-2">
                    Plataforma: {game.platform}
                  </p>
                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <p className="pixel-text text-[7px] text-[#4ECDC4]">
                        {game.status}
                      </p>
                      <p className="pixel-text text-[7px] text-[#4ECDC4]">
                        {game.progress}%
                      </p>
                    </div>
                    <div className="w-full bg-[#1A2340] h-2 border-2 border-[#FFB6D9]">
                      <div 
                        className="bg-[#4ECDC4] h-full transition-all duration-500"
                        style={{ width: `${game.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-[9px] w-full hover:bg-[#4ECDC4]">
                Mais Informações
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#6B9BD1] p-12 text-center mt-16 max-w-3xl mx-auto"
        >
          <h2 className="pixel-text text-xl md:text-2xl text-[#1A2340] mb-6">
            Quer experimentar?
          </h2>
          <p className="pixel-text text-xs text-[#1A2340] mb-8 leading-relaxed">
            Jogue nosso mini-game de plataforma e veja o estilo StarPoc em ação!
          </p>
          <Link href="/minigame">
            <button className="pixel-button bg-[#FFB6D9] text-[#1A2340] text-xs hover:bg-[#FFC9E5]">
              Jogar Mini-Game
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}