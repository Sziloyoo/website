import React, { useState } from 'react';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar websiteName="WEBSITE NAME" imagePath="./avatar.jpg" />
      <div className="grid place-items-center h-screen">
        <h1 className="text-3xl font-bold">Yoo!</h1>
        <button
          className="bg-indigo-100 p-1 mbg-indigo-50 hover:bg-indigo-200 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-150"
          onClick={() => setCount(count + 1)}
        >
          count: {count}
        </button>
        <span className="text-2xl font-light text-gray-600">Testing...</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus sequi temporibus
          delectus quibusdam facilis odio, eveniet ex reiciendis, nisi placeat aperiam et nemo unde
          modi numquam, assumenda ea sed.
        </p>
      </div>
    </>
  );
};
