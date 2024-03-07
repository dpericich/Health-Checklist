// A MarkerList is rendered for each healthMarker 'type'. This will then render a MarkerCard component for each item in the list.

'use client'
import styles from './markers.module.css'
import MarkerCard from './MarkerCard'

const MarkerList = ({ data, ageKey }: any) => {
  return (
    <div className="bg-white shadow-inner shadow-zinc-400 rounded-md flex flex-col gap-2 p-2 w-[100%] my-2">
      <p className="p-2 font-sans">{data.overview}</p>
      <div className="">
        {data.markers.map((item, i) => {
          return (
            <div key={i}>
              <MarkerCard item={item} ageKey={ageKey} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MarkerList
