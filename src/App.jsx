import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';
import style from './components/country.module.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
  }

  const removeCountry = (name) => {
    const filterCountry = countries.filter((country) => country.name.common !== name);
    return setCountries(filterCountry);
  }

  const onSearch = (search) => {
   const searchValue = search.toLowerCase();
   const filterValue = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchValue);
   });
   
   setCountries(filterValue);
  }


  useEffect(() => {
   fetchData('https://restcountries.com/v3.1/all');
  }, []);


  return (
    <>
      
      <Search onSearch={onSearch} />
      <div className={style.container}>
        {countries.map((item, index) => {
            return <Countries countries={item} key={index} removeCountry={removeCountry} />
          })}
      </div>
    </>
  )
}

export default App;
