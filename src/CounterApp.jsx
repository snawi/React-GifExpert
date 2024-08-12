import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({value}) => {
  
  const [Counter, setCounter] = useState(value);

  const handleClick = () => {
    /*     console.log(e)
    /* console.log(newvalue) */
    setCounter(Counter + 1);
  };

  const handleDecrement = () => {
    setCounter(Counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <div className="p-4">
      <h1>Counter App</h1>
      <h2>{Counter}</h2>

      <button
        onClick={handleClick}
        className="bg-slate-500 p-2 rounded-md m-2 w-20 text-white text-[20px]"
      >
        +1
      </button>

      <button
        onClick={handleDecrement}
        className="bg-slate-500 p-2 rounded-md m-2 w-20 text-white text-[20px]"
      >
        -1
      </button>

      <button
        onClick={handleReset}
        className="bg-slate-500 p-2 rounded-md m-2 w-20 text-white text-[20px]"
      >
        reset
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
