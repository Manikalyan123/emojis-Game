import './index.css'

const ScoreCard = props => {
  const {score, isWinorLose, restart} = props
  const playAgain = () => {
    restart()
  }

  let result
  let imgUrl
  if (isWinorLose) {
    result = 'Loss'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  } else {
    result = 'Win'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  }
  return (
    <div className="emojis-cont">
      <div>
        <div>
          <h1>You {result}</h1>
          <p>score</p>
          <p>{score}/12</p>
        </div>
        <img src={imgUrl} alt="" />
      </div>
      <button type="button" className="button" onClick={playAgain}>
        Play Again
      </button>
    </div>
  )
}
export default ScoreCard
