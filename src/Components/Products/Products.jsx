import React from 'react'
import ProductData from '../../Data'
import ProductList from '../ProductList/ProductList'

const Products = ({addProductToCart}) => {
  

  return (
    <div className='w-[100%] grid grid-cols-3 gap-[1rem] bg-[#f1f0ef] px-[4rem] py-[2rem] mb:grid-cols-2 mb:gap-[5px] mb:p-[1rem]'>
        {ProductData.map((data, index) =>(
            <ProductList 
                key={index} 
                id={data.id}
                image={data.image} 
                name={data.name} 
                price={data.price} 
                itemsLeft={data.itemsLeft}
                addProductToCart={addProductToCart}
                product={data}
            />
        ))}
    </div>
  )
}

export default Products