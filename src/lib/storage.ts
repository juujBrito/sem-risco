export type PlanType = 'free' | 'plus' | 'premium';

export interface AppSettings {
  activeProfileId: string;
  plan: PlanType;
  scanCount: number;
  lastScanDate: string;
  geminiApiKey?: string;
}

export const PLAN_LIMITS = {
  free: {
    scansPerMonth: 10,
    historyLimit: 5,
    price: 0,
    features: ['10 scans por mês', 'Últimos 5 itens do histórico', 'Análise básica'],
  },
  plus: {
    scansPerMonth: 50,
    historyLimit: 30,
    price: 9.90,
    features: ['50 scans por mês', 'Últimos 30 itens do histórico', 'Análise detalhada', 'Sem anúncios'],
  },
  premium: {
    scansPerMonth: Infinity,
    historyLimit: Infinity,
    price: 19.90,
    features: ['Scans ilimitados', 'Histórico completo', 'Análise avançada com IA', 'Sem anúncios', 'Suporte prioritário', 'Alertas personalizados'],
  },
} as const;

const STORAGE_KEY = 'semRisco.appSettings';

export const getSettings = (): AppSettings | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;
  return JSON.parse(data);
};

export const saveSettings = (settings: AppSettings): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};

export const clearSettings = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const resetMonthlyScanCount = (settings: AppSettings): AppSettings => {
  const now = new Date();
  const lastScan = new Date(settings.lastScanDate);
  
  // Reset if it's a new month
  if (now.getMonth() !== lastScan.getMonth() || now.getFullYear() !== lastScan.getFullYear()) {
    return {
      ...settings,
      scanCount: 0,
      lastScanDate: now.toISOString(),
    };
  }
  
  return settings;
};
