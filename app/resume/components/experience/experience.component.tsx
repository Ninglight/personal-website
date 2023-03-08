import { CardComponent } from "../card/card.component"
import { ExperienceComponentProps } from "./experience.model"
import Image from 'next/image';
import styles from './experience.module.css';

export const ExperienceComponent = ({ experience }: ExperienceComponentProps) => {
    return (
        <CardComponent tag={experience.tag}>
            <Image className={styles.title} src={experience.icon} alt={experience.title} width={40} height={40} />
            <p className={styles.title}>{experience.title}</p>
            <p className={styles.subtitle}>{experience.subtitle}</p>
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: experience.text }}></p>
        </CardComponent>
    )
}