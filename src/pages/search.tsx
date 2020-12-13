import React from 'react'

export const Search: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
          name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  )
}

export default Search;
