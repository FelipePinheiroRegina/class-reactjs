import styles from './styles.module.css'
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'
import { PropsTask } from '../../pages/App'

interface Props {
    task: PropsTask
    handleCheckTask:  (description: string) => void
    handleRemoveTask: (description: string) => void
}

export function Card({task, handleCheckTask, handleRemoveTask}: Props) {
    
    return (
        <section className={styles.card}>
            <div>
                <span>
                    {task.completed ?   
                        <CheckCircle 
                            onClick={() => handleCheckTask(task.description)}
                            className={styles.checked} weight="fill"
                        /> 
                        : 
                        <Circle 
                            onClick={() => handleCheckTask(task.description)}
                            className={styles.unchecked}
                        />
                    }
                </span>
                
                <p className={task.completed ? styles.descriptionCheck : styles.description}>
                    {task.description}
                </p>
            </div>

            <span>
                <Trash 
                    onClick={() => handleRemoveTask(task.description)}
                    className={styles.remove}
                />
            </span>
        </section>
    )
}