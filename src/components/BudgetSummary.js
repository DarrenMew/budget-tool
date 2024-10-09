import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const BudgetSummary = ({ items, currency }) => {
  const totalIncome = items
    .filter(item => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  
  const totalExpenses = items
    .filter(item => item.amount < 0)
    .reduce((acc, item) => acc + Math.abs(item.amount), 0);
  
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: {formatCurrency(totalIncome, currency)}</p>
      <p>Total Expenses: {formatCurrency(totalExpenses, currency)}</p>
      <p>Balance: 
        <span className={balance >= 0 ? 'balance-positive' : 'balance-negative'}>
          {formatCurrency(balance, currency)}
        </span>
      </p>
    </div>
  );
};

export default BudgetSummary;