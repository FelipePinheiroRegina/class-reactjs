import styles from './styles.module.css'
import { Avatar } from '../Avatar'
import { Trash, ThumbsUp } from '@phosphor-icons/react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

interface PropsComment {
    comment: string,
    handleDeleteComment: (comment: string) => void,
}

export function Comment({ comment, handleDeleteComment }: PropsComment) {
    const [ like, setLike ] = useState(0)

    const now = new Date()

    const dateUtcBrazil = new Date(now).toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
    })

    const dateFormat = format(now, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const distanceNow = formatDistanceToNow(now, {
        addSuffix: true,
        locale: ptBR
    })

    function handleLike() {
        setLike((state) => {
            return state + 1
        })
    }

    return (
        <section className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/FelipePinheiroRegina.png'/>

            <div className={styles.containerAll}>
                <div className={styles.card}>
                    <header className={styles.header}>
                        <div className={styles.authorInfo}>
                            <strong>Felipe Pinheiro <span>(Você)</span></strong>
                            <time
                                title={dateFormat}
                                dateTime={dateUtcBrazil}>
                                    {distanceNow} atrás
                            </time>
                        </div>

                        <Trash 
                            size={24}
                            onClick={() => handleDeleteComment(comment)}
                        />
                    </header>

                    <p className={styles.description}>
                        {comment}
                    </p>
                </div>
                
                <div className={`${styles.like} ${like > 0 ? styles.likeExists : ''}`}>
                    <ThumbsUp 
                        size={20}
                        onClick={handleLike}
                    />
                    
                    <div>
                        Aplaudir
                        <span>
                            {like}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}