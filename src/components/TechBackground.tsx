import React from 'react';
import { motion } from 'framer-motion';

interface TechBackgroundProps {
  variant?: 'cyberpunk' | 'minimal';
  className?: string;
}

export const TechBackground: React.FC<TechBackgroundProps> = ({ 
  variant = 'cyberpunk', 
  className = '' 
}) => {
  if (variant === 'cyberpunk') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Neural Network */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.8, 0],
                x1: Math.random() * 100,
                y1: Math.random() * 100
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Neural Nodes */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="3"
              fill="#3b82f6"
              filter="url(#glow)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </svg>

        {/* Floating Data Grids */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute w-32 h-32 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 45}deg)`
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1 p-2">
                {Array.from({ length: 16 }).map((_, j) => (
                  <motion.div
                    key={j}
                    className="bg-cyan-400/20 rounded-sm"
                    animate={{
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: j * 0.1
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 font-mono text-xs text-green-400 space-y-1">
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'> neural_network.initialize()'}
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              {'> ai_model.train(data)'}
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              {'> system.optimize()'}
            </motion.div>
          </div>
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
    );
  }

  // Minimal variant
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Subtle Geometric Shapes */}
      <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="minimalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#475569" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Hexagon Pattern */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.polygon
            key={`hex-${i}`}
            points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
            fill="none"
            stroke="url(#minimalGradient)"
            strokeWidth="1"
            transform={`translate(${(i % 4) * 200 + 100}, ${Math.floor(i / 4) * 200 + 100}) scale(0.8)`}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Circuit Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`circuit-${i}`}
            d={`M${i * 125},0 L${i * 125},1000 M0,${i * 125} L1000,${i * 125}`}
            stroke="#475569"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            strokeDasharray="5,10"
            animate={{
              strokeDashoffset: [0, -15]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Soft Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-slate-600/10 to-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-gray-600/10 to-slate-600/10 rounded-full blur-3xl" />
      </div>

      {/* Minimal Tech Elements */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`tech-${i}`}
            className="absolute w-24 h-24 border border-slate-400/30 rounded-lg"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`
            }}
            animate={{
              borderColor: ['rgba(148, 163, 184, 0.3)', 'rgba(14, 116, 144, 0.5)', 'rgba(148, 163, 184, 0.3)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-1 p-2">
              {Array.from({ length: 9 }).map((_, j) => (
                <motion.div
                  key={j}
                  className="bg-teal-500/20 rounded-sm"
                  animate={{
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: j * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};