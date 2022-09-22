import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/orderItem/OrderItem'
import { calcTotalPrice } from '../../components/utils'

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart)

  if (items.length < 1) {
    return <h1>Ваша корзину пуста</h1>
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} key={game.id} />
        ))}
      </div>
      <div className="order-page__right">
        <span>
          {items.length} товаров на сумму {calcTotalPrice(items)} руб.
        </span>
      </div>
    </div>
  )
}
