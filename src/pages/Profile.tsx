import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Plus, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);

  const restrictions = {
    allergies: [
      { id: "peanut", label: "Amendoim" },
      { id: "milk", label: "Leite" },
      { id: "egg", label: "Ovo" },
      { id: "soy", label: "Soja" },
      { id: "wheat", label: "Trigo" },
      { id: "fish", label: "Peixe" },
      { id: "shellfish", label: "Frutos do mar" },
      { id: "tree-nuts", label: "Nozes" },
    ],
    intolerances: [
      { id: "lactose", label: "Lactose" },
      { id: "gluten", label: "Glúten" },
      { id: "fructose", label: "Frutose" },
    ],
    lifestyle: [
      { id: "vegetarian", label: "Vegetariano" },
      { id: "vegan", label: "Vegano" },
      { id: "halal", label: "Halal" },
      { id: "kosher", label: "Kosher" },
    ],
  };

  const toggleRestriction = (id: string) => {
    setSelectedRestrictions(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background border-b p-4 flex items-center gap-4 z-10">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold flex-1">Meu Perfil</h2>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      {/* Content */}
      <main className="p-6 max-w-2xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="text-center py-4">
          <Logo size="sm" showText={false} />
          <h3 className="mt-3 font-semibold text-lg">Perfil Principal</h3>
          <p className="text-sm text-muted-foreground">
            Selecione suas restrições alimentares
          </p>
        </div>

        {/* Allergies */}
        <Card className="p-6">
          <h4 className="font-semibold text-lg mb-4 text-foreground">
            Alergias
          </h4>
          <div className="space-y-3">
            {restrictions.allergies.map(item => (
              <label
                key={item.id}
                className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  checked={selectedRestrictions.includes(item.id)}
                  onCheckedChange={() => toggleRestriction(item.id)}
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </Card>

        {/* Intolerances */}
        <Card className="p-6">
          <h4 className="font-semibold text-lg mb-4 text-foreground">
            Intolerâncias
          </h4>
          <div className="space-y-3">
            {restrictions.intolerances.map(item => (
              <label
                key={item.id}
                className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  checked={selectedRestrictions.includes(item.id)}
                  onCheckedChange={() => toggleRestriction(item.id)}
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </Card>

        {/* Lifestyle */}
        <Card className="p-6">
          <h4 className="font-semibold text-lg mb-4 text-foreground">
            Estilo de Vida / Religião
          </h4>
          <div className="space-y-3">
            {restrictions.lifestyle.map(item => (
              <label
                key={item.id}
                className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  checked={selectedRestrictions.includes(item.id)}
                  onCheckedChange={() => toggleRestriction(item.id)}
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </Card>

        {/* Add Profile Button */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {}}
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Novo Perfil
        </Button>

        {/* Save Button */}
        <Button
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
          size="lg"
          onClick={() => navigate("/")}
        >
          Salvar Perfil
        </Button>
      </main>
    </div>
  );
};

export default Profile;
