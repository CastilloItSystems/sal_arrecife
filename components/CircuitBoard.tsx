import React, { useMemo } from 'react';

const CircuitBoard: React.FC = () => {
  // Generamos las trazas (líneas) de manera aleatoria para crear densidad visual
  // similar a la complejidad de la imagen de referencia.
  const traces = useMemo(() => {
    const lines = [];
    const count = 40; // Número de líneas por lado
    
    // Direcciones: Arriba, Abajo, Izquierda, Derecha
    const directions = [
      { x: 0, y: -1 }, // Arriba
      { x: 0, y: 1 },  // Abajo
      { x: -1, y: 0 }, // Izquierda
      { x: 1, y: 0 }   // Derecha
    ];

    for (let i = 0; i < count * 4; i++) {
      const dir = directions[Math.floor(i / count)];
      // Variación aleatoria para que no se vean uniformes
      const offset = (i % count) * 15 + (Math.random() * 10); 
      const length = 300 + Math.random() * 400;
      const turn = 50 + Math.random() * 100;

      // Lógica simple para crear caminos con ángulos de 45 grados
      // M = Move to (Inicio cerca del CPU)
      // L = Line to (Extensión recta)
      // L = Line to (Giro diagonal o extensión final)
      
      let pathD = '';
      let cx = 960; // Centro X
      let cy = 540; // Centro Y
      const gap = 100; // Espacio libre para el CPU

      if (dir.x !== 0) { // Horizontal
        const startY = cy + (dir.x * offset) - (count * 15 / 2); 
        pathD = `M ${cx + (dir.x * gap)} ${startY} L ${cx + (dir.x * (gap + turn))} ${startY} L ${cx + (dir.x * length)} ${startY + (Math.random() > 0.5 ? 50 : -50)}`;
      } else { // Vertical
        const startX = cx + (dir.y * offset) - (count * 15 / 2);
        pathD = `M ${startX} ${cy + (dir.y * gap)} L ${startX} ${cy + (dir.y * (gap + turn))} L ${startX + (Math.random() > 0.5 ? 50 : -50)} ${cy + (dir.y * length)}`;
      }

      lines.push({
        id: i,
        d: pathD,
        delay: Math.random() * 5, // Retraso aleatorio para la animación
        opacity: 0.3 + Math.random() * 0.5
      });
    }
    return lines;
  }, []);

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center perspective-container">
      
      {/* Fondo ambiental con gradiente radial profundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_#020617_80%)]"></div>

      {/* Contenedor que aplica la perspectiva 3D */}
      <div 
        className="relative w-[1920px] h-[1080px]"
        style={{
          transform: 'perspective(1000px) rotateX(60deg) scale(1.5)', // Aquí ocurre la magia del ángulo
          transformStyle: 'preserve-3d',
        }}
      >
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1920 1080" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Filtro de resplandor (Glow) para simular el neón */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Gradiente para las líneas */}
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grupo Principal Centrado */}
          <g filter="url(#glow)">
            
            {/* Renderizado de las líneas generadas dinámicamente */}
            {traces.map((trace) => (
              <g key={trace.id}>
                {/* Línea base estática tenue */}
                <path 
                  d={trace.d} 
                  fill="none" 
                  stroke="#1e40af" 
                  strokeWidth="1" 
                  opacity="0.3" 
                />
                {/* Línea animada brillante (el pulso de energía) */}
                <path 
                  d={trace.d} 
                  fill="none" 
                  stroke="url(#line-gradient)" 
                  strokeWidth="2"
                  strokeDasharray="100 1000" // Crea segmentos cortos
                  className="animate-pulse-flow"
                  style={{
                    animationDelay: `${trace.delay}s`,
                    animationDuration: '3s'
                  }}
                />
                {/* Pequeños círculos en los extremos (nodos) */}
                <circle r="2" fill="#38bdf8">
                    <animateMotion dur="3s" repeatCount="indefinite" path={trace.d} begin={`${trace.delay}s`} />
                </circle>
              </g>
            ))}

            {/* --- CPU CENTRAL --- */}
            <g transform="translate(960, 540)">
              {/* Brillo exterior debajo del CPU */}
              <circle r="120" fill="#3b82f6" opacity="0.2" filter="url(#glow)" />
              
              {/* Placa base del chip */}
              <rect x="-60" y="-60" width="120" height="120" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              
              {/* Detalles internos del chip (Matriz de puntos) */}
              <g fill="#0ea5e9">
                {Array.from({ length: 25 }).map((_, i) => {
                    const x = (i % 5) * 16 - 32;
                    const y = Math.floor(i / 5) * 16 - 32;
                    return <rect key={i} x={x} y={y} width="8" height="8" opacity="0.8" rx="1" />
                })}
              </g>
              
              {/* Borde brillante animado alrededor del CPU */}
              <rect x="-65" y="-65" width="130" height="130" rx="8" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="20 10" opacity="0.5">
                 <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
              </rect>
            </g>

          </g>
        </svg>
      </div>
      
      {/* Overlay de viñeta para oscurecer los bordes (profundidad) */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_30%,_#000_100%)] pointer-events-none"></div>
    </div>
  );
};

export default CircuitBoard;