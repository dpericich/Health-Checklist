import { useState, useEffect } from 'react'

const Accordion = ({ item }: any) => {
  const [checked, setChecked] = useState(false)
  const [test, setTest] = useState([])

  useEffect(() => {
    let result = []
    result.push(item.test)
    result.push(item.comment)
    setTest(result)
    console.log(result)
  }, [])

  return (
    <>
      <div className="border-2">
        <p>Why?</p>
        {!checked ? (
          <p>
            {item.comment.substring(0, 75)}...{' '}
            <button
              className="btn btn-xs btn-accent"
              onClick={() => setChecked(!checked)}
            >
              More
            </button>
          </p>
        ) : (
          <p>
            {item.comment}...{' '}
            <button
              className="btn btn-xs btn-accent"
              onClick={() => setChecked(!checked)}
            >
              Less
            </button>
          </p>
        )}
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
