import styles from './styles.module.css'
import logo from '../../assets/rocket.svg'
export function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={logo} 
                alt="Logo tipo foguete" 
                height={36}
                width={22}
            />

            <h1>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </h1>
        </header>
    )
}