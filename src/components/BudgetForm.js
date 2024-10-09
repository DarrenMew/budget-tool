import React, { useState } from 'react';

const BudgetForm = ({ addTransaction, currency }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addTransaction({ description, amount: parseFloat(amount), date: new Date().toLocaleDateString() });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="budget-form">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input-field"
        required
      />
      <button type="submit" className="submit-button">Add Transaction</button>
    </form>
  );
};

export default BudgetForm;