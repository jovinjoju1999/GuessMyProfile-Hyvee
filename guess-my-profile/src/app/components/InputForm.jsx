"use client";

import { useState } from 'react';

const NameForm = ({ onSubmit, onClear }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onSubmit(name);
    }
    setName("");
  };

  const handleClear = () => {
    setName('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-white-700">Name:</span>
        <input
        placeholder='Type in your name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-md focus:outline focus:ring-indigo-700 focus:border-indigo-500 sm:text-sm text-black"
        />
      </label>
      <div className='flex justify-center space-x-4'>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Guess
      </button>
      <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center px-4 py-2 ml-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Reset
        </button>
      </div>
      
    </form>
  );
};

export default NameForm;