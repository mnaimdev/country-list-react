import React, { useEffect, useState } from 'react';
import style from './country.module.css';

const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        onSearch(searchText);
    }, [searchText]);

  return (
   <>
     <div className={style.searchContainer}>
        <h2 style={{textAlign: 'center'}}>Country List</h2>
        <input type="search" 
        className={style.search} 
        placeholder='Search a Country' 
        value={searchText}
        onChange={handleSearch}
        />
     </div>
   </>
  )
}

export default Search;