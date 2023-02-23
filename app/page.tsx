import Image from 'next/image'
import styles from './page.module.css'
import avatar from '../public/avatar.png'
import valentinbourreau from '../public/valentinbourreau.svg'
import github from '../public/github.svg'
import dribbble from '../public/dribbble.svg'
import behance from '../public/behance.svg'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
        
        <div className="container">
          <div className={styles.cover}>
            <Image className={styles.avatar} src={avatar} alt="valentin bourreau picture" width={70} height={70} placeholder="blur" />
            <Image className={styles.logo} src={valentinbourreau} alt="valentin bourreau logo" width={162} height={14} priority />
            <h1 className={styles.title}>Front-end engineer</h1>
            <p className={styles.description}>
              pationate by crafting static website or application.<br/>
              Mainly work on <b>React 18</b> and <b>Next.js 13</b>. A Javacript lover.
            </p>
            <div className={styles.actions}>
              <Link href="https://www.linkedin.com/in/valentin-bourreau/">
                <button className={styles.button}>Connect with me</button>
              </Link>
              <div className={styles.socialNetwork}>
                <Link href="https://github.com/Ninglight">
                  <Image src={github} alt="github logo" width={20} height={20} />
                </Link>
                <Link href="https://dribbble.com/valentinbourreau">
                  <Image src={dribbble} alt="dribbble logo" width={20} height={20} />
                </Link>
                <Link href="https://www.behance.net/valentinbourreau">
                  <Image src={behance} alt="behance logo" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
