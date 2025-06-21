"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  // Reduced particle count for better performance
  const getParticleCount = () => {
    const width = window.innerWidth;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Significantly reduce particles
    if (width < 768 || devicePixelRatio > 1.5) return Math.min(15, Math.floor(width / 80));
    return Math.min(25, Math.floor(width / 60));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Optimize canvas settings
    ctx.imageSmoothingEnabled = false;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = getParticleCount();
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Smaller particles
          speedX: (Math.random() - 0.5) * 0.2, // Slower movement
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.15 + 0.05, // Lower opacity
          color: Math.random() > 0.5 ? '#7c67ff' : '#9b8aff'
        });
      }
      
      particlesRef.current = particles;
    };

    // 20fps animation for better performance
    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 50) { // ~20fps
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTimeRef.current = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Simple boundary collision
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animationFrameRef.current = requestAnimationFrame(animate);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 will-change-auto"
      style={{ background: 'transparent' }}
    />
  );
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Reduced number of floating shapes with longer, slower animations */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl will-change-transform" 
           style={{ 
             animation: 'float 12s ease-in-out infinite',
             animationDelay: '0s'
           }} />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl will-change-transform" 
           style={{ 
             animation: 'float 15s ease-in-out infinite',
             animationDelay: '5s'
           }} />
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Reduced gradient orbs with simpler animations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl will-change-transform" 
             style={{ 
               animation: 'float 20s ease-in-out infinite',
               animationDelay: '0s'
             }} />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-xl will-change-transform" 
             style={{ 
               animation: 'float 25s ease-in-out infinite',
               animationDelay: '10s'
             }} />
      </div>
    </div>
  );
} 