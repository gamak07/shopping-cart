import React from 'react'

const DecrementQuantity = ({onDecrement}) => {
  return (
    <button 
        onClick={onDecrement} 
        className='flex justify-center items-center font-bold h-[2rem] w-[2rem] bg-[#ec5f02] hover:bg-[#f79239] text-[#ffffff]'
    >
        -
    </button>
  )
}

export default DecrementQuantity