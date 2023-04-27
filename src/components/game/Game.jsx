import { useState } from 'react'
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'

/* let array = Array(9).fill(0) - passamos nessa funcao com qtd de posicoes e em fill o valor em q a 1ª pos começará, mas como react nao pode usar let, passaremos uma const dentro da função:*/

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))

  return (
    <div className={styles.game}>
      {
        gameState.map((value, pos)=>
          <GameOption 
            key={`game-option-pos-${pos}`}
          />
        )
      } 
    </div>
  )
}

export default Game