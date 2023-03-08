import { ReactNode } from "react";
import styles from './section.module.css';

export const SectionComponent = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{children}</div>
        </section>
    )
}