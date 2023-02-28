import { SectionComponent } from './../section/section.component';
import { CardComponent } from './../card/card.component';
import styles from './experiences.module.css';
import ep from '../../../../public/experiences/ep.svg';


export interface Experience {
    tag?: string;
    icon: string;
    title: string;
    subtitle: string;
    text: string;
}

export const EXPERIENCES = [
    {
        tag: 'current job', 
        icon: ep, 
        title: 'Front-end engineer at EP', 
        subtitle: 'from feb. 2021 to today', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.<br/><br/> Est placerat in egestas erat imperdiet. Consectetur adipiscing elit ut aliquam purus sit amet. Tellus orci ac auctor augue mauris. Nec dui nunc mattis enim ut tellus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sollicitudin tempor id eu nisl nunc mi. Eu consequat ac felis donec et odio.", 
    }
]


export const ExperiencesComponent = () => {
    return (
        <SectionComponent title="Job Experiences">
                <div className={styles.grid}>
                    <CardComponent>
                        Front-end engineer at EP
                    </CardComponent>
                    <CardComponent>
                        Front-end engineer at EP
                    </CardComponent>
                    <CardComponent>
                        Front-end engineer at EP
                    </CardComponent>
                    <CardComponent>
                        Front-end engineer at EP
                    </CardComponent>
                    <CardComponent>
                        Front-end engineer at EP
                    </CardComponent>
                    <CardComponent>
                        Front-end engineer at EP
                    </CardComponent>
                </div>
            </SectionComponent>
    )
}