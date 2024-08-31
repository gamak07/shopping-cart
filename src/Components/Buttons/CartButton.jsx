import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const CartButton = ({onShowCart, cart}) => {

  const itemsInCart = cart.length

  return (
    <div>
        <button 
            className="relative flex items-center"
            onClick={onShowCart}
        >
          {!itemsInCart <=0 &&
            <p className='absolute top-[-1rem] right-[-1rem] h-[2rem] w-[2rem] flex items-center justify-center bg-[#ec5f02] text-[#ffffff] rounded-full'>
              {itemsInCart}
            </p>
          }
            <TiShoppingCart className='text-[30px]'/>
        </button>
    </div>
  )
}

export default CartButton