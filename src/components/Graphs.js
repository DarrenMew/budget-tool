import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Graphs = ({ transactions }) => {
  const income = transactions.filter(item => item.amount > 0);
  const expenses = transactions.filter(item => item.amount < 0);

  // Check if there is any income or expenses to display
  if (income.length === 0 && expenses.length === 0) {
    return <div>No transactions available to display charts.</div>;
  }

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = Math.abs(expenses.reduce((acc, item) => acc + item.amount, 0));

  const incomeData = {
    labels: income.map(item => item.description),
    datasets: [
      {
        label: 'Income',
        data: income.map(item => item.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const expenseData = {
    labels: expenses.map(item => item.description),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(item => Math.abs(item.amount)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const percentageData = {
    labels: ['Expenses', 'Remaining Income'],
    datasets: [
      {
        data: [totalExpenses, totalIncome - totalExpenses],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  return (
    <div>
      {income.length > 0 && (
        <>
          <h2>Income Chart</h2>
          <Bar data={incomeData} />
        </>
      )}
      
      {expenses.length > 0 && (
        <>
          <h2>Expenses Chart</h2>
          <Bar data={expenseData} />
        </>
      )}
      
      {totalIncome > 0 && totalExpenses > 0 && (
        <>
          <h2>Expenses as Percentage of Income</h2>
          <Pie data={percentageData} />
        </>
      )}
    </div>
  );
};

export default Graphs;