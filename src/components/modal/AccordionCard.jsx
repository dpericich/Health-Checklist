import { useState } from 'react'

const AccordionCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 bg-white rounded-md shadow-md w-[95%] md:w-[83%]">
        {expanded ? (
          <span>
            <p className="text-xl font-bold font-serif">{item.title}</p>
            <p className="font-sans">
              {item.content}{' '}
              <button
                className="text-accent"
                onClick={() => setExpanded(!expanded)}
              >
                Less
              </button>
            </p>
          </span>
        ) : (
          <span>
            <p className="text-xl md:text-2xl font-bold my-1 font-serif">
              {item.title}
            </p>
            <p className="font-sans">
              {item.content.substring(0, 100)}{' '}
              <button
                className="text-accent"
                onClick={() => setExpanded(!expanded)}
              >
                More
              </button>
            </p>
          </span>
        )}
      </div>
    </div>
  )
}

export default AccordionCard
