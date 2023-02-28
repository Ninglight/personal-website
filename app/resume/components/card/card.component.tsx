import { ReactNode } from 'react'
import styles from './card.module.css'

export const CardComponent = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}