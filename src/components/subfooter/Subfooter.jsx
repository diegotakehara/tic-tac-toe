import styles from './Subfooter.module.css'

function Subfooter ({children}) {
  return (
    <h6 className={styles.subfooter}>
      {children}
    </h6>
  )
}

export default Subfooter