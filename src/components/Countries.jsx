import React from 'react';
import style from './country.module.css';

const Countries = (props) => {
    
    const {name, area, flags, region} = props.countries;

    const removeItem = (name) => {
        props.removeCountry(name);
    }

  return (
    <>
        
       <div className={style.child}>
            <img src={flags.png} className={style.img} alt="" />
            <p>Name: {name.common}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <button className={style.remove} onClick={() => removeItem(name.common)}>X</button>
       </div>
    </>
  )
}

export default Countries;