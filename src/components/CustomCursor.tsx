import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);

      // Add trail
      setTrails(prev => {
        const newTrail = { x: newPos.x, y: newPos.y, id: trailId++ };
        const updatedTrails = [newTrail, ...prev.slice(0, 8)];
        return updatedTrails;
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Clean up trails
    const trailCleanup = setInterval(() => {
      setTrails(prev => prev.slice(0, 6));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(trailCleanup);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`cursor-main ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
        }}
      />

      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x - 3}px`,
            top: `${trail.y - 3}px`,
            opacity: Math.max(0, 1 - index * 0.15),
            transform: `scale(${Math.max(0.3, 1 - index * 0.1)})`,
          }}
        />
      ))}
    </>
  );
};
