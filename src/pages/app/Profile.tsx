import { BottomNav } from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { getSettings, saveSettings, PLAN_LIMITS, PlanType } from '@/lib/storage';
import { db } from '@/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { Crown, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { PricingCard } from '@/components/PricingCard';

const Profile = () => {
  const settings = getSettings();
  const { toast } = useToast();
  const [upgrading, setUpgrading] = useState(false);
  
  const profile = useLiveQuery(
    async () => {
      if (!settings?.activeProfileId) return null;
      return await db.profiles.get(settings.activeProfileId);
    },
    [settings?.activeProfileId]
  );
  
  const handleUpgrade = async (newPlan: PlanType) => {
    if (settings?.plan === newPlan) return;
    
    setUpgrading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (settings) {
      saveSettings({ ...settings, plan: newPlan });
      const planName = newPlan === 'plus' ? 'Plus' : 'Premium';
      toast({
        title: 'Upgrade realizado!',
        description: `Você agora é ${planName}. Aproveite seus novos benefícios!`,
      });
    }
    
    setUpgrading(false);
  };
  
  const currentPlan = settings?.plan || 'free';
  const currentPlanData = PLAN_LIMITS[currentPlan];
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-foreground">Meu Perfil</h1>
      </header>
      
      <main className="p-6 space-y-6">
        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{profile?.avatar}</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">
                  {profile?.profileName}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {profile?.restrictions.length || 0} restrições configuradas
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
        
        {/* Current Plan Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-foreground">Meu Plano</h3>
          
          <Card className={`p-6 ${
            currentPlan === 'premium' 
              ? 'bg-gradient-to-br from-primary/20 to-primary/10 border-primary' 
              : currentPlan === 'plus'
              ? 'bg-gradient-to-br from-primary/15 to-primary/5 border-primary/50'
              : ''
          }`}>
            <div className="flex items-center gap-3 mb-3">
              {currentPlan !== 'free' && <Crown className="text-primary" size={32} />}
              <div>
                <h4 className="font-bold text-foreground">
                  Plano {currentPlan === 'free' ? 'Grátis' : currentPlan === 'plus' ? 'Plus' : 'Premium'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {currentPlan === 'premium' 
                    ? 'Obrigado por seu apoio!' 
                    : currentPlan === 'plus'
                    ? 'Você tem acesso a recursos avançados'
                    : 'Recursos básicos'
                  }
                </p>
              </div>
            </div>
            
            {currentPlan === 'free' && (
              <>
                <p className="text-sm text-muted-foreground mb-2">
                  Scans usados: <span className="font-semibold text-foreground">{settings?.scanCount} / {currentPlanData.scansPerMonth}</span> este mês
                </p>
                <p className="text-sm text-muted-foreground">
                  Histórico: <span className="font-semibold text-foreground">Últimos {currentPlanData.historyLimit} itens</span>
                </p>
              </>
            )}
            
            {currentPlan === 'plus' && (
              <>
                <p className="text-sm text-muted-foreground mb-2">
                  Scans usados: <span className="font-semibold text-foreground">{settings?.scanCount} / {currentPlanData.scansPerMonth}</span> este mês
                </p>
                <p className="text-sm text-muted-foreground">
                  Histórico: <span className="font-semibold text-foreground">Últimos {currentPlanData.historyLimit} itens</span>
                </p>
              </>
            )}
            
            {currentPlan === 'premium' && (
              <div className="space-y-2">
                {currentPlanData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-accent-safe" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
        
        {/* Pricing Plans */}
        {currentPlan !== 'premium' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              {currentPlan === 'free' ? 'Faça Upgrade' : 'Upgrade para Premium'}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {currentPlan === 'free' && (
                <PricingCard
                  plan="plus"
                  currentPlan={currentPlan}
                  onSelect={handleUpgrade}
                  isUpgrading={upgrading}
                />
              )}
              <PricingCard
                plan="premium"
                currentPlan={currentPlan}
                onSelect={handleUpgrade}
                isUpgrading={upgrading}
              />
            </div>
          </motion.div>
        )}
        
        {/* Restrictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-foreground">
            Minhas Restrições
          </h3>
          <Card className="p-4">
            {profile?.restrictions.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhuma restrição configurada</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile?.restrictions.map((restriction, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
                  >
                    {restriction}
                  </span>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
