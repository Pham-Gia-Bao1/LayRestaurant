// src/SearchBar.tsx
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4 bg-white box-shadow rounded-lg">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="text"
          placeholder="500"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Manila"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="text"
          placeholder="Fri 3, Nov"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Capacity</label>
        <input
          type="text"
          placeholder="5"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <button
        type="button"
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        <SearchIcon />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
