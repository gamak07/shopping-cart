import React from 'react'
import CartButton from '../Buttons/CartButton'

const Header = ({showCart, setShowCart, cart}) => {
    const handleShowCart = () =>{
        setShowCart(!showCart)
    }
    const itemsInCart = cart.length
    
  return (
    <div className='sticky top-0 flex items-center justify-between w-[100%] px-[5rem] py-[1.5rem] bg-[#aea7a2] mb:px-[1rem]'>
        <div className='font-bold text-[20px] text-[#f1f0ef]'>
          Cart {
            !itemsInCart <=0 && 
            `(${itemsInCart} items in cart)`
          }
        </div>
        <CartButton onShowCart={handleShowCart} cart={cart} />
    </div>
  )
}

export default Header