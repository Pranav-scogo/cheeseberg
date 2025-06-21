"use client";

import { useEffect, useRef } from 'react';

export function ScrollParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    color: string;
  }>>([]);
  const animationIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Performance-aware particle count
  const getParticleCount = () => {
    const width = window.innerWidth;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Reduce particles on high DPI screens and smaller devices
    if (width < 768 || devicePixelRatio > 1.5) return Math.min(8, Math.floor(width / 150));
    return Math.min(12, Math.floor(width / 120));
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
      const particles = [];
      const particleCount = getParticleCount();
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // Smaller particles
          speed: Math.random() * 0.3 + 0.1, // Slower movement
          opacity: Math.random() * 0.2 + 0.05, // Lower opacity
          color: Math.random() > 0.5 ? '#7c67ff' : '#9b8aff'
        });
      }
      
      particlesRef.current = particles;
    };

    // Throttled animation with 30fps target for better performance
    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 33) { // ~30fps
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTimeRef.current = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollPercentage = Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1));
      
      particlesRef.current.forEach((particle) => {
        // Move particles based on scroll
        particle.y -= particle.speed * (0.5 + scrollPercentage);
        
        // Reset particle if it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        
        // Adjust opacity based on scroll
        const dynamicOpacity = particle.opacity * (0.3 + scrollPercentage * 0.4);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(dynamicOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animationIdRef.current = requestAnimationFrame(animate);

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
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] will-change-auto"
      style={{ background: 'transparent' }}
    />
  );
}

export function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    const updateProgress = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!progressRef.current) return;
          
          const scrollPercentage = Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1));
          progressRef.current.style.transform = `scaleX(${scrollPercentage})`;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary via-purple-500 to-primary will-change-transform origin-left scale-x-0"
        style={{ transition: 'none' }}
      />
    </div>
  );
} 