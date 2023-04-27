import { useState, useEffect } from 'react' /*useEffect é sempre usada quando queremos uma atualização sem que o usuario tenha interagido*/
import styles from './Game.module.css'
import Icon from '../icon/Icon'

import GameOption from '../gameOption/GameOption'

/* let array = Array(9).fill(0) - passamos nessa funcao com qtd de posicoes e em fill o valor em q a 1ª pos começará, mas como react nao pode usar let, passaremos uma const dentro da função:*/

/*Gabarito: array de possibilidade para ser campeão*/
const winnerTable = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)

  const handleClick = (pos) => {
    if (gameState[pos] === 0 && winner === 0) {
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayer
      setGameState(newGameState)
    }
    //console.log(pos)    
  }

  /*useEffect((=>{}, [])) sempre dois parametros, 1º arrowfunction (+ facil q função) e 2º um array=o q será modificado(funciona mto para variaveis), quando nao passa nada para o array, só será executado uma vez qnd componente for montado no dom - O ARRAY EM BRANCO É QNDO ESTA MONTANDO COMPONENTE - UTIL PARA CHAMADAS DE APIS, BUSCA DADOS ENQT A PAG AINDA ESTA SENDO CARREGADA, EXEMPLO A PAGINA DO YT Q ABRE E CARREGA OS VIDEOS*/
  /* useEffect(()=>{
    console.log("use effect 01 - em branco")
  }, []) ou seja, ocorre somente ao carregar a pagina*/
  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if (sum === 3 || sum === -3) {
        setWinner(sum / 3)
      } 
    })
  }

  useEffect(()=>{
    setCurrentPlayer(currentPlayer * -1) //console.log("use effect 02 - em game state")
    verifyGame()
  }, [gameState]) //ocorre sempre q ha interacao
  
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