import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 80, className = "" }: LogoProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Shield Base - Heater shield style with flat top, curved sides, pointed bottom */}
      <motion.path
        d="M256 80 C256 80, 140 80, 120 100 C100 120, 100 200, 100 240 C100 320, 180 420, 256 460 C332 420, 412 320, 412 240 C412 200, 412 120, 392 100 C372 80, 256 80, 256 80 Z"
        fill="#FF7622"
        stroke="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {/* Heart Cutout (white negative space) - centered within shield */}
      <motion.path
        d="M256 320 L206 275 C186 257, 184 228, 202 210 C216 196, 238 196, 252 210 L256 214 L260 210 C274 196, 296 196, 310 210 C328 228, 326 257, 306 275 L256 320 Z"
        fill="#FFFFFF"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
};
