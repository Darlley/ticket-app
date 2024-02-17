import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    await Ticket.create(data);

    return NextResponse.json(
      {
        message: 'Created Ticket',
      },
      {
        status: 201,
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

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json(
      {
        tickets
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
