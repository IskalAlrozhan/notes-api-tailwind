import React from 'react'
import { useNavigate } from 'react-router-dom'


const HeaderArchive = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between'>
      <h1>Notes App</h1>
      <span>Selamat Datang {user.name}</span>
      <div className='flex items-center justify-between'>
        <button className='bg-gray-300 border-none rounded-2xl py-[5px] px-[10px] mr-1 cursor-pointer hover:bg-gray-200'  onClick={()=> navigate("/")}>
          Home
        </button>
      </div>
    </div>
  )
}

export default HeaderArchive