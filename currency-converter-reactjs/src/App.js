import { useCallback, useState } from "react";
import "./styles.css";

export default function App() {
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("BRL");

  const [currencyAValue, setCurrencyAValue] = useState(0);
  const [currencyBValue, setCurrencyBValue] = useState(0);

  const converter = useCallback(() => {
    const from_to = `${currencyA}_${currencyB}`;
    const url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=2e2282f1c1fd83c440ff`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const cotacao = json[from_to];

        const conversao = (cotacao * parseFloat(currencyAValue)).toFixed(2);

        setCurrencyBValue(conversao);
      });
  }, [currencyA, currencyB, currencyAValue]);

  return (
    <div className="App">
      <h2>
        {currencyA} para {currencyB}
      </h2>
      <input
        type="number"
        min="0.01"
        step="0.01"
        placeholder={currencyA}
        onChange={(e) => setCurrencyAValue(e.target.value)}
      />
      <input type="button" value="Conversor" onClick={converter} />

      <h2>{currencyBValue}</h2>
    </div>
  );
}
