import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const IncomeTable = ({ items, currency, deleteItem }) => {
  const incomeItems = items.filter(item => item.amount > 0);

  return (
    <div>
      <h2>Income</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ({currency})</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {incomeItems.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td className="income">{formatCurrency(item.amount, currency)}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => deleteItem(index)} className="delete-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="delete-icon"
                    fill="#e8eaed" // Set initial fill to white
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;