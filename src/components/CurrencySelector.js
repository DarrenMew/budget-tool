import React from 'react';

const CurrencySelector = ({ currency, setCurrency }) => {
  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="currency-selector">
      <option value="ZAR">Rands (ZAR)</option>
      <option value="USD">US Dollar (USD)</option>
      <option value="EUR">Euro (EUR)</option>
      {/* Add more currencies as needed */}
    </select>
  );
};

export default CurrencySelector;