import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scan, Camera, User, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => navigate("/about")}>
          <Info className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Logo size="lg" showText={true} />
            <p className="mt-4 text-muted-foreground text-sm max-w-xs mx-auto">
              Seu assistente pessoal de segurança alimentar
            </p>
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <button 
                className="w-full text-left"
                onClick={() => navigate("/scan-barcode")}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Scan className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Escanear Código de Barras
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Escaneie produtos embalados para verificação instantânea
                    </p>
                  </div>
                </div>
              </button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <button 
                className="w-full text-left"
                onClick={() => navigate("/identify-food")}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Identificar por Foto
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tire uma foto do alimento para análise com IA
                    </p>
                  </div>
                </div>
              </button>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="text-center pt-6">
            <p className="text-xs text-muted-foreground">
              Protegendo mais de 60 milhões de brasileiros com restrições alimentares
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
