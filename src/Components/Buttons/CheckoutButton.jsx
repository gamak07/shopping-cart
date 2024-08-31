import React from 'react'

const CheckoutButton = ({totalPrice, handleCheckout}) => {
  return (
    <div className='w-full p-[10px]'>
        <button 
            className='w-full bg-[#ec5f02] p-[1rem] rounded-[10px] mb:p-[10px]'
            onClick={handleCheckout}
        >
            <p className='font-bold text-[18px] text-[#ffffff] mb:text-[15px]'>Checkout <span>(#{totalPrice})</span></p>
        </button>
    </div>
    
  )
}

export default CheckoutButton