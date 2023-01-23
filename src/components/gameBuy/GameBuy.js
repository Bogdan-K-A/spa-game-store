import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../button/Button'
import './GameBuy.css'

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.itemsInCart)
  const isItemInCart = items.some((item) => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation()
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))
    }
  }

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} грн.</span>
      <Button
        onClick={handleClick}
        type={isItemInCart ? 'secondary' : 'primary'}
      >
        {isItemInCart ? 'Удалить' : 'В Корзину'}
      </Button>
    </div>
  )
}
