import React from 'react'

const Accordion = ({ item }: any) => {
  return (
    <div className="flex flex-col gap-3">
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
    </div>
  )
}

export default Accordion
