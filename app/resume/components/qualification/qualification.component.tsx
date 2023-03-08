import { CardComponent } from "../card/card.component";
import Image from 'next/image';
import styles from './qualification.module.css';
import { QualificationComponentProps } from "./qualification.model";
import qualificationIcon from './../../../../public/qualification.svg'

export const QualificationComponent = ({ qualification }: QualificationComponentProps) => {
    return (
        <CardComponent>
            <div className={styles.qualification}>
                <Image className={styles.title} src={qualificationIcon} alt={"Qualification icon"} width={40} height={40} />
                <div>
                    <p className={styles.title}>{qualification.title}</p>
                    <p className={styles.subtitle}>{qualification.subtitle}</p>
                </div>
            </div>
        </CardComponent>
    )
}