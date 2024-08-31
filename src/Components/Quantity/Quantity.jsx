import React, { useState } from 'react'
import DecrementQuantity from '../Buttons/DecrementQuantity'
import IncrementQuantity from '../Buttons/IncrementQuantity'

const Quantity = ({handleDecrement, handleIncrement, count, id, itemsRemaining}) => {
    
    
  return (
    <div className='flex items-center'>
        <DecrementQuantity onDecrement={()=> handleDecrement(id)}/>
        <p className='flex items-center justify-center h-[1rem] px-[2rem] mb:px-[10px]'>
            {count}
        </p>
        <IncrementQuantity onIncrement={()=> handleIncrement(id)} itemsRemaining={itemsRemaining} />
    </div>
  )
}

export default Quantity