import { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { AiOutlineSync } from "react-icons/ai";

const getStorage = () =>{
  const defaultValue = localStorage.getItem('count');
  if(defaultValue){
    const defaultValue = JSON.parse(localStorage.getItem('count'));
    return defaultValue;
  }
  else{
    return 0;
  }

}
const setStorage= (count) =>{
  localStorage.setItem('count', JSON.stringify(count));
}


function App() {

  const [counter, setCounter] = useState(getStorage);
  setStorage(counter);
  console.log("counter : "+counter);

  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const increase = () => {
    setCounter(counter + 1);
  };
  

  return (
    <main className="container">
      <div className="counter-text">{counter}</div>
      <div className="controler">
        <button className="button" type="button" onClick={decrease}>
          <ImMinus />
        </button>
        <button className="button" type="button" onClick={reset}>
          <AiOutlineSync />
        </button>
        <button className="button" type="button" onClick={increase}>
          <ImPlus />
        </button>
      </div>
    </main>
  );
}

export default App;
