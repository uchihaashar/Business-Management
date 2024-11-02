import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'> hello  <br />  <span className='text-3xl font-semibold'>Ashar ✌️</span></h1>
        <button className='px-5 py-2 text-lg font-medium bg-red-700 rounded tex-white-md'>Log Out</button>
    </div>
  ) 
}

export default Header