import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [calcScreen, setCalcScreen] = useState("");

  const displayContent = (content) => {
    setCalcScreen((prev) => prev + content);
  };

  const clearCalcScreen = () => {
    setCalcScreen("");
  };

  const deleteItem = () => {
    setCalcScreen((prev) => prev.slice(0, -1));
  };

  const exprEval = () => {
    try {
      setCalcScreen(eval(calcScreen)); // eval is used here, but be cautious of its security risks
    } catch {
      setCalcScreen("");
      alert("Invalid Expression");
    }
  };

  return (
    <div id="calculator">
      <input
        id="calcScreen"
        placeholder="0"
        type="text"
        className="form-control"
        value={calcScreen}
        readOnly
      />
      <div id="keys">
        <button onClick={clearCalcScreen} id="clear" className="numbers">AC</button>
        <button id="zero" className="numbers" onClick={() => displayContent('0')}>0</button>
        <button onClick={deleteItem} id="delete" className="numbers">
          <i className="fa-solid fa-delete-left"></i>
        </button>
        <button onClick={() => displayContent('/')} id="divide" className="numbers">
          <i className="fa-solid fa-divide"></i>
        </button>
        <button onClick={() => displayContent('7')} id="seven" className="numbers">7</button>
        <button onClick={() => displayContent('8')} id="eight" className="numbers">8</button>
        <button onClick={() => displayContent('9')} id="nine" className="numbers">9</button>
        <button onClick={() => displayContent('*')} id="multiplication" className="numbers">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button onClick={() => displayContent('4')} id="four" className="numbers">4</button>
        <button onClick={() => displayContent('5')} id="five" className="numbers">5</button>
        <button onClick={() => displayContent('6')} id="six" className="numbers">6</button>
        <button onClick={() => displayContent('-')} id="minus" className="numbers">
          <i className="fa-solid fa-minus "></i>
        </button>
        <button onClick={() => displayContent('1')} id="one" className="numbers">1</button>
        <button onClick={() => displayContent('2')} id="two" className="numbers">2</button>
        <button onClick={() => displayContent('3')} id="three" className="numbers">3</button>
        <button onClick={() => displayContent('+')} id="plus" className="numbers">
          <i className="fa-solid fa-plus"></i>
        </button>
        <button onClick={() => displayContent('.')} id="key3" className="numbers">.</button>
        <button id="key4" className="numbers">exp</button>
        <button onClick={exprEval} id="egual" className="numbers egual-buton">
          <i className="fa-solid fa-equals"></i>
        </button>
      </div>
    </div>
  );
};

export default Calculator;
