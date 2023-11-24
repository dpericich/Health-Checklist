import Link from '../../node_modules/next/link';
import styles from './components.module.css';

interface LinkButtonProps {
    disabled?: boolean,
    link: string,
    text: string
};

interface ButtonProps {
    link?: string,
    text: string,
};

const EnabledButton = ({ link, text }: ButtonProps) => {
    return(
        <Link href={link || "/"}>
        <div className={styles.userInputButton}>{text}</div>
        </Link>
    );
};

const DisabledButton = ({ text }: ButtonProps) => {
    return(
        <div className={styles.disabledUserInputButton}>{text}</div>
    );
};

const LinkButton = ({ disabled, link, text }: LinkButtonProps) => {
    return disabled ? <DisabledButton text={text} /> : <EnabledButton link={link} text={text} />
};

export default LinkButton;