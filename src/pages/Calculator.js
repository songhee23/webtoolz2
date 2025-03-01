import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;
    
    let res;
    switch (operation) {
      case "plus": res = n1 + n2; break;
      case "minus": res = n1 - n2; break;
      case "multiply": res = n1 * n2; break;
      case "divide": res = n2 !== 0 ? n1 / n2 : "NaN"; break;
      default: res = "";
    }
    setResult(res);
  };

  return (
    <div>
      <h2>사칙연산 계산기</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <div>
        <button onClick={() => calculate("plus")}>+ 더하기</button>
        <button onClick={() => calculate("minus")}>- 빼기</button>
        <button onClick={() => calculate("multiply")}>× 곱하기</button>
        <button onClick={() => calculate("divide")}>÷ 나누기</button>
      </div>
      <h3>결과: {result}</h3>
    </div>
  );
};

export default Calculator;
