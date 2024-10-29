import styles from './styles.module.css'

export function Avatar({hasBorder = true, src}) {
    return (
        <img 
            className={hasBorder ? styles.avatarHasBorder : styles.avatar} 
            src={src}
        />
    )
}