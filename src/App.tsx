import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="grid place-items-center h-screen">
        <h1 className="text-3xl font-bold">Yoo!</h1>
        <button
          className="bg-indigo-100 p-1 mbg-indigo-50 hover:bg-indigo-200 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-150"
          onClick={() => setCount(count + 1)}
        >
          count: {count}
        </button>
      </div>
    </>
  );
}

export default App;
