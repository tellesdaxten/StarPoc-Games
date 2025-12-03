"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Como Criamos o Mundo de Pixel Quest",
    category: "Dev Diary",
    date: "10 Jan, 2025",
    excerpt: "Um olhar aprofundado sobre o processo de criação do nosso RPG de fantasia medieval, desde os primeiros conceitos até a implementação final.",
    emoji: "⚔️",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "A Arte de Contar Histórias em Jogos",
    category: "Design Narrativo",
    date: "5 Jan, 2025",
    excerpt: "Exploramos técnicas de narrativa interativa e como criar histórias que realmente envolvem os jogadores em cada decisão.",
    emoji: "📖",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Multiplayer: Desafios e Soluções",
    category: "Programação",
    date: "28 Dez, 2024",
    excerpt: "Os desafios técnicos de implementar sistemas multiplayer online e como superamos problemas de latência e sincronização.",
    emoji: "🌐",
    readTime: "10 min"
  },
  {
    id: 4,
    title: "Pixel Art Moderna: Nosso Workflow",
    category: "Arte",
    date: "20 Dez, 2024",
    excerpt: "Descubra as ferramentas e técnicas que usamos para criar arte pixel vibrante e cheia de personalidade para nossos jogos.",
    emoji: "🎨",
    readTime: "6 min"
  },
  {
    id: 5,
    title: "Otimização para Mobile: Dicas Essenciais",
    category: "Desenvolvimento",
    date: "15 Dez, 2024",
    excerpt: "Aprenda como otimizamos nossos jogos para rodar perfeitamente em dispositivos móveis sem perder qualidade visual.",
    emoji: "📱",
    readTime: "7 min"
  },
  {
    id: 6,
    title: "Anunciando Mystery Manor Beta",
    category: "Anúncio",
    date: "10 Dez, 2024",
    excerpt: "Estamos empolgados em anunciar o beta fechado do Mystery Manor! Saiba como participar e ajudar a moldar o jogo final.",
    emoji: "🎮",
    readTime: "4 min"
  }
];

const categories = ["Todos", "Dev Diary", "Design Narrativo", "Programação", "Arte", "Desenvolvimento", "Anúncio"];

export default function BlogPage() {
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
            Blog StarPoc
          </h1>
          <p className="pixel-text text-xs text-[#FFC9E5] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Notícias, tutoriais e insights sobre desenvolvimento de jogos
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="pixel-button bg-[#2D3561] text-[#FFC9E5] text-[8px] hover:bg-[#4ECDC4] hover:text-[#1A2340]"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#6B9BD1] p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="text-6xl">{blogPosts[0].emoji}</div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="pixel-text text-[8px] text-[#1A2340] bg-[#FFB6D9] px-2 py-1">
                  {blogPosts[0].category}
                </span>
                <span className="pixel-text text-[8px] text-[#1A2340]">
                  {blogPosts[0].date} • {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="pixel-text text-xl text-[#1A2340] mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="pixel-text text-[10px] text-[#1A2340] leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <button className="pixel-button bg-[#FFB6D9] text-[#1A2340] text-[9px] hover:bg-[#FFC9E5]">
                Ler Mais
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pixel-card bg-[#2D3561] p-6 hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4 text-center">{post.emoji}</div>
              <div className="flex flex-wrap gap-2 mb-3 justify-center">
                <span className="pixel-text text-[7px] text-[#1A2340] bg-[#4ECDC4] px-2 py-1">
                  {post.category}
                </span>
              </div>
              <h3 className="pixel-text text-sm text-[#FFB6D9] mb-3 text-center">
                {post.title}
              </h3>
              <p className="pixel-text text-[8px] text-[#FFC9E5] mb-3 text-center">
                {post.date} • {post.readTime}
              </p>
              <p className="pixel-text text-[9px] text-[#E8A3C6] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-[8px] w-full hover:bg-[#4ECDC4]">
                Ler Post
              </button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#FFB6D9] p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="pixel-text text-2xl text-[#1A2340] mb-4">
            📬 Newsletter StarPoc
          </h2>
          <p className="pixel-text text-xs text-[#2D3561] mb-6 leading-relaxed">
            Receba as últimas notícias, tutoriais e anúncios diretamente no seu email!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="pixel-text text-[10px] bg-[#2D3561] text-[#FFC9E5] border-4 border-[#2D3561] px-4 py-3 flex-1"
            />
            <button className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-xs hover:bg-[#4ECDC4]">
              Inscrever-se
            </button>
          </div>
        </motion.div>

        {/* Archive Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pixel-card bg-[#2D3561] p-8 mt-16 max-w-4xl mx-auto"
        >
          <h2 className="pixel-text text-lg text-[#FFB6D9] mb-6 text-center">
            Arquivo do Blog
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Janeiro 2025", "Dezembro 2024", "Novembro 2024", "Outubro 2024"].map((month, index) => (
              <button
                key={index}
                className="pixel-text text-[9px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors text-center"
              >
                {month}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
