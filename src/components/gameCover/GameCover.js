import './GameCover.css'

export const GameCover = ({ image = '' }) => {
  return (
    <div
      className="game-cover"
      style={{ backgroundImage: ` url(${process.env.PUBLIC_URL + image})` }}
    />
  )
}
