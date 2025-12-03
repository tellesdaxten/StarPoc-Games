"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const benefits = [
  { emoji: "💰", title: "Salário Competitivo", description: "Remuneração acima do mercado" },
  { emoji: "🏠", title: "Home Office", description: "Trabalho remoto ou híbrido" },
  { emoji: "🎮", title: "Games Grátis", description: "Acesso a todos os nossos jogos" },
  { emoji: "📚", title: "Educação", description: "Cursos e conferências pagas" },
  { emoji: "🏥", title: "Saúde", description: "Plano de saúde e odontológico" },
  { emoji: "🌴", title: "Férias", description: "30 dias de férias anuais" },
  { emoji: "⏰", title: "Horário Flexível", description: "Flexibilidade de horários" },
  { emoji: "🎉", title: "Eventos", description: "Game nights e confraternizações" }
];

const openPositions = [
  {
    id: 1,
    title: "Desenvolvedor Unity Sênior",
    department: "Desenvolvimento",
    location: "São Paulo/Remoto",
    type: "Tempo Integral",
    emoji: "👨‍💻",
    description: "Buscamos desenvolvedor Unity experiente para liderar projetos de jogos mobile e desktop.",
    requirements: [
      "5+ anos de experiência com Unity",
      "C# avançado",
      "Experiência com multiplayer",
      "Portfólio de jogos publicados"
    ]
  },
  {
    id: 2,
    title: "Pixel Artist",
    department: "Arte",
    location: "Remoto",
    type: "Tempo Integral",
    emoji: "🎨",
    description: "Procuramos artista pixel para criar sprites, ambientes e animações para nossos jogos.",
    requirements: [
      "Portfólio forte em pixel art",
      "Experiência com animação",
      "Conhecimento em Aseprite/Photoshop",
      "Paixão por jogos retro"
    ]
  },
  {
    id: 3,
    title: "Game Designer",
    department: "Design",
    location: "São Paulo/Híbrido",
    type: "Tempo Integral",
    emoji: "🎮",
    description: "Designer para criar mecânicas inovadoras e balancear sistemas de jogo.",
    requirements: [
      "3+ anos em game design",
      "Experiência com documentação de design",
      "Conhecimento de teoria de jogos",
      "Habilidade analítica"
    ]
  },
  {
    id: 4,
    title: "Escritor Narrativo",
    department: "Narrativa",
    location: "Remoto",
    type: "Tempo Integral",
    emoji: "📖",
    description: "Escritor para criar histórias envolventes e diálogos memoráveis para nossos jogos narrativos.",
    requirements: [
      "Experiência em escrita criativa",
      "Portfólio de trabalhos narrativos",
      "Conhecimento de estrutura narrativa",
      "Paixão por storytelling interativo"
    ]
  },
  {
    id: 5,
    title: "QA Tester",
    department: "Qualidade",
    location: "São Paulo/Remoto",
    type: "Tempo Integral",
    emoji: "🐛",
    description: "Tester para identificar bugs e garantir a qualidade dos nossos jogos.",
    requirements: [
      "Atenção aos detalhes",
      "Experiência com testes de software",
      "Boa comunicação escrita",
      "Paixão por jogos"
    ]
  },
  {
    id: 6,
    title: "Community Manager",
    department: "Comunidade",
    location: "Remoto",
    type: "Tempo Integral",
    emoji: "💬",
    description: "Gerente de comunidade para engajar e crescer nossa base de jogadores.",
    requirements: [
      "Experiência com redes sociais",
      "Excelente comunicação",
      "Conhecimento de Discord/Twitter",
      "Paixão por comunidades gamer"
    ]
  }
];

