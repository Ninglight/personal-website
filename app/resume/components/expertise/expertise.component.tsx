import { CardComponent } from "../card/card.component";
import { ExpertiseComponentProps } from "./expertise.model";
import styles from './expertise.module.css';

export const ExpertiseComponent = ({ expertise }: ExpertiseComponentProps) => {
    return (
        <CardComponent>
            <p className={styles.title}>{expertise.title}</p>
            <p className={styles.subtitle}>{expertise.text}</p>
        </CardComponent>
    )
}