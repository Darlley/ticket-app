import { NextResponse } from 'next/server';
import Ticket from '@/app/(models)/Ticket';

export async function GET(request, { params }) {
  try {
    const {id} = params
    const foundTicket = await Ticket.findOne({ _id: id })

    return NextResponse.json({foundTicket}, {status: 200})
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

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    await Ticket.findByIdAndUpdate(params.id, {
      ...data
    });

    return NextResponse.json(
      {
        message: `Ticket id ${params.id} Updated!`,
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
