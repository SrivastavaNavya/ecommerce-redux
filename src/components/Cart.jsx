import React from 'react'
import { useSelector } from 'react-redux'
import { getItemsSelector } from '../redux/slices/cartSlice'  //Ignore these errors, error with rename of cartSlice.jsx. Works properly.

function Cart() {
  // No need for .cart after creating getItemsSelector
  const items=useSelector(getItemsSelector)
  // const items=useSelector(state=>state)
  const total=items.reduce((a,b)=>a+b.price,0)
  // const total=items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='alert alert-success'>
      <div className="text-center">Total Items: {items.length} (Rs. {total})/-</div>
    </div>
  )
}

export default Cart
