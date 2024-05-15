import React from 'react'
import "./Searchbar.css"
function Searchbar() {
  return (
    <div className='search-bar'>
        <form className='search-form d-flex align-items-center'>
            <input type='text' name="query"
            placeholder='Search' title="Enter Search Keyword"/>
        <button type="submit" title='search'>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        </form>
      
    </div>
  )
}

export default Searchbar
