import { Shield, Heart } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { shield: 40, heart: 20, text: "text-lg" },
    md: { shield: 80, heart: 40, text: "text-3xl" },
    lg: { shield: 120, heart: 60, text: "text-5xl" }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-flex items-center justify-center">
        <Shield
          className="text-primary fill-primary"
          size={currentSize.shield}
          strokeWidth={1.5}
        />
        <Heart
          className="absolute text-white fill-white"
          size={currentSize.heart}
          strokeWidth={0}
        />
      </div>
      {showText && (
        <h1 className={`font-bold text-foreground ${currentSize.text}`}>
          Sem Risco
        </h1>
      )}
    </div>
  );
};
