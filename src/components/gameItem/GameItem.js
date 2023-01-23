import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrenrGame } from '../../redux/games/reducer'
import { GameBuy } from '../gameBuy/GameBuy'
import { GameCover } from '../gameCover/GameCover'
import { GameGenre } from '../gameGenre/GameGenre'
import './GameItem.css'

export const GameItem = ({ game }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrenrGame(game))
    navigate(`/app/${game.title}`)
  }

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  )
}
