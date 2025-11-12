import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, Image as ImageIcon, Flashlight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const IdentifyFood = () => {
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
        <h2 className="text-xl font-semibold flex-1">Identificar Alimento</h2>
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
        {/* Camera circle frame */}
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full" />
          <div className="absolute inset-2 border-4 border-primary/50 rounded-full" />
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-32 left-0 right-0 px-6">
          <Card className="p-4 bg-black/70 backdrop-blur-sm border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Camera className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-sm">
                Posicione o alimento no centro para análise com IA
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 space-y-3 bg-gradient-to-t from-black to-transparent">
        {/* Capture Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-20 h-20 rounded-full bg-primary hover:bg-primary-hover p-0 shadow-lg"
            onClick={() => {}}
          >
            <Camera className="h-8 w-8" />
          </Button>
        </div>

        {/* Gallery Button */}
        <Button
          variant="outline"
          className="w-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
          onClick={() => {}}
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          Escolher da galeria
        </Button>
      </div>
    </div>
  );
};

export default IdentifyFood;
