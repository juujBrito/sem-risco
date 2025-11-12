import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Users, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background border-b p-4 flex items-center gap-4 z-10">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold flex-1">Sobre o Sem Risco</h2>
      </header>

      {/* Content */}
      <main className="p-6 max-w-2xl mx-auto space-y-6">
        {/* Logo Section */}
        <div className="text-center py-6">
          <Logo size="lg" showText={true} />
        </div>

        {/* Mission */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Nossa Missão</h3>
              <p className="text-sm text-muted-foreground">
                Proporcionar segurança alimentar para milhões de brasileiros com restrições 
                dietéticas, tornando a escolha de alimentos segura, rápida e confiável.
              </p>
            </div>
          </div>
        </Card>

        {/* How It Works */}
        <Card className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Como Funciona</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O Sem Risco usa tecnologia de ponta para garantir sua segurança alimentar:
              </p>
            </div>
          </div>
          <div className="space-y-4 ml-9">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">1. Escaneamento de Código de Barras</h4>
              <p className="text-xs text-muted-foreground">
                Escaneie produtos embalados para verificação instantânea contra nossa 
                base de dados colaborativa.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">2. Identificação por IA</h4>
              <p className="text-xs text-muted-foreground">
                Tire fotos de alimentos e nossa inteligência artificial identifica 
                ingredientes potencialmente perigosos.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">3. Análise Personalizada</h4>
              <p className="text-xs text-muted-foreground">
                Cada resultado é personalizado para seu perfil único de restrições 
                alimentares.
              </p>
            </div>
          </div>
        </Card>

        {/* Impact */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Nosso Impacto</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Protegendo mais de 60 milhões de brasileiros com:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Alergias alimentares
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Intolerâncias (lactose, glúten, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Restrições religiosas e culturais
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Segurança e Privacidade</h3>
              <p className="text-sm text-muted-foreground">
                Seus dados pessoais e perfil alimentar são protegidos com criptografia 
                de ponta. Nunca compartilhamos suas informações com terceiros.
              </p>
            </div>
          </div>
        </Card>

        {/* Version */}
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            Versão 1.0.0 (Beta)
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
