import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GameCover } from '../gameCover/GameCover'
import './OrderItem.css'
import { deleteItemFromCart } from '../../redux/cart/reducer'
export const OrderItem = ({ game }) => {
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">{game.price} грн.</div>
      <AiOutlineCloseCircle
        size={25}
        className="cart-item__delete-icon"
        onClick={handleDeleteClick}
      />
    </div>
  )
}
