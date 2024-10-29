import styles from './styles.module.css'
import { Avatar } from '../Avatar'
import { PencilLine } from '@phosphor-icons/react'

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar 
                    src="https://github.com/FelipePinheiroRegina.png"
                />

                <strong>Felipe Pinheiro</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}