import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { TransactionType, TransactionCategory } from '@/types/transaction';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface TransactionFormProps {
  onAddTransaction: (transaction: {
    type: TransactionType;
    amount: number;
    description: string;
    category: TransactionCategory;
    date: string;
  }) => void;
}

const incomeCategories: TransactionCategory[] = ['Salário', 'Freelance', 'Investimentos', 'Outros'];
const expenseCategories: TransactionCategory[] = [
  'Alimentação',
  'Transporte',
  'Moradia',
  'Lazer',
  'Saúde',
  'Educação',
  'Compras',
  'Outros',
];

export const TransactionForm = ({ onAddTransaction }: TransactionFormProps) => {
  const [type, setType] = useState<TransactionType>('income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<TransactionCategory>('Salário');

  const categories = type === 'income' ? incomeCategories : expenseCategories;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAmount = parseFloat(amount);
    
    if (!numAmount || numAmount <= 0) {
      toast.error('Insira um valor válido');
      return;
    }

    if (!description.trim()) {
      toast.error('Adicione uma descrição');
      return;
    }

    onAddTransaction({
      type,
      amount: numAmount,
      description: description.trim(),
      category,
      date: new Date().toISOString(),
    });

    setAmount('');
    setDescription('');
    toast.success(type === 'income' ? 'Receita adicionada!' : 'Despesa adicionada!');
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Nova Transação</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant={type === 'income' ? 'default' : 'outline'}
            onClick={() => {
              setType('income');
              setCategory('Salário');
            }}
            className={type === 'income' ? 'bg-income hover:bg-income/90' : ''}
          >
            Receita
          </Button>
          <Button
            type="button"
            variant={type === 'expense' ? 'default' : 'outline'}
            onClick={() => {
              setType('expense');
              setCategory('Alimentação');
            }}
            className={type === 'expense' ? 'bg-expense hover:bg-expense/90' : ''}
          >
            Despesa
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Valor</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            placeholder="0,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Input
            id="description"
            placeholder="Ex: Salário mensal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Categoria</Label>
          <Select value={category} onValueChange={(value) => setCategory(value as TransactionCategory)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar
        </Button>
      </form>
    </Card>
  );
};
