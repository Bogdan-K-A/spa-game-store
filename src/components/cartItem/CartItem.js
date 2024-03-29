import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './CartItem.css'

export const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id))
  }

  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} грн.</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  )
}
