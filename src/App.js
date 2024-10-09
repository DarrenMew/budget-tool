import React, { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import IncomeTable from './components/IncomeTable';
import ExpenseTable from './components/ExpenseTable';
import BudgetSummary from './components/BudgetSummary';
import CurrencySelector from './components/CurrencySelector';
import Graphs from './components/Graphs';

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [currency, setCurrency] = useState('ZAR');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  // Dummy data for testing
  useEffect(() => {
    if (transactions.length === 0) {
      const dummyTransactions = [
        { amount: 1000, description: 'Salary' },
        { amount: -200, description: 'Groceries' },
        { amount: 300, description: 'Side Job' },
        { amount: -100, description: 'Utilities' },
      ];
      setTransactions(dummyTransactions);
    }
  }, []);

  return (
    <div>
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <BudgetForm addTransaction={addTransaction} currency={currency} />
      <IncomeTable items={transactions} currency={currency} deleteItem={deleteTransaction} />
      <ExpenseTable items={transactions} currency={currency} deleteItem={deleteTransaction} />
      <BudgetSummary items={transactions} currency={currency} />
      <Graphs transactions={transactions} />
    </div>
  );
};

export default App;