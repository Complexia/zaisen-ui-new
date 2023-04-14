import { useState } from 'react';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(searchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center">
        <label className='text-black mb-1'>Search specific NFT, collection, or select from popular ones</label>
        <div className="flex w-full">
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                className="text-black border-2 border-gray-400 rounded-l px-2 py-1 flex-1"
            />
            <button
                type="button"
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-l-none rounded-r px-3 py-2"
            >
                Search
            </button>
        </div>
    </div>

 
  );
}



const Promotions = () => {
    return (
        <div className="h-screen flex flex-grow justify-start items-start">
            <SearchBox />
        </div>
    )
}

export default Promotions;