import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Scan, Flashlight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ScanBarcode = () => {
  const navigate = useNavigate();
  const [isFlashOn, setIsFlashOn] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center gap-4 text-white z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate("/")}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold flex-1">Escanear Código de Barras</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsFlashOn(!isFlashOn)}
          className={`text-white hover:bg-white/20 ${isFlashOn ? "bg-white/20" : ""}`}
        >
          <Flashlight className="h-5 w-5" />
        </Button>
      </header>

      {/* Camera View (Placeholder) */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Scanner Frame */}
        <div className="relative w-80 h-48">
          <div className="absolute inset-0 border-2 border-white/30 rounded-lg">
            {/* Corner decorators */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
          </div>
          
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary animate-pulse" 
               style={{ animation: "scan 2s ease-in-out infinite" }} />
        </div>

        {/* Instructions */}
        <div className="absolute bottom-32 left-0 right-0 px-6">
          <Card className="p-4 bg-black/70 backdrop-blur-sm border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Scan className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-sm">
                Posicione o código de barras dentro do quadro para escanear
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Manual Entry */}
      <div className="p-6 bg-gradient-to-t from-black to-transparent">
        <Button
          variant="outline"
          className="w-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
          onClick={() => {}}
        >
          Digitar código manualmente
        </Button>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% {
            top: 0;
            opacity: 1;
          }
          50% {
            top: 100%;
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default ScanBarcode;
