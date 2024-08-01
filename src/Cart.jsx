import React from 'react'

function Cart({name , quantity , price}) {
  let total = quantity * price
  return (
    <div className='grid grid-cols-3 gap-5 w-fit'>
        <p>{name}</p>
        <p>{`${quantity} * ${price}`}</p>
        <p>{total}</p>
    </div>
  )
}

export default Cart