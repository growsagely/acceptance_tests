import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number | string>("-");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleEvaluate = () => {
    try {
      // This is not the safest way to evaluate an expression,
      // but it's a simple way to handle it for this example.
      // In a real-world application, you might want to use a
      // library or a different method to evaluate expressions safely.
      const evalResult = eval(expression);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
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
