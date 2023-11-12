import Link from '../../../node_modules/next/link';
import CategoryContainer from './categoryContainer';
import styles from './page.module.css';

export default function Results() {
    return(
        // I want to add basic accordian items here
        <div className={styles.checklistResultsContainer}>
            <h1>Health Checklist Results</h1>
            <CategoryContainer />
            <Link href="/">
                <div className={styles.userInputButton}>Update Inputs</div>
            </Link>
        </div>

    )
};