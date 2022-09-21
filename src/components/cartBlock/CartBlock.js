import './CartBlock.css'
import { BsCart } from 'react-icons/bs'

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BsCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price"> 2332 руб.</span>
    </div>
  )
}
