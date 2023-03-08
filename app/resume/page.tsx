import Image from 'next/image';
import styles from './resume.module.css';
import avatar from './../../public/avatar.png';
import valentinbourreau from './../../public/valentinbourreau.svg';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EXPERIENCES, EXPERTISES, QUALIFICATIONS } from './resume.constants';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ExpertisesComponent } from './components/expertises/expertises.component';

export default function Resume() {
  return (
    <main className={styles.main}>
        <div className="container">
              <div className={styles.cover}>
                <Image className={styles.avatar} src={avatar} alt="valentin bourreau picture" width={70} height={70} placeholder="blur" />
                <Image className={styles.logo} src={valentinbourreau} alt="valentin bourreau logo" width={162} height={14} priority />
                <h1 className={styles.title}>Front-end engineer</h1>
            </div>
            <ExpertisesComponent title={"Expertises"} expertises={EXPERTISES} />
            <ExperiencesComponent title={"Job Experiences"} experiences={EXPERIENCES} />
            <QualificationsComponent title={"Qualifications"} qualifications={QUALIFICATIONS} />
        </div>
    </main>
  )
}
