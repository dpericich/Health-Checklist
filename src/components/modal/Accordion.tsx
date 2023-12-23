import { useState } from 'react'

const Accordion = ({ item }: any) => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <div className="border-2">
        {item.notes.map((item, i) => {
          return (
            <div key={i} className="border-2 p-3">
              {!checked ? (
                <span>
                  <p className="text-xl font-bold">{item.title}</p>
                  <p style={{ fontFamily: 'Verdana', fontSize: '12pt' }}>
                    {item.content.substring(0, 75)}...{' '}
                    <button
                      className=" text-accent"
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
                    {item.content}
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
          )
        })}
      </div>
    </>
  )
}

export default Accordion

{
  /* <div className="flex flex-col gap-3">
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-3xl">Why</p>
        </div>
        <div className="collapse-content">
          <p className='font-["Verdana"]'>{item.comment}</p>
        </div>
      </div>
      {item.test ? (
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p className="text-3xl">Test</p>
          </div>
          <div className="collapse-content">
            <p className='font-["Verdana"]'>{item.test}</p>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div> */
}
