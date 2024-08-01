import React from 'react'
import List from "./List"
import Cart from './Cart';
import { useSelector } from 'react-redux'
function App() {
  const productList = useSelector(state=>state.cart[0]);
  const cartList = useSelector(state => state.cart[1]);
  console.log(cartList)
  console.log(productList);
  return (
    <div>
      <ul>
        {
          productList.map((elem)=><List name={elem.name} id={elem.id} quantity={elem.quantity} price={elem.price}/>)
        }
      </ul>
      <ul>
        {
          cartList.map((elem)=> <Cart name={elem.name} quantity={elem.quantity} price={elem.price} />)
        }
      </ul>

    </div>
  )
}

export default App