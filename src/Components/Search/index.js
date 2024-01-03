import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debouncedSearch, clearResults } from '../../store/slices/searchSlice'
import { debounce } from 'lodash';

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState([]);
  const results = useSelector((state) => state.search.results);
  const debouncedSearchDispatch = debounce((query) => dispatch(debouncedSearch(query)), 300);


  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearchDispatch(query);
  
  };

  const handleClearResults = () => {
    setSearchQuery('');
    dispatch(clearResults());
  };

  

  return (
  
    <div className='flex justify-center font-Oswald mt-[50px]'>
      <input
        className='w-[500px] h-[50px] rounded-bg text-center'
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search characters..."
      />
      <button className='bg-red-500 font-Oswald rounded w-[50px] h-[50px] ml-[5px]' onClick={handleClearResults}>CLEAR</button>
    <div>
        {searchQuery && (
          <div>
            {results.map((result) => (
              <div className='text-white' key={result.id}>{result.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;