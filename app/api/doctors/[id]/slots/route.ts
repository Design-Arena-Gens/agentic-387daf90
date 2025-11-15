import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const base = ['09:00', '09:30', '10:00', '11:30', '14:00', '16:00'];
  return NextResponse.json({ doctorId: params.id, slots: base });
}
