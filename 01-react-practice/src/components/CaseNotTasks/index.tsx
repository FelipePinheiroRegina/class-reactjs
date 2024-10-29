import styles from './styles.module.css'
import { Clipboard } from '@phosphor-icons/react'

export function CaseNotTasks() {
    return (
        <div className={styles.div}>
            <Clipboard/>
            <div className={styles.phrases}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}