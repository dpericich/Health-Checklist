import { TbHealthRecognition } from 'react-icons/tb'

const Loading = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-sky-700 to-blue-900">
      <div className="flex flex-col justify-center items-center bg-black/30 min-h-screen px-5 py-20">
        <TbHealthRecognition className="text-9xl text-orange-500 animate-ping ease-in-out" />
      </div>
    </div>
  )
}

export default Loading
