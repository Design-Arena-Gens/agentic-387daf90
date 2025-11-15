import Link from 'next/link';

async function getSlots(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/doctors/${id}/slots`, { cache: 'no-store' });
  return res.json();
}

export default async function SlotSelection({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getSlots(id);
  return (
    <main>
      <h2 className="text-xl font-semibold mb-4">Select a slot</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {data.slots.map((s: string) => (
          <Link key={s} href={`/patient/book/${id}/payment?slot=${encodeURIComponent(s)}`} className="btn btn-outline" aria-label={`Choose slot ${s}`}>
            {s}
          </Link>
        ))}
      </div>
    </main>
  );
}
