import Image from 'next/image';
import styles from './resume.module.css';
import avatar from './../../public/avatar.png';
import valentinbourreau from './../../public/valentinbourreau.svg';
import { ExperiencesComponent } from './components/experiences/experiences.component';

export default function Resume() {
  return (
    <main className={styles.main}>
        <div className="container">
            <div className={styles.cover}>
                <Image className={styles.avatar} src={avatar} alt="valentin bourreau picture" width={70} height={70} placeholder="blur" />
                <Image className={styles.logo} src={valentinbourreau} alt="valentin bourreau logo" width={162} height={14} priority />
                <h1 className={styles.title}>Front-end engineer</h1>
            </div>
            <ExperiencesComponent />
        </div>
    </main>
  )
}
