import { useState } from 'react'

const AccordionCard = ({ item }) => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <div className="p-3 bg-white rounded-md">
        {!checked ? (
          <span>
            <p className="text-2xl font-bold">{item.title}</p>
            <p style={{ fontFamily: 'Verdana', fontSize: '12pt' }}>
              {item.content.substring(0, 75)}{' '}
              <button
                className="text-accent"
                onClick={() => setChecked(!checked)}
              >
                More
              </button>
            </p>
          </span>
        ) : (
          <span>
            <p className="text-xl font-bold">{item.title}</p>
            <p style={{ fontFamily: 'Verdana', fontSize: '12pt' }}>
              {item.content}{' '}
              <button
                className="text-accent"
                onClick={() => setChecked(!checked)}
              >
                Less
              </button>
            </p>
          </span>
        )}
      </div>
    </>
  )
}

export default AccordionCard
