import React from "react"; // React import

// Component props le raha: currency, amount, onCurrencyChange, onAmountChange, currencies
const CurrencyInput = ({ currency, amount, onCurrencyChange, onAmountChange, currencies }) => {
  return (
    <div className="flex gap-4 items-center justify-center mb-4">
      {/* Amount input field */}
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)} // Jab value change ho to function call
        className="w-32 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Currency dropdown select */}
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)} // Jab currency select change ho
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {/* Har currency option ko render kar rahe */}
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
