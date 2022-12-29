/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import ScoreCard from '../ScoreCard'

import EmojiCard from '../EmojiCard'

const prevEmojiIdList = []
class EmojiGame extends Component {
  state = {score: 0, topScore: 0, ids: [], theEnd: false}

  endGame = () => {
    this.setState({theEnd: true})
    console.log('hi')
  }

  updateTopScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
  }

  onClickEmoji = id => {
    const {ids} = this.state
    const updateScore = ids.length
    const isContains = ids.includes(id)
    if (isContains) {
      this.endGame()
    } else {
      this.setState(prevState => ({
        ids: [...prevState.ids, id],
        score: prevState.score + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gameCode = () => {
    const {score, topScore} = this.state
    const shuffledList = this.shuffledEmojisList()
    return (
      <div className="main-cont">
        <div className="navbar">
          <p>Score:{score}</p>
          <p>Top Score:{topScore}</p>
        </div>
        <div className="emojis-cont">
          <ul className="unOrderList">
            {shuffledList.map(each => (
              <EmojiCard
                emoji={each}
                key={each.id}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  restart = () => {
    this.set({ids: [], theEnd: false})
  }

  scoreCard = () => {
    const {ids, theEnd} = this.state
    const {length} = ids.length
    return (
      <div className="main-cont">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
          />
        </div>
        <ScoreCard score={length} isWinorLose={theEnd} restart={this.restart} />
        {this.updateTopScore({length})}
      </div>
    )
  }

  render() {
    const {ids, theEnd} = this.state
    let code
    if (theEnd || ids.length === 12) {
      code = this.scoreCard()
    } else if (theEnd === false) {
      code = this.gameCode()
    } else {
      code = this.wonCard()
    }

    return <div className="Cont">{code}</div>
  }
}
export default EmojiGame
