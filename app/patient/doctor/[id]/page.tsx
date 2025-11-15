import Link from 'next/link';

async function getDoctor(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/doctors/${id}`, { cache: 'no-store' });
  return res.json();
}

export default async function DoctorProfile({ params }: { params: { id: string } }) {
  const d = await getDoctor(params.id);
  return (
    <main className="space-y-4">
      <div className="card">
        <div className="card-body">
          <h2 className="text-xl font-semibold">{d.name}</h2>
          <p className="text-gray-600">{d.specialty} ? {d.city} ? {d.languages.join(', ')}</p>
          <p className="mt-2 text-sm">{d.bio}</p>
          <div className="mt-4 flex items-center justify-between">
            <div>Consultation fee: <strong>?{d.fee}</strong></div>
            <Link href={`/patient/book/${d.id}/slots`} className="btn btn-primary" aria-label="Book appointment">Book</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
