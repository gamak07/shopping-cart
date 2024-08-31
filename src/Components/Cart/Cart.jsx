import React from 'react'
import TotalProductPrice from '../TotalProductPrice/TotalProductPrice'
import CartItems from '../CartItems/CartItems'

const Cart = ({cart, handleDelete, handleDecrement, handleIncrement, handleCheckout}) => {

  const totalPrice = cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.count), 0);
  
  const isCartEmpty = cart.length === 0
  
  return (
    <>
    {isCartEmpty ? null :
    <div className='flex flex-col gap-[1rem] bg-[#4d4a47] fixed overflow-y-auto w-[80%] max-h-[80vh] left-[50%] translate-x-[-50%] px-[1rem] py-[1.5rem] mb:p-[10px]'>
        <h1 className='text-center text-[#ffffff] text-[30px] font-bold mb:text-[20px]'>Shopping cart</h1>
        <div className='w-[100%] flex gap-[1rem] mb:flex-col'>
          <div className='flex flex-col gap-[1rem] w-[75%] mb:w-[100%]'>
            {cart.map((cartItem, index)=>(
              <div key={index} className='bg-[#ffffff] flex flex-col '>
                  <CartItems 
                    image={cartItem.image} 
                    name={cartItem.name} 
                    price={cartItem.price} 
                    itemsLeft={cartItem.itemsLeft}
                    id={cartItem.id}
                    count={cartItem.count}
                    cart={cart} 
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleDelete={handleDelete}
                  />
              </div>
            ))}
            </div>
            <div className='flex w-[25%] h-[fit-content] mb:w-[100%]'>
              <TotalProductPrice  totalPrice={totalPrice} handleCheckout={handleCheckout} />
            </div>
          </div>
        </div>
    }</>
  )
}

export default Cart