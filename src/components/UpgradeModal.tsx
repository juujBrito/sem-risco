import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getSettings, PLAN_LIMITS } from '@/lib/storage';

interface UpgradeModalProps {
  open: boolean;
  onClose: () => void;
}

export const UpgradeModal = ({ open, onClose }: UpgradeModalProps) => {
  const navigate = useNavigate();
  const settings = getSettings();
  const currentPlan = settings?.plan || 'free';
  const planLimits = PLAN_LIMITS[currentPlan];

  const handleUpgrade = () => {
    onClose();
    navigate('/app/profile');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Limite de Scans Atingido</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4 text-center">
          {currentPlan === 'free' ? (
            <div className="flex gap-4 justify-center">
              <Sparkles className="text-primary" size={48} />
              <Crown className="text-primary" size={64} />
            </div>
          ) : (
            <Crown className="mx-auto text-primary" size={64} />
          )}

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">
              {currentPlan === 'free' 
                ? `Você usou seus ${planLimits.scansPerMonth} scans gratuitos este mês`
                : `Você usou seus ${planLimits.scansPerMonth} scans do plano Plus`
              }
            </h3>
            <p className="text-muted-foreground">
              {currentPlan === 'free'
                ? 'Faça upgrade e tenha mais scans ou scans ilimitados!'
                : 'Faça upgrade para Premium e tenha scans ilimitados!'
              }
            </p>
          </div>

          <div className="space-y-2">
            <Button onClick={handleUpgrade} size="lg" className="w-full">
              {currentPlan === 'free' ? 'Ver Planos' : 'Upgrade para Premium'}
            </Button>
            <Button onClick={onClose} variant="outline" size="lg" className="w-full">
              Agora Não
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
