"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

interface AchievementBadgeProps {
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  rarity?: "common" | "rare" | "epic" | "legendary";
  className?: string;
  onClick?: () => void;
}

const RARITY_COLORS = {
  common: "text-primary/70 border-primary/30",
  rare: "text-blue-400 border-blue-500/50",
  epic: "text-purple-400 border-purple-500/50",
  legendary: "text-yellow-400 border-yellow-500/50",
};

const RARITY_GLOW = {
  common: "shadow-primary/20",
  rare: "shadow-blue-500/30",
  epic: "shadow-purple-500/40",
  legendary: "shadow-yellow-500/50",
};

export function AchievementBadge({
  icon,
  title,
  description,
  unlocked,
  rarity = "common",
  className,
  onClick,
}: AchievementBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        boxShadow: unlocked ? `0 0 15px ${RARITY_GLOW[rarity]}` : 'none'
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: unlocked ? `0 0 25px ${RARITY_GLOW[rarity]}` : 'none',
        transition: { 
          duration: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 15
        }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative p-0.5 cursor-pointer transition-all duration-300 border-2",
        unlocked 
          ? `${RARITY_COLORS[rarity]} bg-black/50 hover:bg-black/70` 
          : "border-dashed border-gray-700 bg-black/30 grayscale",
        "transform-gpu overflow-hidden",
        className
      )}
    >
      {/* Efecto de brillo en el borde */}
      {unlocked && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      )}
      
      <div className="p-3 flex flex-col items-center">
        <motion.div
          animate={unlocked ? {
            y: [0, -3, 0],
          } : {}}
          transition={unlocked ? {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          } : {}}
          className={cn(
            "w-14 h-14 flex items-center justify-center text-3xl mb-2 relative",
            !unlocked && "opacity-50"
          )}
        >
          {icon}
          
          {/* Efecto de brillo en el ícono */}
          {unlocked && (
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          )}
        </motion.div>
        
        {!unlocked ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
            <motion.div 
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="flex flex-col items-center"
            >
              <Lock className="w-6 h-6 text-primary/50 mb-1" />
              <span className="text-xs text-primary/50 font-mono">BLOQUEADO</span>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h4 className={cn(
              "text-xs font-mono tracking-wider truncate max-w-full mb-1",
              unlocked ? "text-primary" : "text-gray-500"
            )}>
              {title}
            </h4>
            <div className="h-0.5 w-4 mx-auto bg-primary/30 my-1"></div>
            <p className="text-[10px] text-primary/70 font-mono">
              {rarity.toUpperCase()}
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Efecto de ruido */}
      <div className="absolute inset-0 bg-[url('/crt-noise.svg')] opacity-10 pointer-events-none"></div>
    </motion.div>
  );
}