export default function CarreirasPage() {
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
            Trabalhe Conosco
          </h1>
          <p className="pixel-text text-xs text-[#FFC9E5] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se à nossa equipe e ajude a criar os jogos do futuro!
          </p>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#2D3561] p-12 mb-16 max-w-4xl mx-auto neon-border"
        >
          <h2 className="pixel-text text-2xl text-[#FFB6D9] mb-6 text-center glow-text">
            Nossa Cultura
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="pixel-text text-sm text-[#4ECDC4] mb-3">🚀 Inovação</h3>
              <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                Incentivamos criatividade e novas ideias. Aqui você tem liberdade para experimentar.
              </p>
            </div>
            <div>
              <h3 className="pixel-text text-sm text-[#4ECDC4] mb-3">🤝 Colaboração</h3>
              <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                Trabalhamos como uma equipe unida onde todos contribuem para o sucesso.
              </p>
            </div>
            <div>
              <h3 className="pixel-text text-sm text-[#4ECDC4] mb-3">📈 Crescimento</h3>
              <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                Investimos no desenvolvimento da nossa equipe com treinamentos e mentorias.
              </p>
            </div>
            <div>
              <h3 className="pixel-text text-sm text-[#4ECDC4] mb-3">⚖️ Equilíbrio</h3>
              <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed">
                Valorizamos a saúde mental e o equilíbrio entre trabalho e vida pessoal.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="pixel-text text-2xl text-[#FFB6D9] text-center mb-8 glow-text">
            Benefícios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="pixel-card bg-[#6B9BD1] p-4 text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{benefit.emoji}</div>
                <h3 className="pixel-text text-[9px] text-[#1A2340] mb-1">
                  {benefit.title}
                </h3>
                <p className="pixel-text text-[7px] text-[#1A2340]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="pixel-text text-2xl text-[#FFB6D9] text-center mb-8 glow-text">
            Vagas Abertas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pixel-card bg-[#2D3561] p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{position.emoji}</div>
                  <div className="flex-1">
                    <h3 className="pixel-text text-sm text-[#FFB6D9] mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="pixel-text text-[7px] text-[#1A2340] bg-[#4ECDC4] px-2 py-1">
                        {position.department}
                      </span>
                      <span className="pixel-text text-[7px] text-[#1A2340] bg-[#FFB6D9] px-2 py-1">
                        {position.type}
                      </span>
                    </div>
                    <p className="pixel-text text-[7px] text-[#FFC9E5] mb-3">
                      📍 {position.location}
                    </p>
                  </div>
                </div>
                <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed mb-4">
                  {position.description}
                </p>
                <div className="mb-4">
                  <p className="pixel-text text-[8px] text-[#FFB6D9] mb-2">Requisitos:</p>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="pixel-text text-[8px] text-[#E8A3C6]">
                        • {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-[8px] w-full hover:bg-[#4ECDC4]">
                  Candidatar-se
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#6B9BD1] p-12 max-w-4xl mx-auto mb-16"
        >
          <h2 className="pixel-text text-2xl text-[#1A2340] mb-8 text-center">
            Processo Seletivo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">📝</div>
              <h3 className="pixel-text text-[9px] text-[#1A2340] mb-2">1. Candidatura</h3>
              <p className="pixel-text text-[7px] text-[#1A2340]">
                Envie seu currículo e portfólio
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">💬</div>
              <h3 className="pixel-text text-[9px] text-[#1A2340] mb-2">2. Entrevista</h3>
              <p className="pixel-text text-[7px] text-[#1A2340]">
                Conversa com o time de RH
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="pixel-text text-[9px] text-[#1A2340] mb-2">3. Teste Prático</h3>
              <p className="pixel-text text-[7px] text-[#1A2340]">
                Desafio técnico ou criativo
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="pixel-text text-[9px] text-[#1A2340] mb-2">4. Oferta</h3>
              <p className="pixel-text text-[7px] text-[#1A2340]">
                Bem-vindo ao time!
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#FFB6D9] p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="pixel-text text-2xl text-[#1A2340] mb-4">
            Não encontrou a vaga ideal?
          </h2>
          <p className="pixel-text text-xs text-[#2D3561] mb-6 leading-relaxed">
            Envie seu currículo para nosso banco de talentos! Entraremos em contato quando surgir uma oportunidade que combine com seu perfil.
          </p>
          <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-xs hover:bg-[#4ECDC4]">
            Enviar Currículo
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
