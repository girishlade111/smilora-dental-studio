import React from "react";
import { motion } from "motion/react";

export const AnimatedToothSvg: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => {
  // Tooth outline path coordinates
  const toothPath =
    "M 100 25 C 65 25 35 50 35 90 C 35 125 50 160 62 195 C 70 215 85 210 90 190 C 95 170 105 170 110 190 C 115 210 130 215 138 195 C 150 160 165 125 165 90 C 165 50 135 25 100 25 Z";

  // Crown anatomical contour lines
  const crownDetail1 = "M 75 75 C 85 62 100 62 110 75";
  const crownDetail2 = "M 65 110 C 85 102 115 102 135 110";

  // Root division subtle line
  const rootGroove = "M 100 135 L 100 168";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-mint/20 via-sand/20 to-coral/10 rounded-full blur-2xl animate-soft-pulse" />

      <svg
        viewBox="0 0 200 230"
        className="w-full h-full relative z-10 drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F3D3E" />
            <stop offset="60%" stopColor="#2B7A5C" />
            <stop offset="100%" stopColor="#FF7A59" />
          </linearGradient>

          <linearGradient id="glowGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#BFE3D0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Soft inner fill with subtle delayed opacity */}
        <motion.path
          d={toothPath}
          fill="url(#glowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        {/* Outer Tooth Contour - Self-drawing line */}
        <motion.path
          d={toothPath}
          stroke="url(#toothGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Crown Detail 1 */}
        <motion.path
          d={crownDetail1}
          stroke="#0F3D3E"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="dark:stroke-mint-light"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{
            duration: 1.4,
            delay: 1.0,
            ease: "easeOut",
          }}
        />

        {/* Crown Detail 2 */}
        <motion.path
          d={crownDetail2}
          stroke="#0F3D3E"
          strokeWidth="2"
          strokeLinecap="round"
          className="dark:stroke-mint-light"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{
            duration: 1.4,
            delay: 1.2,
            ease: "easeOut",
          }}
        />

        {/* Root Groove */}
        <motion.path
          d={rootGroove}
          stroke="#FF7A59"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: "easeOut",
          }}
        />

        {/* Little decorative star sparkle */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0, type: "spring" }}
        >
          <path
            d="M 148 45 Q 148 55 138 55 Q 148 55 148 65 Q 148 55 158 55 Q 148 55 148 45 Z"
            fill="#FF7A59"
          />
        </motion.g>

        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.3, type: "spring" }}
        >
          <path
            d="M 52 75 Q 52 82 45 82 Q 52 82 52 89 Q 52 82 59 82 Q 52 82 52 75 Z"
            fill="#2B7A5C"
            className="dark:fill-mint"
          />
        </motion.g>
      </svg>
    </div>
  );
};
