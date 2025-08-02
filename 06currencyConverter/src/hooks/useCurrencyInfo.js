import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
  // const [data, setData] = useState({});
  // this using async await
  // useEffect(async () => {
  //     let res = await fetch('');
  //     let finalRes = await res.json();
  //     setData(finalRes[currency]);
  // }, [currency])
  // this usnig promise chain
//   useEffect(() => {
//     fetch(`https://api.frankfurter.app/latest?from=${currency}
// `)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//   }, [currency]);
//   return data;
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react"; // React hooks

// Custom hook banaya jo base currency lega (default USD)
const useCurrencyInfo = (base = "USD") => {
  const [rates, setRates] = useState({}); // Currency rates ko state me store karenge
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getRates = async () => {
      try {
        setLoading(true); // Jab fetch start ho
        const res = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
        const data = await res.json(); // JSON me convert
        setRates(data.rates); // Rates state me set
      } catch (error) {
        console.error("Error fetching currency rates:", error); // Agar error aaye
      } finally {
        setLoading(false); // End me loading false
      }
    };

    getRates(); // Function call kar rahe
  }, [base]); // Jab base currency change ho to firse fetch ho

  return { rates, loading }; // Data return kar rahe
};

export default useCurrencyInfo;
