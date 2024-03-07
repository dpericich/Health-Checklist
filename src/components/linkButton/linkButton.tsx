import Link from 'next/link'
import styles from './components.module.css'

interface LinkButtonProps {
  disabled?: boolean
  link: string
  text: string
}

interface ButtonProps {
  link?: string
  text: string
}

const EnabledButton = ({ link, text }: ButtonProps) => {
  return (
    <Link href={link || '/'} className="w-[100%]">
      {/* <div className={styles.userInputButton}>{text}</div> */}
      <div className="btn border-blue-500 bg-blue-500 text-gray-200 font-bold hover:text-white hover:bg-blue-500 p-3 rounded-md w-[100%] hover:scale-110 shadow-md shadow-zinc-400 transition-all font-sans mt-4">
        {text}
      </div>
    </Link>
  )
}

const DisabledButton = ({ text }: ButtonProps) => {
  return (
    <div className="btn btn-primary border-zinc-700 bg-zinc-700 text-gray-200 font-bold  p-3 rounded-md w-[100%] hover:bg-zinc-500 hover:border-zinc-500 cursor-not-allowed font-sans mt-4">
      {text}
    </div>
  )
}

const LinkButton = ({ disabled, link, text }: LinkButtonProps) => {
  return disabled ? (
    <DisabledButton text={text} />
  ) : (
    <EnabledButton link={link} text={text} />
  )
}

export default LinkButton
