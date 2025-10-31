import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface BalanceCardProps {
  title: string;
  amount: number;
  type: 'balance' | 'income' | 'expense';
}

export const BalanceCard = ({ title, amount, type }: BalanceCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const getIcon = () => {
    switch (type) {
      case 'income':
        return <TrendingUp className="h-6 w-6" />;
      case 'expense':
        return <TrendingDown className="h-6 w-6" />;
      default:
        return <Wallet className="h-6 w-6" />;
    }
  };

  const getCardClasses = () => {
    switch (type) {
      case 'income':
        return 'bg-gradient-income text-income-foreground border-0';
      case 'expense':
        return 'bg-gradient-expense text-expense-foreground border-0';
      default:
        return 'bg-gradient-balance text-primary-foreground border-0';
    }
  };

  return (
    <Card className={`p-6 ${getCardClasses()}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm opacity-90">{title}</span>
        {getIcon()}
      </div>
      <p className="text-3xl font-bold">{formatCurrency(amount)}</p>
    </Card>
  );
};
