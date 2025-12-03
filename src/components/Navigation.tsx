import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-[#FFB6D9] bg-[#2D3561] shadow-lg neon-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="pixel-text text-xl text-[#FFB6D9] hover:text-[#4ECDC4] transition-colors glow-text">
            StarPoc Games
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="pixel-text text-xs text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors"
            >
              Início
            </Link>
            <Link 
              href="/sobre" 
              className="pixel-text text-xs text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="/jogos" 
              className="pixel-text text-xs text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors"
            >
              Jogos
            </Link>
            <Link 
              href="/comunidade" 
              className="pixel-text text-xs text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors"
            >
              Comunidade
            </Link>
            <Link 
              href="/blog" 
              className="pixel-text text-xs text-[#FFC9E5] hover:text-[#4ECDC4] transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/minigame" 
              className="pixel-text text-xs text-[#4ECDC4] hover:text-[#FFB6D9] transition-colors"
            >
              Jogar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}