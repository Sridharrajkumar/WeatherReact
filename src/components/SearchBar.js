import React from 'react'
import searchlogo from '../Image/search.png'
import classes from './SearchBar.module.css'


const SearchBar = ({ setCity,handleClick }) => {
  
  
  return (
    <>
      <div className={classes.search}>
          <input type="text" placeholder='Enter City Name' spellCheck='false' onChange={e => setCity(e.target.value)}/>
         <button onClick={handleClick}><img src={searchlogo} alt="serach-icon" /></button>
      </div>
      
    </>
  )
}

export default SearchBar

