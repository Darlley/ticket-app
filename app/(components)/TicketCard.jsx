import React from 'react';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

export default function TicketCard() {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="flex ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page/40 my-2" />
      <p className="whitespace-pre-wrap">
        this is the ticket description. Please do this ticket!
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 justify-between">
        <div className="flex flex-col">
          <p className="my-1">08:31/23 10:43px</p>
          <ProgressDisplay />
        </div>
        <div className="self-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
}
