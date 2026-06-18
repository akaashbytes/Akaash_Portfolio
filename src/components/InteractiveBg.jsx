import React, { useEffect, useRef, useContext } from 'react';
import { RippleContext } from '../context/RippleContext';

export const InteractiveBg = () => {
  const canvasRef = useRef(null);
  const scrollYRef = useRef(0);
  const { ripples, setRipples } = useContext(RippleContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    const particleCount = 45;
    
    // Eased mouse coordinates for smooth lag-behind motion
    let mouse = { x: 0, y: 0, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.6,
        speedX: Math.random() * 0.12 - 0.06,
        speedY: Math.random() * 0.12 - 0.06,
        alpha: Math.random() * 0.35 + 0.15,
        depth: Math.random() * 1.5 + 0.5, // Parallax depth factor
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Interpolate mouse coordinates (smooth easing)
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      // Draw Cinematic Base Dark Layers Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, '#050505');
      bgGrad.addColorStop(0.5, '#080808');
      bgGrad.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle ambient movement and scroll parallax mapping
      const time = performance.now() * 0.0002;
      const floatX1 = Math.sin(time) * 120;
      const floatY1 = Math.cos(time * 0.85) * 120;
      const floatX2 = Math.cos(time * 1.3) * 150;
      const floatY2 = Math.sin(time * 0.95) * 150;
      
      const scrollParallax = scrollYRef.current * 0.25;

      // Draw Giant Cinematic Background Text Watermark (Luke Baffait Style) with Parallax
      ctx.save();
      ctx.font = '900 13vw "Space Grotesk", sans-serif';
      ctx.strokeStyle = 'rgba(255, 31, 31, 0.002)';
      ctx.lineWidth = 1.5;
      ctx.strokeText('DEVELOPER', canvas.width * 0.05, canvas.height * 0.35 - scrollParallax * 0.5);
      ctx.strokeText('FULL STACK', canvas.width * 0.1, canvas.height * 0.7 - scrollParallax * 0.3);
      ctx.restore();

      // Layered radial gradients representing atmospheric floating glows & soft light leaks
      // Layer 1: Top Right (Large blurred red glow)
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.8 + floatX1,
        canvas.height * 0.15 + floatY1 - scrollParallax,
        20,
        canvas.width * 0.8 + floatX1,
        canvas.height * 0.15 + floatY1 - scrollParallax,
        800
      );
      glow1.addColorStop(0, 'rgba(255, 31, 31, 0.15)');
      glow1.addColorStop(0.7, 'rgba(255, 31, 31, 0.02)');
      glow1.addColorStop(1, 'transparent');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ---- Draw Glowing Red Cosmic Crescent Arc (Planet Eclipse Limb) ----
      ctx.save();
      const arcCenterX = canvas.width * 0.95 + floatX1 * 0.2;
      const arcCenterY = canvas.height * 0.15 + floatY1 * 0.2 - scrollParallax * 0.3;
      const arcRadius = Math.max(300, canvas.width * 0.23);
      
      // Draw multiple strokes with fading opacity to simulate neon light leak
      ctx.strokeStyle = 'rgba(255, 31, 31, 0.03)';
      ctx.lineWidth = 55;
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI * 0.62, Math.PI * 1.38);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 31, 31, 0.08)';
      ctx.lineWidth = 25;
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI * 0.62, Math.PI * 1.38);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 31, 31, 0.22)';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI * 0.62, Math.PI * 1.38);
      ctx.stroke();

      // Sharp, intense core arc line
      ctx.strokeStyle = '#FF4D4D';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#FF1F1F';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI * 0.62, Math.PI * 1.38);
      ctx.stroke();

      // Draw shimmering stardust particles along the arc
      for (let i = 0; i < 30; i++) {
        const angle = 0.62 * Math.PI + (0.76 * Math.PI) * (i / 30);
        // Add random dispersion radius noise
        const noiseAngle = time * 3 + i;
        const offsetRadius = arcRadius + Math.sin(noiseAngle) * 10 + ((i * 13) % 20) - 10;
        const px = arcCenterX + Math.cos(angle) * offsetRadius;
        const py = arcCenterY + Math.sin(angle) * offsetRadius;
        
        const alpha = 0.12 + Math.sin(time * 4 + i) * 0.08;
        ctx.fillStyle = `rgba(255, 31, 31, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, ((i * 3) % 2) * 0.6 + 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Layer 2: Bottom Left (Subtle dark-red glow)
      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.15 + floatX2,
        canvas.height * 0.8 + floatY2 - scrollParallax * 0.7,
        40,
        canvas.width * 0.15 + floatX2,
        canvas.height * 0.8 + floatY2 - scrollParallax * 0.7,
        600
      );
      glow2.addColorStop(0, 'rgba(255, 31, 31, 0.10)');
      glow2.addColorStop(0.7, 'rgba(255, 31, 31, 0.01)');
      glow2.addColorStop(1, 'transparent');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Layer 3: Center Light Leak / Floating Orb
      const glow3 = ctx.createRadialGradient(
        canvas.width * 0.45 - floatX1 * 0.5,
        canvas.height * 0.5 - floatY1 * 0.5 - scrollParallax * 0.8,
        10,
        canvas.width * 0.45 - floatX1 * 0.5,
        canvas.height * 0.5 - floatY1 * 0.5 - scrollParallax * 0.8,
        500
      );
      glow3.addColorStop(0, 'rgba(255, 31, 31, 0.08)');
      glow3.addColorStop(0.7, 'rgba(255, 31, 31, 0.01)');
      glow3.addColorStop(1, 'transparent');
      ctx.fillStyle = glow3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Layer 4: Very Soft vignette Center Overlay
      const vignette = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.3,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.65)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Soft mouse tracker spotlight glow (Neon Red #FF1F1F)
      const cursorSpot = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        250
      );
      cursorSpot.addColorStop(0, 'rgba(255, 31, 31, 0.03)');
      cursorSpot.addColorStop(1, 'transparent');
      ctx.fillStyle = cursorSpot;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render & Update Particle Network
      particles.forEach((p, idx) => {
        // Shift particle position according to eased mouse parallax depth
        const parallaxX = (mouse.x - canvas.width / 2) * 0.025 * p.depth;
        const parallaxY = (mouse.y - canvas.height / 2) * 0.025 * p.depth;
        
        const px = p.x + parallaxX;
        const py = p.y + parallaxY;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        
        // Light up particles that are near the mouse cursor spotlight
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        let alpha = p.alpha;
        
        if (distToMouse < 220) {
          alpha = p.alpha + (1 - distToMouse / 220) * 0.4; // illuminate
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Update raw positions
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap boundaries
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Connect nearby nodes
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2x = p2.x + (mouse.x - canvas.width / 2) * 0.025 * p2.depth;
          const p2y = p2.y + (mouse.y - canvas.height / 2) * 0.025 * p2.depth;
          
          const connDx = px - p2x;
          const connDy = py - p2y;
          const connDist = Math.sqrt(connDx * connDx + connDy * connDy);

          if (connDist < 110) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
            
            // Connective lines illuminate when under cursor spotlight
            let connAlpha = 0.06 * (1 - connDist / 110);
            const midX = (px + p2x) / 2;
            const midY = (py + p2y) / 2;
            const midDx = midX - mouse.x;
            const midDy = midY - mouse.y;
            const midDist = Math.sqrt(midDx * midDx + midDy * midDy);
            
            if (midDist < 200) {
              connAlpha += (1 - midDist / 200) * 0.12;
            }

            ctx.strokeStyle = `rgba(255, 255, 255, ${connAlpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      });

      // ---- Ripple Rendering ----
      if (ripples && ripples.length) {
        const newRipples = [];
        ripples.forEach(r => {
          // Expand radius and fade out
          r.radius += 4;
          r.alpha -= 0.025;
          if (r.alpha <= 0) return; // drop
          // Draw circle
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 153, 0, ${r.alpha})`;
          ctx.fill();
          newRipples.push(r);
        });
        setRipples(newRipples);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full bg-[#050505] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 block pointer-events-none" />
      {/* Dynamic Grid Overlay with soft opacity */}
      <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
    </div>
  );
};
