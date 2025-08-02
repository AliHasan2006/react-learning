import React, { useState, useEffect } from "react"; // React hooks import kar rahe hain
import useCurrencyInfo from "../hooks/useCurrencyInfo"
import CurrencyInput from "./CurrencyInput"; // CurrencyInput component import

const Converter = () => {
  // States define kar rahe hain
  const [fromCurrency, setFromCurrency] = useState("USD"); // Default from currency
  const [toCurrency, setToCurrency] = useState("INR");     // Default to currency
  const [amount, setAmount] = useState(1);                 // Amount to convert
  const [converted, setConverted] = useState(0);           // Converted amount

  const { rates, loading } = useCurrencyRates(fromCurrency); // Custom hook se data mil raha
  const currencies = Object.keys(rates); // Saare currencies ka array bana rahe hain

  useEffect(() => {
    if (rates && rates[toCurrency]) {
      // Jab bhi amount, toCurrency ya rates change hote hain
      setConverted((amount * rates[toCurrency]).toFixed(2)); // Convert kar ke update kar rahe
    }
  }, [amount, toCurrency, rates]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading rates...</p>
      ) : (
        <>
          {/* First currency input */}
          <CurrencyInput
            currency={fromCurrency}
            amount={amount}
            onCurrencyChange={setFromCurrency}
            onAmountChange={setAmount}
            currencies={currencies}
          />

          {/* Second currency input (converted value) */}
          <CurrencyInput
            currency={toCurrency}
            amount={converted}
            onCurrencyChange={setToCurrency}
            onAmountChange={() => {}}
            currencies={currencies}
          />
        </>
      )}
    </div>
  );
};

export default Converter;
