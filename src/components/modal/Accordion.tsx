import AccordionCard from './AccordionCard'

const Accordion = ({ item }: any) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-[90%] mt-4">
        {item.notes.map((item, i) => {
          return <AccordionCard key={i} item={item} />
        })}
      </div>
    </>
  )
}

export default Accordion
