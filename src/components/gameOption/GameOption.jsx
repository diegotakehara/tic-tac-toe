import styles from './GameOption.module.css'
import Icon from '../icon/Icon'
{/*uma solução para muitos estados(por ex: sizes), para nao trocar um por um, criar um componente atraves de const q retorne essas opçoes dentro do jsx que nao sera exportado para outros lugares*/}
const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="27px" />

function GameOption ({ status, onClick }) {
  return (
    <div className={styles.gameOption} onClick={onClick}>
      { status === 1 && <Icon iconName="circle" /> }
      { status === -1 && <Icon iconName="x" /> } 
    </div>
  )
}

export default GameOption