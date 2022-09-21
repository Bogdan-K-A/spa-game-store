import React from 'react'
import { Button } from '../button/Button'
import { CartItem } from '../cartItem/CartItem'
import { calcTotalPrice } from '../utils'
import './CartMenu.css'

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <ul className="cart-menu__game-list">
        {items.length > 0
          ? items.map((game) => <CartItem {...game} key={game.id} />)
          : 'Корзина пуста'}
      </ul>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  )
}
