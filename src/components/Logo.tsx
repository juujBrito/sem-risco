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
      initial="hidden"
      animate="visible"
    >
      {/* SHIELD LAYER 
        FIX: The top edge now uses a Bezier curve (C) to create the 
        "brace" shape (hump in the middle) instead of a flat line.
      */}
      <motion.path
        d="M256 48C212 48 130 68 64 96C64 200 110 360 256 480C402 360 448 200 448 96C382 68 300 48 256 48Z"
        fill="#FF7622"
        stroke="none"
        variants={{
          hidden: { scale: 0.5, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { duration: 0.5, ease: "easeOut" } 
          }
        }}
      />

      {/* HEART LAYER 
        Centered and balanced within the new shield shape
      */}
      <motion.path
        d="M256 336L234 316C156 245 104 198 104 140C104 92 141 56 189 56C216 56 242 68 256 89C270 68 296 56 323 56C371 56 408 92 408 140C408 198 356 245 278 316L256 336Z"
        fill="#FFFFFF"
        // Shifted down slightly (translateY: 30) to sit optically in the "belly" of the shield
        style={{ transformOrigin: "center", translateY: 30 }} 
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 } 
          }
        }}
      />
    </motion.svg>
  );
};