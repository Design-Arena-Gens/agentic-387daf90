import { NextResponse } from 'next/server';
import { bookings, doctors } from '@/data';

export async function GET() {
  const data = bookings.map((b) => ({
    ...b,
    doctor: doctors.find((d) => d.id === b.doctorId)!
  }));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.text();
  const parsed = body ? JSON.parse(body) : {};
  const id = 'b_' + Date.now();
  const record = { id, doctorId: parsed.doctorId, slot: parsed.slot, status: 'confirmed' as const };
  bookings.push(record);
  return NextResponse.json(record, { status: 201 });
}
