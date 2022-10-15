import React from 'react';

import './search.css';

export default function Search() {
  return (
    <form className='search'>
        <input 
            type='text' 
            placeholder="Search"
            className='search--input'
        />
        <button className='main--button'>Go</button>
    </form>
  )
}