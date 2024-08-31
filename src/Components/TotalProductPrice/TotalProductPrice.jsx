import React from 'react'
import CheckoutButton from '../Buttons/CheckoutButton'

const TotalProductPrice = ({totalPrice, handleCheckout}) => {
  
  return (
    <div className='flex flex-col border w-full flex justify-self-end bg-[#ffffff]'>
      <p className='py-[5px] px-[10px] mb:hidden'>Cart summary</p>
      <div className='flex items-center justify-between border-y p-[10px] mb:hidden'>
        <p>Sub-total</p>
        <span>#{totalPrice}</span>
      </div>
      <CheckoutButton totalPrice={totalPrice} handleCheckout={handleCheckout} />
    </div>
  )
}

export default TotalProductPrice