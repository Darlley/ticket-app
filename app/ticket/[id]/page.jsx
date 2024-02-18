import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {

  const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: 'no-store'
  })
  if(!response.ok){
    throw new Error('Failed to get ticket.')
  }

  return response.json()
}

export default async function TicketPage({ params }) {
  const EDIT_MODE = params.id !== 'new' ? true : false;
  let updateTicketData = {};

  if (EDIT_MODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket
  } else {
    updateTicketData = {
      _id: 'new'
    }
  }

  return <TicketForm ticket={updateTicketData} EDIT_MODE={EDIT_MODE} />;
}
