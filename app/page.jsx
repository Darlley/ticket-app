import TicketCard from './(components)/TicketCard';

async function getTickets() {
  try {
    const response = await fetch('http://localhost:3000/api', {
      cache: 'no-store',
    });

    return response.json();
  } catch (error) {
    console.log('Failed to get tickets ', error);
  }
}

export default async function Home() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((category, index) => (
            <div className="mb-4" key={index}>
              <h2 className="text-gray-400">{category}</h2>

              <div className="grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-2">
                {tickets
                  .filter((ticket) => ticket.category === category)
                  .map((filteredTicket) => (
                    <TicketCard key={filteredTicket._id} ticket={filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
