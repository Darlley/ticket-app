import React from 'react';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

import {format} from 'date-fns'
import pt from 'date-fns/locale/pt'

export default function TicketCard({ticket}) {
  return (
    <div className="flex flex-col bg-card/50 backdrop-blur-md hover:bg-card-hover/50 transition-colors rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket?.priority ?? 1} />
        <div className="flex ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>{ticket?.title ?? ''}</h4>
      <hr className="h-px border-0 bg-page/40 my-2" />
      <p className="whitespace-pre-wrap">
        {ticket?.description ?? ''}
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 justify-between">
        <div className="flex flex-col">
          <p className="my-1">{format(ticket.createdAt, 'dd/mm/yy HH:mm a',{locale: pt})}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="self-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
}
