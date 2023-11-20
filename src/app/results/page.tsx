import Link from '../../../node_modules/next/link'
import CategoryContainer from './categoryContainer'
import styles from './page.module.css'
import { IoPersonCircleSharp } from 'react-icons/io5'

// eventually we can break this up into separate components if that makes sense, for now I've just framed some spaces out and inserted placeholder content. We can also refactor some of the redundant blocks (icon columns) once we start to finalize a layout to clean up the code a bit.

export default function Results() {
  return (
    // I want to add basic accordian items here
    <div className={styles.checklistResultsContainer}>
      <h1>Health Checklist Results</h1>
      {/* <CategoryContainer /> */}
      <div className={styles.topRow}>
        <div className={styles.topRowColumn}>
          <IoPersonCircleSharp style={{ fontSize: '100pt' }} />
          User's name
        </div>
        <div className={styles.topRowColumn}>GENDER AGE</div>
      </div>
      <div className={styles.statsContainer}>
        <h3>Heading - potential space for stats, icons, visual egagement</h3>
        <div className={styles.statsRow}>
          <div className={styles.topRowColumn}>
            <IoPersonCircleSharp style={{ fontSize: '50pt' }} />
            Label/stat
          </div>
          <div className={styles.topRowColumn}>
            <IoPersonCircleSharp style={{ fontSize: '50pt' }} />
            Label/stat
          </div>
          <div className={styles.topRowColumn}>
            <IoPersonCircleSharp style={{ fontSize: '50pt' }} />
            Label/stat
          </div>
        </div>
      </div>

      <div className={styles.contentRow}>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatem quibusdam, hic ipsam ad assumenda dolorum, eum molestias
          temporibus, voluptatibus dolorem? Laborum doloremque reiciendis id
          fugiat recusandae velit earum quas?
        </p>
      </div>
      <div className={styles.contentRow}>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatem quibusdam, hic ipsam ad assumenda dolorum, eum molestias
          temporibus, voluptatibus dolorem? Laborum doloremque reiciendis id
          fugiat recusandae velit earum quas?
        </p>
      </div>
      <div className={styles.contentRow}>
        <h2>Interactive Links/Buttons</h2>
        <p>Potential space for accordian, tabs, buttons etc.</p>
      </div>
      <Link href="/">
        <div className={styles.userInputButton}>Update Inputs</div>
      </Link>
    </div>
  )
}
