"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SobrePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="pixel-text text-3xl md:text-5xl text-[#FFB6D9] text-center mb-12 glow-text">
            Sobre a StarPoc Games
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#2D3561] p-8"
          >
            <h2 className="pixel-text text-lg text-[#FFB6D9] mb-4">
              Quem Somos
            </h2>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed mb-4">
              A StarPoc Games é uma start-up brasileira de médio porte que desenvolve 
              jogos digitais para plataformas mobile e desktop. Fundada em 2020, 
              nascemos com a missão de criar experiências únicas através de narrativas 
              interativas e jogabilidade multiplayer online.
            </p>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed">
              Acreditamos que jogos são portas para novos universos, onde cada jogador 
              pode viver aventuras inesquecíveis e conectar-se com pessoas do mundo inteiro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#2D3561] p-8"
          >
            <h2 className="pixel-text text-lg text-[#FFB6D9] mb-4">
              Nossa Missão
            </h2>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed">
              Desenvolver jogos que combinam arte pixel, histórias envolventes e 
              mecânicas inovadoras. Queremos criar experiências que não apenas 
              entretenham, mas que também conectem pessoas e inspirem criatividade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#6B9BD1] p-8"
          >
            <h2 className="pixel-text text-lg text-[#1A2340] mb-6">
              Nosso Foco
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="pixel-text text-sm text-[#1A2340] mb-3">
                  📱 Multiplataforma
                </h3>
                <p className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                  Desenvolvemos para mobile e desktop, garantindo que nossos 
                  jogos sejam acessíveis onde você estiver.
                </p>
              </div>
              <div>
                <h3 className="pixel-text text-sm text-[#1A2340] mb-3">
                  📖 Narrativas Interativas
                </h3>
                <p className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                  Cada escolha importa. Criamos histórias onde você é o 
                  protagonista e suas decisões moldam o destino.
                </p>
              </div>
              <div>
                <h3 className="pixel-text text-sm text-[#1A2340] mb-3">
                  🌐 Multiplayer Online
                </h3>
                <p className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                  Conecte-se com jogadores do Brasil e do mundo inteiro em 
                  aventuras cooperativas e competitivas.
                </p>
              </div>
              <div>
                <h3 className="pixel-text text-sm text-[#1A2340] mb-3">
                  🎨 Arte Pixel
                </h3>
                <p className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                  Mantemos viva a nostalgia dos clássicos com arte pixel 
                  moderna e cheia de personalidade.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="pixel-card bg-[#FFB6D9] p-8 text-center"
          >
            <h2 className="pixel-text text-lg text-[#1A2340] mb-4">
              Time Brasileiro, Alcance Global
            </h2>
            <p className="pixel-text text-[10px] text-[#2D3561] leading-relaxed mb-6">
              Somos uma equipe apaixonada de desenvolvedores, artistas, designers 
              e contadores de histórias baseados no Brasil, criando jogos para 
              o mundo inteiro.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="pixel-text text-2xl text-[#2D3561] mb-1">15</p>
                <p className="pixel-text text-[9px] text-[#2D3561]">Desenvolvedores</p>
              </div>
              <div>
                <p className="pixel-text text-2xl text-[#2D3561] mb-1">8</p>
                <p className="pixel-text text-[9px] text-[#2D3561]">Artistas</p>
              </div>
              <div>
                <p className="pixel-text text-2xl text-[#2D3561] mb-1">5</p>
                <p className="pixel-text text-[9px] text-[#2D3561]">Designers</p>
              </div>
              <div>
                <p className="pixel-text text-2xl text-[#2D3561] mb-1">3</p>
                <p className="pixel-text text-[9px] text-[#2D3561]">Escritores</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}