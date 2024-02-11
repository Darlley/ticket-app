import { NextResponse } from 'next/server';
import Ticket from '../(models)/Ticket';

export async function GET(request) {
  return NextResponse.json({message: "ok"})
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("data", data)
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
        message: 'ERROR',
        error,
      },
      {
        status: 500,
      }
    );
  } finally {
    console.log(process.env.MONGODB_URI)
  }
}
