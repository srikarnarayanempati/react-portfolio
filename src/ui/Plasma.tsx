import React, { useEffect, useRef, useState } from 'react';

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: 'forward' | 'reverse' | 'pingpong';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const Plasma: React.FC<PlasmaProps> = ({
  color = '#6366f1',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 0.8,
  mouseInteractive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Optimized plasma calculation with reduced complexity
  const calculatePlasma = (x: number, y: number, time: number, mouseX: number, mouseY: number) => {
    const scaledX = x * 0.01 * scale;
    const scaledY = y * 0.01 * scale;
    
    // Simplified plasma equations - much faster than original
    const wave1 = Math.sin(scaledX * 2 + time);
    const wave2 = Math.sin(scaledY * 2 + time * 0.7);
    const wave3 = Math.sin((scaledX + scaledY) * 1.5 + time * 0.5);
    
    // Mouse interaction (simplified)
    let mouseEffect = 0;
    if (mouseInteractive) {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      mouseEffect = Math.sin(distance * 0.02 - time * 2) * 0.3;
    }
    
    return (wave1 + wave2 + wave3 + mouseEffect) * 0.25 + 0.5;
  };

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [102, 102, 255];
    return [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with reduced resolution for better performance
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Reduced DPR for performance
      
      // Use lower resolution on mobile
      const isMobile = window.innerWidth < 768;
      const resolutionScale = isMobile ? 0.5 : 0.75; // Even lower resolution
      
      const width = Math.floor(rect.width * dpr * resolutionScale);
      const height = Math.floor(rect.height * dpr * resolutionScale);
      
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      setDimensions({ width, height });
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (dimensions.width / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (dimensions.height / rect.height);
    };

    if (mouseInteractive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop with throttling
    let lastFrameTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        // Calculate time based on direction
        let timeSpeed = speed * 0.002;
        if (direction === 'reverse') {
          timeSpeed *= -1;
        } else if (direction === 'pingpong') {
          timeSpeed *= Math.sin(currentTime * 0.001);
        }
        
        timeRef.current += timeSpeed;
        
        const { width, height } = dimensions;
        if (width === 0 || height === 0) return;

        // Create image data
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        const [r, g, b] = hexToRgb(color);

        // Optimized pixel calculation with reduced sampling
        const step = Math.max(1, Math.floor((width + height) / 400)); // Dynamic step based on size
        
        for (let y = 0; y < height; y += step) {
          for (let x = 0; x < width; x += step) {
            const plasmaValue = calculatePlasma(
              x, y, timeRef.current, 
              mouseRef.current.x, mouseRef.current.y
            );
            
            const intensity = Math.pow(plasmaValue, 1.5); // Gamma correction for better visuals
            const alpha = intensity * opacity * 255;
            
            // Fill block instead of single pixel for better performance
            for (let dy = 0; dy < step && y + dy < height; dy++) {
              for (let dx = 0; dx < step && x + dx < width; dx++) {
                const index = ((y + dy) * width + (x + dx)) * 4;
                data[index] = r * intensity;     // Red
                data[index + 1] = g * intensity; // Green
                data[index + 2] = b * intensity; // Blue
                data[index + 3] = alpha;         // Alpha
              }
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        lastFrameTime = currentTime;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', updateCanvasSize);
      if (mouseInteractive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive, dimensions]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          mixBlendMode: 'screen', // Creates nice blending effect
          filter: 'blur(0.5px)' // Slight blur to hide pixelation from reduced resolution
        }}
      />
      {/* Fallback gradient for very low-end devices */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default Plasma;