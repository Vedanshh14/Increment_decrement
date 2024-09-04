import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);

  }
  function increaseHandler(){
    setCount(count+1);

  }
  function resetHandler(){
    setCount(0);

  }
  return (
   
    <div className=" flex flex-col justify-center items-center bg-[#344151] w-[100vw] h-[100vh]">
      <div className="my-10 text-cyan-200 text-4xl">
        Increment and Decrement
      </div>

      <div className="flex bg-white rounded ">
      <button onClick={decreaseHandler} className="mx-4 my-2 text-xl">-</button>
      <div className="my-2 mx-4 text-xl">{count}</div>
      <button onClick={increaseHandler} className="mx-4 my-2 text-xl">+</button>
      </div>

      <div className="bg-cyan-200 py-2 px-5 rounded my-10">
        <button onClick={resetHandler} >Reset</button>
      </div>
    </div>
    
  
  );
}

export default App;
