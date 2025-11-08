import { BalanceCard } from '@/components/BalanceCard';
import { TransactionForm } from '@/components/TransactionForm';
import { TransactionList } from '@/components/TransactionList';
import { useTransactions } from '@/hooks/useTransactions';
import { Wallet } from 'lucide-react';

const Index = () => {
  const { transactions, addTransaction, deleteTransaction, totalIncome, totalExpense, balance } =
    useTransactions();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-primary rounded-2xl">
            <Wallet className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Controle Financeiro do Paulo Augusto</h1>
            <p className="text-sm text-muted-foreground">Gerencie suas finanças facilmente</p>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <BalanceCard title="Saldo Total" amount={balance} type="balance" />
          <BalanceCard title="Receitas" amount={totalIncome} type="income" />
          <BalanceCard title="Despesas" amount={totalExpense} type="expense" />
        </div>

        {/* Transaction Form */}
        <TransactionForm onAddTransaction={addTransaction} />

        {/* Transactions List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Transações Recentes</h2>
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </div>
      </div>
    </div>
  );
};

export default Index;
