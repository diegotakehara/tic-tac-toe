import { useState } from 'react'
import styles from './Game.module.css'
import Icon from '../icon/Icon'

import GameOption from '../gameOption/GameOption'

/* let array = Array(9).fill(0) - passamos nessa funcao com qtd de posicoes e em fill o valor em q a 1ª pos começará, mas como react nao pode usar let, passaremos uma const dentro da função:*/

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const handleClick = (pos) => {
    if (gameState[pos] === 0) {
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayer
      setCurrentPlayer(currentPlayer * -1)
      setGameState(newGameState)
    }
    //console.log(pos)    
  }

  return (
    <div className={styles.gameContent}>
      <div className={styles.game}>
      {
        gameState.map((value, pos)=>
          <GameOption 
            key={`game-option-pos-${pos}`}
            status={value}
            /*onClick={(pos)=>{console.log("CLICK: ", pos)}}*/
            onClick={() => handleClick(pos)}
          />
        )
      } 
      </div>
      <div className={styles.gameInfo}>
        <h4>Próximo a jogar:</h4>
        {
          currentPlayer === 1 && <Icon iconName="circle"/>
        }
        {
          currentPlayer === -1 && <Icon iconName="x"/>
        }
      </div>
    </div>    
  )
}

export default Game