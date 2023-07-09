import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ keyChange, keyword }) => {
  return (
    <div className='flex items-center bg-gray-300 rounded-[10px] p-1 mb-[1.5em]'>
        <MdSearch 
            className='search-icon' 
            size='1.3em' 
        />
        <input
            className='border-none bg-gray-300 focus:outline-none'
            onChange={(e) => keyChange(e.target.value)}
            type='text'
            placeholder='ketik buat cari bro...' 
            value={keyword}
        />
    </div>
  )
}

export default Search