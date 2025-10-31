export type TransactionType = 'income' | 'expense';

export type TransactionCategory = 
  | 'Salário'
  | 'Freelance'
  | 'Investimentos'
  | 'Outros'
  | 'Alimentação'
  | 'Transporte'
  | 'Moradia'
  | 'Lazer'
  | 'Saúde'
  | 'Educação'
  | 'Compras';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: TransactionCategory;
  date: string;
}
