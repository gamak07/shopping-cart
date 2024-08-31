import React from 'react'

const AddToCartButton = ({addProductToCart, product}) => {
  return (
    <div>
        <button 
            className='bg-[#ffffff] w-full py-[1rem] text-[#ec5f02] font-bold text-[20px] mb:py-[10px] mb:text-[15px]'
            onClick={()=>addProductToCart(product)}
        >
            Add to cart
        </button>
    </div>
  )
}

export default AddToCartButton