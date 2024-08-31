import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])  

  const handleDecrement = (id) =>{
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  }

  const handleIncrement = (id) =>{
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  const deleteCartItem = (id) =>{
    setCart(prevCart => prevCart.filter(item => item.id === id ? !id :item))
  }


  const addProductToCart = (product) =>{
    const existingProduct = cart.find(item => item.id === product.id)

    if(existingProduct){
      return alert('Product already in cart')
    }

    else{
      setCart(prevCart => [...prevCart,{...product, count: 1}])
      
      alert('Product added to cart successfully');

    }

  }

  const handleCheckout = () =>{
    setCart([])
    alert('Checkout successful')
  }

  

  return (
    <div>
      <Header 
        showCart={showCart} 
        setShowCart={setShowCart}
        cart={cart}
      />
      {showCart && 
        <Cart 
          cart={cart} 
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleDelete={deleteCartItem}
          handleCheckout={handleCheckout}
        />
      }
      
      <Products addProductToCart={addProductToCart} />
    </div>
  )
}

export default App
