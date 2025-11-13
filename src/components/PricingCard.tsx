import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PlanType, PLAN_LIMITS } from '@/lib/storage';

interface PricingCardProps {
  plan: PlanType;
  currentPlan: PlanType;
  onSelect: (plan: PlanType) => void;
  isUpgrading: boolean;
}

export const PricingCard = ({ plan, currentPlan, onSelect, isUpgrading }: PricingCardProps) => {
  const planData = PLAN_LIMITS[plan];
  const isCurrentPlan = currentPlan === plan;
  const canUpgrade = 
    (plan === 'plus' && currentPlan === 'free') ||
    (plan === 'premium' && (currentPlan === 'free' || currentPlan === 'plus'));
  
  const getPlanIcon = () => {
    if (plan === 'premium') return <Crown className="text-primary" size={32} />;
    if (plan === 'plus') return <Sparkles className="text-primary" size={32} />;
    return null;
  };

  const getPlanName = () => {
    if (plan === 'free') return 'Grátis';
    if (plan === 'plus') return 'Plus';
    return 'Premium';
  };

  const isPopular = plan === 'plus';
  const isPremium = plan === 'premium';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={canUpgrade ? { scale: 1.02 } : undefined}
      className="relative"
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
            MAIS POPULAR
          </span>
        </div>
      )}
      
      <Card className={`p-6 ${
        isCurrentPlan 
          ? 'border-primary border-2 bg-primary/5' 
          : isPremium 
          ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5'
          : ''
      }`}>
        <div className="flex items-center gap-3 mb-4">
          {getPlanIcon()}
          <div>
            <h3 className="text-2xl font-bold text-foreground">{getPlanName()}</h3>
            {isCurrentPlan && (
              <span className="text-xs text-primary font-semibold">SEU PLANO ATUAL</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-foreground">
              {planData.price === 0 ? 'R$ 0' : `R$ ${planData.price.toFixed(2)}`}
            </span>
            {planData.price > 0 && (
              <span className="text-sm text-muted-foreground">/mês</span>
            )}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {planData.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check size={18} className="text-accent-safe mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={() => onSelect(plan)}
          disabled={isCurrentPlan || !canUpgrade || isUpgrading}
          variant={isPremium ? 'default' : isPopular ? 'default' : 'outline'}
          size="lg"
          className="w-full"
        >
          {isCurrentPlan 
            ? 'Plano Atual' 
            : isUpgrading 
            ? 'Processando...' 
            : `Escolher ${getPlanName()}`
          }
        </Button>
      </Card>
    </motion.div>
  );
};
