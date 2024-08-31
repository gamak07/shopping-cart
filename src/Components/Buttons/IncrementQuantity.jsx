import React, { useState } from 'react'

const IncrementQuantity = ({onIncrement, itemsRemaining}) => {
  const isDisable = itemsRemaining === 0

  
  

  const handleDisable = () => {
    if (!isDisable) {
      onIncrement()
    }
  }
  return (
    <button 
        onClick={handleDisable}
        disabled={isDisable}
        className={`flex justify-center items-center font-bold h-[2rem] w-[2rem] bg-[#ec5f02] hover:bg-[#f79239] ${isDisable ? 'bg-[#f79239]' : ''}`}
    >
        +
    </button>
  )
}

export default IncrementQuantity