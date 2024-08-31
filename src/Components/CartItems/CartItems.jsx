import React from 'react'
import Quantity from '../Quantity/Quantity'
import DeleteButton from '../Buttons/DeleteButton'

const CartItems = ({image, name, price, count, setCount, handleDecrement, handleIncrement, handleDelete,quantity, id, itemsLeft}) => {
  
  
  const totalPrice = count * price
  const itemsRemaining = itemsLeft - count
  
  
  return (
      <div className='bg-[#ffffff] flex flex-col w-[100%] px-[1rem] py-[10px] mb:p-[5px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center '>
            <div className='h-[5rem] w-[5rem] mb:h-[4rem] mb:w-[4rem]'>
              <img src={image} alt={name} className='h-full w-full' />
            </div>
            <div>
              <p className='font-bold text-[20px] mb:text-[15px]'>{name}</p>
              
              <p className='italic text-[#f79239] text-[12px]'>{itemsRemaining == 0 ? ('Out of stock'): `${itemsRemaining} units available`}</p>
            </div>
          </div>
          <p className='font-bold text-[20px] mb:text-[15px]'>#{totalPrice}</p>
        </div>
        <div className='flex items-center justify-between'>
          <DeleteButton handleDelete={() =>handleDelete(id)} />
          <Quantity 
            count={count}
            setCount={setCount}
            quantity={quantity}
            id={id}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            itemsRemaining={itemsRemaining}
          />
        </div>
      </div>
  )
}

export default CartItems