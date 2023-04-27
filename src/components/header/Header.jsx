import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Subfooter from "../subfooter/Subfooter"

function Header ({children}) {
  return (
    <div className={styles.header}>
      <Title>Tic-Tac-Toe</Title>
      <Subtitle>(Jogo da Velha)</Subtitle>
      <Subfooter>criado por Diego Takehara</Subfooter>
    </div>
  )
}

export default Header