import TicketCard from './(components)/TicketCard'

export default function Home() {
  return (
    <div className='grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-2'>
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  )
}
