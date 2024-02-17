import { NextResponse } from 'next/server';
import Ticket from '@/app/(models)/Ticket';

export async function DELETE(request, { params }) {
  try {
    await Ticket.findByIdAndDelete(params.id);

    return NextResponse.json(
      {
        message: `Ticket id ${params.id} Deleted`,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }
}
