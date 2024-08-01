import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { increaseQuantity , decreaseQuantity } from './Components/features/cartSlice'
function list({id , name , quantity , price}) {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-4 w-1/2'>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <div className='grid grid-cols-3 gap-5 w-1/2'>
        <button onClick={()=>dispatch(decreaseQuantity(id))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>dispatch(increaseQuantity(id))}>+</button>
      </div>
    </div>
    
  )
}

export default list