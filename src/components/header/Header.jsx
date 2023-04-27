import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Subfooter from "../subfooter/Subfooter"
import Icon from '../icon/Icon'

function Header ({children}) {
  return (
    <div className={styles.header}>
      <Title>Tic-Tac-Toe</Title>
      <Subtitle>(Jogo da Velha)</Subtitle>
      <Subfooter>criado por Diego Takehara</Subfooter>
      <div className={styles.iconContent}>
        <Icon iconName="github" /*size="100px" - para quando quiser trocar o tamanho default*/ link="http://github.com/diegotakehara" />
      </div>
    </div>
  )
}

export default Header