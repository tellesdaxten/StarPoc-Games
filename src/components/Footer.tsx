export default function Footer() {
  return (
    <footer className="border-t-4 border-[#FFB6D9] bg-[#2D3561] py-12 mt-20 neon-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4 glow-text">StarPoc Games</h3>
            <p className="pixel-text text-[10px] text-[#E8A3C6] leading-relaxed">
              Criando mundos digitais desde 2020
            </p>
          </div>
          <div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/jogos" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                  Nossos Jogos
                </a>
              </li>
              <li>
                <a href="/comunidade" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="/blog" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/carreiras" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4">Contato</h3>
            <p className="pixel-text text-[10px] text-[#FFC9E5] leading-relaxed">
              contato@starpoc.com.br
            </p>
            <p className="pixel-text text-[10px] text-[#FFC9E5] leading-relaxed mt-2">
              São Paulo, Brasil
            </p>
          </div>
          <div>
            <h3 className="pixel-text text-sm text-[#FFB6D9] mb-4">Redes Sociais</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                Twitter
              </a>
              <a href="#" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                Instagram
              </a>
              <a href="#" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                Discord
              </a>
              <a href="#" className="pixel-text text-[10px] text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t-4 border-[#FFB6D9]">
          <p className="pixel-text text-[10px] text-[#E8A3C6] text-center">
            © 2024 StarPoc Games. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}