import { TbHealthRecognition } from 'react-icons/tb'

const Footer = () => {
  let currentYear = new Date().getFullYear()
  return (
    <div className="sticky footer inset-x-0 bottom-0 flex flex-col justify-center items-center gap-2 text-white p-10 bg-zinc-900">
      <div className="flex gap-2 justify-center items-center w-[100%] font-sans">
        <span className="text-white text-3xl">
          <TbHealthRecognition className="text-orange-500" />
        </span>
        <p className="font-serif text-xl md:text-3xl text-white">
          HEALTH CHECKLIST
        </p>
      </div>

      <p className="font-sans text-xs">
        Copyright © {currentYear} - Health Checklist
      </p>
    </div>
  )
}

export default Footer
