'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
<<<<<<< HEAD
  spotlightSize?: number;
  color?: string;
  blur?: number;
  opacity?: number;
=======
  size?: number;
>>>>>>> fa4d98df962051469fc45aca2507536c80ae96f7
  springOptions?: SpringOptions;
};

export function Spotlight({
<<<<<<< HEAD
  className = '',
  spotlightSize = 200,
  color = 'rgba(255, 255, 255, 0.2)',
  blur = 20,
  opacity = 1,
  springOptions = { stiffness: 400, damping: 25 },
=======
  className,
  size = 200,
  springOptions = { bounce: 0 },
>>>>>>> fa4d98df962051469fc45aca2507536c80ae96f7
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

<<<<<<< HEAD
  const spotlightLeft = useTransform(mouseX, (x) => `${x - spotlightSize / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - spotlightSize / 2}px`);
=======
  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);
>>>>>>> fa4d98df962051469fc45aca2507536c80ae96f7

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
<<<<<<< HEAD
      parentElement.removeEventListener('mouseleave', () => setIsHovered(false));
=======
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
>>>>>>> fa4d98df962051469fc45aca2507536c80ae96f7
    };
  }, [parentElement, handleMouseMove]);

  return (
<<<<<<< HEAD
    <div ref={containerRef} className={cn('absolute inset-0', className)}>
      <motion.div
        className="pointer-events-none absolute"
        style={{
          width: spotlightSize,
          height: spotlightSize,
          borderRadius: '50%',
          background: `radial-gradient(circle at center, ${color}, transparent 80%)`,
          opacity: isHovered ? opacity : 0,
          left: spotlightLeft,
          top: spotlightTop,
          transition: 'opacity 0.3s ease-in-out',
          filter: `blur(${blur}px)`,
        }}
      />
    </div>
=======
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
>>>>>>> fa4d98df962051469fc45aca2507536c80ae96f7
  );
}
