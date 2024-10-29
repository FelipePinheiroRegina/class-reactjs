import styles from './styles.module.css'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, useState } from 'react'

import { PropsPosts } from '../../posts'
import { Content } from '../../posts'

interface Props {
    post: PropsPosts
}

export function Post({ post }: Props) {
    const [ comment,  setComment  ] = useState('')
    const [ comments, setComments ] = useState<string[]>([])

    function structHtml(line: Content) {
        switch(line.key) {
            case 'paragraph':
                return <p key={line.content}> {line.content}</p>

            case 'link':
               return ( <p key={line.content} className={styles.links}>
                            <a href={line.content}>{line.content}</a>
                        </p> 
                    )
                
            case 'hash':
                return (
                    <p key={line.content} className={styles.links}>
                        <a href="">#{line.content}</a> 
                    </p>
                
                )
        }
    }
    
    const dateUtcBrazil = new Date(post.created_at).toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
    })

    const dateFormat = format(post.created_at, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const distanceNow = formatDistanceToNow(post.created_at, {
        addSuffix: true,
        locale: ptBR
    })

    function handleAddComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, comment])
        setComment('')
    }

    function handleWriteComment(event: ChangeEvent<HTMLTextAreaElement>) {
        setComment(event.target.value)
    }

    function handleDeleteComment(commentDelete: string) {
        const filterComments = comments.filter(comment => comment !== commentDelete)
        setComments(filterComments)
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <div className={styles.contentAuthor}>
                    <Avatar 
                        src={post.avatar}
                    />

                    <div className={styles.infoAuthor}>
                        <strong>{post.name}</strong>
                        <span>{post.role}</span>
                    </div>
                </div>

                <time 
                    title={dateFormat}
                    dateTime={dateUtcBrazil}
                    className={styles.dateTime}
                >
                    {distanceNow}
                </time>

            </header>

            <div className={styles.main}>
                { post.content &&
                    post.content.map(line => (
                        structHtml(line)
                    ))
                }
            </div>

            <form 
                onSubmit={handleAddComment}
                className={styles.feedback}
                >
                <strong>
                    Deixe seu feedback
                </strong>

                <textarea
                    value={comment} 
                    onChange={handleWriteComment}
                    placeholder='Escreva um comentário...'
                    required
                >

                </textarea>

                <footer>
                    <button
                        className={styles.button}
                        type='submit'
                        disabled={comment.length === 0}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments &&
                    comments.map(item => (
                        <Comment 
                            key={item} 
                            comment={item}
                            handleDeleteComment={handleDeleteComment}
                        />
                    ))
                }
            </div>
        </section>
    )
}