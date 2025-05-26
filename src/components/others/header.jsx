import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between '>
            <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-bold'>Mahesh 👋</span> </h1>
            <button className='bg-red-500  rounded-md text-white text-xl font-medium px-5 py-2 cursor-pointer h-12   '>Log Out </button>
        </div>
    )
}

export default Header