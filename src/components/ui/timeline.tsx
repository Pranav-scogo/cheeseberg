"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  date?: string;
  category?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  icon?: React.ReactNode;
  image?: string;
  priority?: 'high' | 'medium' | 'low';
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ data, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent transform md:-translate-x-1/2">
        <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Timeline Items */}
      <div className="relative space-y-8 md:space-y-16">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isActive={activeIndex === index}
            onActivate={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
  isActive: boolean;
  onActivate: (index: number | null) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  item, 
  index, 
  isActive, 
  onActivate 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });
  
  const isLeft = index % 2 === 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {/* Mobile Layout (stacked) */}
      <div className="md:hidden flex w-full">
        {/* Timeline Node */}
        <div className="relative flex-shrink-0 w-8 h-8 ml-0">
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg flex items-center justify-center">
              {item.icon && (
                <div className="text-primary-foreground text-xs">
                  {item.icon}
                </div>
              )}
            </div>
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-primary/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Content Card */}
        <motion.div
          className="flex-1 ml-6"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ 
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          }}
        >
          <TimelineCard item={item} isHovered={isHovered} />
        </motion.div>
      </div>

      {/* Desktop Layout (alternating) */}
      <div className="hidden md:flex w-full items-center">
        {isLeft ? (
          <>
            {/* Content on Left */}
            <motion.div
              className="w-5/12 pr-8"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ 
                x: 8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <TimelineCard item={item} isHovered={isHovered} align="right" />
            </motion.div>

            {/* Timeline Node */}
            <TimelineNode item={item} index={index} />

            {/* Empty Space */}
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            {/* Empty Space */}
            <div className="w-5/12"></div>

            {/* Timeline Node */}
            <TimelineNode item={item} index={index} />

            {/* Content on Right */}
            <motion.div
              className="w-5/12 pl-8"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ 
                x: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <TimelineCard item={item} isHovered={isHovered} align="left" />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

interface TimelineNodeProps {
  item: TimelineEntry;
  index: number;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ item, index }) => {
  return (
    <div className="relative z-10 flex-shrink-0">
      <motion.div
        className="w-8 h-8 relative"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Main Node */}
        <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg border-4 border-background flex items-center justify-center relative overflow-hidden">
          {/* Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
          
          {/* Icon */}
          {item.icon && (
            <div className="text-primary-foreground text-sm relative z-10">
              {item.icon}
            </div>
          )}
        </div>

        {/* Animated Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border border-primary/20"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2 + 0.5,
          }}
        />
      </motion.div>
    </div>
  );
};

interface TimelineCardProps {
  item: TimelineEntry;
  isHovered: boolean;
  align?: 'left' | 'right';
}

const TimelineCard: React.FC<TimelineCardProps> = ({ 
  item, 
  isHovered, 
  align = 'left' 
}) => {
  return (
    <motion.div
      className={`
        relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-lg
        hover:shadow-2xl hover:border-primary/30 transition-all duration-500
        ${align === 'right' ? 'text-right' : 'text-left'}
      `}
      animate={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className={`flex items-start gap-3 mb-4 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
          {item.category && (
            <motion.span
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              {item.category}
            </motion.span>
          )}
          {item.date && (
            <span className="text-xs text-muted-foreground font-medium">
              {item.date}
            </span>
          )}
        </div>

        {/* Title */}
        <motion.h3
          className="text-lg font-bold mb-3 text-card-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {item.title}
        </motion.h3>

        {/* Content */}
        <motion.div
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {item.content}
        </motion.div>

        {/* Status Indicator */}
        {item.status && (
          <motion.div
            className={`mt-4 flex items-center gap-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.status === 'completed'
                  ? 'bg-green-500'
                  : item.status === 'in-progress'
                  ? 'bg-yellow-500'
                  : 'bg-gray-400'
              }`}
            ></div>
            <span className="text-xs font-medium capitalize text-muted-foreground">
              {item.status.replace('-', ' ')}
            </span>
          </motion.div>
        )}
      </div>

      {/* Connecting Line to Node (Desktop only) */}
      <div
        className={`
          hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-border to-primary/50
          ${align === 'right' ? '-right-8' : '-left-8'}
        `}
      ></div>
    </motion.div>
  );
};

export default Timeline;