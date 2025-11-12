import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  
  // Demo data - would come from scan/photo analysis
  const isSafe = false;
  const productName = "Biscoito Recheado de Chocolate";
  const restrictedIngredients = ["Leite", "Glúten", "Soja"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background border-b p-4 flex items-center gap-4 z-10">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold flex-1">Resultado da Análise</h2>
      </header>

      {/* Content */}
      <main className="p-6 max-w-2xl mx-auto space-y-6">
        {/* Result Card */}
        <Card className={`p-8 text-center ${isSafe ? "bg-safe-bg border-safe" : "bg-unsafe-bg border-unsafe"}`}>
          <div className="flex flex-col items-center gap-4">
            {isSafe ? (
              <>
                <CheckCircle className="h-20 w-20 text-safe" />
                <h3 className="text-3xl font-bold text-safe">
                  Seguro para você
                </h3>
                <p className="text-sm text-foreground">
                  Este produto não contém nenhum dos seus ingredientes restritos
                </p>
              </>
            ) : (
              <>
                <XCircle className="h-20 w-20 text-unsafe" />
                <h3 className="text-3xl font-bold text-unsafe">
                  Não seguro
                </h3>
                <p className="text-sm text-foreground">
                  Este produto contém ingredientes que você deve evitar
                </p>
              </>
            )}
          </div>
        </Card>

        {/* Product Info */}
        <Card className="p-6">
          <h4 className="font-semibold text-lg mb-3">Produto Analisado</h4>
          <p className="text-foreground">{productName}</p>
        </Card>

        {/* Restricted Ingredients (if unsafe) */}
        {!isSafe && (
          <Card className="p-6 border-unsafe">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-unsafe flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg">Ingredientes Restritos Encontrados</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Este produto contém os seguintes ingredientes do seu perfil
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {restrictedIngredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2 p-2 bg-unsafe-bg rounded-lg">
                  <div className="w-2 h-2 bg-unsafe rounded-full" />
                  <span className="text-sm font-medium">{ingredient}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Alternative Products */}
        {!isSafe && (
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <ShoppingBag className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-lg">Produtos Alternativos</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Sugestões de produtos similares seguros para você
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                <p className="font-medium text-sm">Biscoito Zero Lactose Sabor Chocolate</p>
                <p className="text-xs text-muted-foreground mt-1">Marca: NutriLife</p>
              </div>
              <div className="p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                <p className="font-medium text-sm">Biscoito Vegano de Cacau</p>
                <p className="text-xs text-muted-foreground mt-1">Marca: VeggieSnack</p>
              </div>
            </div>
          </Card>
        )}

        {/* Actions */}
        <div className="space-y-3 pt-4">
          <Button
            className="w-full bg-primary hover:bg-primary-hover"
            size="lg"
            onClick={() => navigate("/")}
          >
            Nova Verificação
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate("/profile")}
          >
            Editar Perfil
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Result;
