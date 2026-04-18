import { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = [];
    const shapeCount = 15;

    class FloatingShape {
      constructor() {
        this.size = Math.random() * 60 + 20;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.shape = Math.random() > 0.5 ? 'circle' : 'square';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Wrap around edges
        if (this.x < -this.size) this.x = window.innerWidth + this.size;
        if (this.x > window.innerWidth + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = window.innerHeight + this.size;
        if (this.y > window.innerHeight + this.size) this.y = -this.size;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        const gradient = ctx.createLinearGradient(-this.size, -this.size, this.size, this.size);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0.3)');
        ctx.fillStyle = gradient;

        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        }

        ctx.restore();
      }
    }

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new FloatingShape());
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((shape) => {
        shape.update();
        shape.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      container.removeChild(canvas);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />;
};

export default FloatingShapes;




