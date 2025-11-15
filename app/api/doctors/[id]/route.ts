import { NextResponse } from 'next/server';
import { doctors } from '@/data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const d = doctors.find((x) => x.id === params.id);
  if (!d) return new NextResponse('Not found', { status: 404 });
  return NextResponse.json(d);
}
