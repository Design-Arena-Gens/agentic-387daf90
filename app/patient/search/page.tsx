import Link from 'next/link';
import { Suspense } from 'react';

async function getDoctors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/doctors`, { cache: 'no-store' });
  return res.json();
}

export default async function Search() {
  const doctors = await getDoctors();
  return (
    <main>
      <h2 className="text-xl font-semibold mb-4">Search</h2>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input aria-label="Specialty" placeholder="Specialty" className="input" />
        <input aria-label="City" placeholder="City" className="input" />
        <select aria-label="Language" className="input">
          <option>Any language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <ul className="space-y-3">
          {doctors.map((d: any) => (
            <li key={d.id} className="card">
              <div className="card-body flex items-center justify-between">
                <div>
                  <div className="font-medium">{d.name}</div>
                  <div className="text-gray-600 text-sm">{d.specialty} ? {d.city} ? {d.languages.join(', ')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-700">?{d.fee}</div>
                  <Link href={`/patient/doctor/${d.id}`} className="btn btn-primary" aria-label={`View ${d.name}`}>View</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}
