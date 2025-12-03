"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const communityStats = [
  { label: "Jogadores Ativos", value: "50K+", emoji: "👥" },
  { label: "Partidas Jogadas", value: "2M+", emoji: "🎮" },
  { label: "Membros Discord", value: "15K+", emoji: "💬" },
  { label: "Torneios Realizados", value: "50+", emoji: "🏆" }
];

const events = [
  {
    id: 1,
    title: "Torneio Cosmic Raiders",
    date: "15 de Janeiro, 2025",
    description: "Competição multiplayer com prêmios de R$ 5.000",
    emoji: "🚀",
    status: "Inscrições Abertas"
  },
  {
    id: 2,
    title: "Beta Test Mystery Manor",
    date: "20 de Janeiro, 2025",
    description: "Seja um dos primeiros a testar nosso novo jogo narrativo",
    emoji: "🏰",
    status: "Vagas Limitadas"
  },
  {
    id: 3,
    title: "Dev Talk: Arte Pixel",
    date: "25 de Janeiro, 2025",
    description: "Live com nossa equipe de arte sobre criação de sprites",
    emoji: "🎨",
    status: "Gratuito"
  }
];

const socialLinks = [
  { name: "Discord", url: "#", emoji: "💬", members: "15K+ membros" },
  { name: "Twitter", url: "#", emoji: "🐦", members: "8K+ seguidores" },
  { name: "Instagram", url: "#", emoji: "📸", members: "12K+ seguidores" },
  { name: "YouTube", url: "#", emoji: "📺", members: "20K+ inscritos" }
];

export default function ComunidadePage() {
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
            Comunidade StarPoc
          </h1>
          <p className="pixel-text text-xs text-[#FFC9E5] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Faça parte da nossa comunidade de jogadores apaixonados!
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#2D3561] p-8 mb-16 neon-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <p className="pixel-text text-2xl text-[#4ECDC4] mb-2">{stat.value}</p>
                <p className="pixel-text text-[9px] text-[#FFC9E5]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="pixel-text text-2xl text-[#FFB6D9] text-center mb-8 glow-text">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pixel-card bg-[#2D3561] p-6 hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4 text-center">{event.emoji}</div>
                <h3 className="pixel-text text-sm text-[#FFB6D9] mb-2 text-center">
                  {event.title}
                </h3>
                <p className="pixel-text text-[8px] text-[#4ECDC4] mb-3 text-center">
                  {event.date}
                </p>
                <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="text-center">
                  <span className="pixel-text text-[8px] text-[#1A2340] bg-[#4ECDC4] px-3 py-1 inline-block">
                    {event.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="pixel-text text-2xl text-[#FFB6D9] text-center mb-8 glow-text">
            Redes Sociais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pixel-card bg-[#6B9BD1] p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-3">{social.emoji}</div>
                <h3 className="pixel-text text-sm text-[#1A2340] mb-2">
                  {social.name}
                </h3>
                <p className="pixel-text text-[9px] text-[#1A2340]">
                  {social.members}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Join Community */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#FFB6D9] p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="pixel-text text-2xl text-[#1A2340] mb-4">
            Junte-se à Comunidade!
          </h2>
          <p className="pixel-text text-xs text-[#2D3561] mb-6 leading-relaxed">
            Entre para o nosso Discord e conecte-se com milhares de jogadores
          </p>
          <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-xs hover:bg-[#4ECDC4]">
            Entrar no Discord
          </button>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#2D3561] p-8 mt-16 max-w-4xl mx-auto"
        >
          <h2 className="pixel-text text-lg text-[#FFB6D9] mb-6 text-center">
            Código de Conduta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="pixel-text text-sm text-[#4ECDC4] mb-3">✅ Incentivamos</h3>
              <ul className="space-y-2">
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Respeito entre jogadores
                </li>
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Trabalho em equipe
                </li>
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Fair play e espírito esportivo
                </li>
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Ajuda a novos jogadores
                </li>
              </ul>
            </div>
            <div>
              <h3 className="pixel-text text-sm text-[#FFB6D9] mb-3">❌ Não Toleramos</h3>
              <ul className="space-y-2">
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Toxicidade ou assédio
                </li>
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Trapaças ou exploits
                </li>
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Spam ou flood
                </li>
                <li className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                  • Discriminação de qualquer tipo
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
