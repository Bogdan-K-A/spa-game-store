import { useState } from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../utils'
import { CartMenu } from '../cartMenu/CartMenu'
import { BsCart } from 'react-icons/bs'
import './CartBlock.css'
import { ItemsInCart } from '../itemsInCart/ItemsInCart'

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector((state) => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BsCart
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice ? (
        <span className="cart-block__total-price"> {totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  )
}
