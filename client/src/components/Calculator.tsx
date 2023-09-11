import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number | string>("-");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleEvaluate = () => {
    fetch("http://localhost:4000/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: expression,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result !== undefined) {
          setResult(data.result);
        } else if (data.error) {
          setResult("Error");
        }
      })
      .catch((err) => {
        setResult("Error");
      });
  };

  const handleClear = () => {
    setExpression("");
    setResult("-");
  };

  return (
    <div className="calculator-container">
      <div>
        <input
          type="text"
          className="calculator-input"
          value={expression}
          onChange={handleInputChange}
          placeholder="Enter expression"
        />
      </div>
      <div className="calculator-buttons">
        <button
          className="calculator-button calculator-button-evaluate"
          onClick={handleEvaluate}
        >
          =
        </button>
        <button
          className="calculator-button calculator-button-clear"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div className="calculator-result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
