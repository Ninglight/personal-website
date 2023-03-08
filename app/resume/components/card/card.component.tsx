import { ReactNode } from 'react'
import { TagComponent } from '../tag/tag.component'
import { CardComponentProps } from './card.model'
import styles from './card.module.css'

export const CardComponent = ({ tag, children }: CardComponentProps) => {
    return (
        <div className={styles.card}>
            {tag ? 
                <div className={styles.tag}>
                    <TagComponent text={tag} />
                </div>
            : ''}
            {children}
        </div>
    )
}