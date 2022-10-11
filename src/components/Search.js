import React from 'react';

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
