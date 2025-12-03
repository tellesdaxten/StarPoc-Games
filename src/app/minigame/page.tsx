"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function MiniGamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game state
    const player = {
      x: 100,
      y: 300,
      width: 32,
      height: 32,
      velocityY: 0,
      jumping: false,
      color: "#FFB6D9"
    };

    const gravity = 0.5;
    const jumpStrength = -12;
    const groundY = 350;

    let obstacles: Array<{ x: number; width: number; height: number; scored: boolean }> = [];
    let gameScore = 0;
    let animationId: number;
    let keys: { [key: string]: boolean } = {};

    // Event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
      if ((e.key === " " || e.key === "ArrowUp") && !player.jumping) {
        player.velocityY = jumpStrength;
        player.jumping = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Game loop
    const gameLoop = () => {
      // Clear canvas with dark gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#1A2340");
      gradient.addColorStop(1, "#2D3561");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#FFB6D9";
      ctx.fillRect(0, groundY + player.height, canvas.width, canvas.height);

      // Update player
      player.velocityY += gravity;
      player.y += player.velocityY;

      if (player.y >= groundY) {
        player.y = groundY;
        player.velocityY = 0;
        player.jumping = false;
      }

      // Draw player with glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = player.color;
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.shadowBlur = 0;

      // Spawn obstacles
      if (Math.random() < 0.02 && obstacles.length < 3) {
        obstacles.push({
          x: canvas.width,
          width: 30,
          height: 40 + Math.random() * 30,
          scored: false
        });
      }

      // Update and draw obstacles
      obstacles = obstacles.filter(obstacle => {
        obstacle.x -= 5;

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#4ECDC4";
        ctx.fillStyle = "#4ECDC4";
        ctx.fillRect(obstacle.x, groundY + player.height - obstacle.height, obstacle.width, obstacle.height);
        ctx.shadowBlur = 0;

        // Check collision
        if (
          player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y + player.height > groundY + player.height - obstacle.height
        ) {
          setGameOver(true);
          setGameStarted(false);
          return false;
        }

        // Score point
        if (!obstacle.scored && obstacle.x + obstacle.width < player.x) {
          obstacle.scored = true;
          gameScore++;
          setScore(gameScore);
        }

        return obstacle.x > -obstacle.width;
      });

      // Draw score with glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#FFB6D9";
      ctx.fillStyle = "#FFB6D9";
      ctx.font = "20px 'Press Start 2P'";
      ctx.fillText(`Score: ${gameScore}`, 20, 30);
      ctx.shadowBlur = 0;

      // Draw instructions
      ctx.fillStyle = "#FFC9E5";
      ctx.font = "12px 'Press Start 2P'";
      ctx.fillText("SPACE or UP to jump", 20, canvas.height - 20);

      if (!gameOver) {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, [gameStarted, gameOver]);

  const startGame = () => {
    setGameOver(false);
    setGameStarted(true);
    setScore(0);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="pixel-text text-3xl md:text-5xl text-[#FFB6D9] mb-4 glow-text">
            Pixel Runner
          </h1>
          <p className="pixel-text text-xs text-[#FFC9E5] leading-relaxed">
            Pule os obstáculos e faça a maior pontuação!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="pixel-card bg-[#2D3561] p-8 mb-8 neon-border">
            {!gameStarted && (
              <div className="text-center mb-4">
                {gameOver && (
                  <div className="mb-4">
                    <p className="pixel-text text-lg text-[#FFB6D9] mb-2 glow-text">
                      Game Over!
                    </p>
                    <p className="pixel-text text-sm text-[#E8A3C6] mb-4">
                      Pontuação Final: {score}
                    </p>
                  </div>
                )}
                <button
                  onClick={startGame}
                  className="pixel-button bg-[#6B9BD1] text-[#1A2340] text-xs hover:bg-[#4ECDC4]"
                >
                  {gameOver ? "Jogar Novamente" : "Iniciar Jogo"}
                </button>
              </div>
            )}
            
            <canvas
              ref={canvasRef}
              width={800}
              height={400}
              className="border-4 border-[#FFB6D9] bg-[#1A2340] max-w-full neon-border"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <div className="pixel-card bg-[#6B9BD1] p-6 max-w-2xl">
            <h2 className="pixel-text text-sm text-[#1A2340] mb-4 text-center">
              Como Jogar
            </h2>
            <ul className="space-y-2">
              <li className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                • Pressione ESPAÇO ou SETA PARA CIMA para pular
              </li>
              <li className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                • Evite os obstáculos ciano
              </li>
              <li className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                • Cada obstáculo superado vale 1 ponto
              </li>
              <li className="pixel-text text-[10px] text-[#1A2340] leading-relaxed">
                • Tente fazer a maior pontuação possível!
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}