"use client";

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 400,
  once = true
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !once) {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.98)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.98)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.98)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.98)`;
      case 'fade':
        return 'translate3d(0, 0, 0) scale(0.95)';
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.98)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}

export function StaggeredReveal({
  children,
  className = '',
  staggerDelay = 50,
  ...props
}: ScrollRevealProps & { staggerDelay?: number }) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <ScrollReveal
              key={index}
              delay={index * staggerDelay}
              {...props}
            >
              {child}
            </ScrollReveal>
          ))
        : children}
    </div>
  );
} 