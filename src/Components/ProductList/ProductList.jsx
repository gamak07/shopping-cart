import React from 'react'
import AddToCartButton from '../Buttons/AddToCartButton'

const ProductList = ({image, name, price, addProductToCart, product}) => {
  return (
    <div className='flex flex-col gap-[1rem] w-[100%] border bg-[#ec5f02] p-[1rem] mb:gap-[5px]'>
        <div className='h-[20rem] w-full mb:h-[10rem]'>
            <img src={image} alt={name} className='h-full w-full'/>
        </div>
        <div>
            <p className='font-bold text-[20px] text-[#ffffff] mb:text-[15px]'>{name}</p>
            <p className='font-bold text-[20px] text-[#ffffff] mb:text-[15px]'>#{price}</p>
        </div>
        <AddToCartButton addProductToCart={addProductToCart} product={product} />
    </div>
  )
}

export default ProductList