import styles from './styles.module.css'
import { ImgHTMLAttributes } from 'react'

interface PropsImage extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean
}

export function Avatar({hasBorder = true, ...props}: PropsImage) {
    return (
        <img 
            className={hasBorder ? styles.avatarHasBorder : styles.avatar} 
            {...props}
        />
    )
}