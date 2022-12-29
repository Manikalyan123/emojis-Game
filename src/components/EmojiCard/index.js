// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="listOrder" onClick={onEmoji}>
      <img src={emojiUrl} alt={emojiName} />
    </li>
  )
}
export default EmojiCard
