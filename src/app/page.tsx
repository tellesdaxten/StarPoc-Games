"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="pixel-text text-4xl md:text-6xl text-[#FFB6D9] mb-8 glow-text">
              StarPoc Games
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pixel-card bg-[#2D3561] p-6 mb-12 max-w-3xl neon-border"
          >
            <p className="pixel-text text-sm md:text-base text-[#FFC9E5]">
              "Jogos são portas para um novo universo"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/sobre">
              <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-xs hover:bg-[#4ECDC4]">
                Sobre Nós
              </button>
            </Link>
            <Link href="/jogos">
              <button className="pixel-button bg-[#FFB6D9] text-[#1A2340] text-xs hover:bg-[#FFC9E5]">
                Nossos Jogos
              </button>
            </Link>
            <Link href="/minigame">
              <button className="pixel-button bg-[#9B59B6] text-white text-xs hover:bg-[#6B2C91]">
                Jogar Agora
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#2D3561] p-8 hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4">
              Mobile & Desktop
            </h3>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed">
              Jogos para todas as plataformas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#2D3561] p-8 hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">📖</div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4">
              Narrativas Interativas
            </h3>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed">
              Histórias que você controla
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#2D3561] p-8 hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4">
              Multiplayer Online
            </h3>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed">
              Jogue com amigos do mundo todo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#2D3561] p-12 neon-border"
        >
          <h2 className="pixel-text text-2xl md:text-3xl text-[#FFB6D9] mb-8 text-center glow-text">
            Nossa Jornada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="pixel-text text-3xl text-[#4ECDC4] mb-2">6</p>
              <p className="pixel-text text-[10px] text-[#FFC9E5]">Jogos</p>
            </div>
            <div className="text-center">
              <p className="pixel-text text-3xl text-[#4ECDC4] mb-2">50K+</p>
              <p className="pixel-text text-[10px] text-[#FFC9E5]">Jogadores</p>
            </div>
            <div className="text-center">
              <p className="pixel-text text-3xl text-[#4ECDC4] mb-2">4</p>
              <p className="pixel-text text-[10px] text-[#FFC9E5]">Anos</p>
            </div>
            <div className="text-center">
              <p className="pixel-text text-3xl text-[#4ECDC4] mb-2">20+</p>
              <p className="pixel-text text-[10px] text-[#FFC9E5]">Prêmios</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#6B9BD1] p-12 text-center"
        >
          <h2 className="pixel-text text-2xl md:text-3xl text-[#1A2340] mb-6">
            Pronto para a aventura?
          </h2>
          <p className="pixel-text text-xs text-[#1A2340] mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore nossos jogos e descubra novos universos
          </p>
          <Link href="/minigame">
            <button className="pixel-button bg-[#FFB6D9] text-[#1A2340] text-xs hover:bg-[#FFC9E5]">
              Começar a Jogar
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}