async function getBookings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/bookings`, { cache: 'no-store' });
  return res.json();
}

export default async function Appointments() {
  const data = await getBookings();
  return (
    <main>
      <h2 className="text-xl font-semibold mb-4">My appointments</h2>
      <ul className="space-y-3">
        {data.map((b: any) => (
          <li key={b.id} className="card">
            <div className="card-body">
              <div className="font-medium">{b.doctor.name}</div>
              <div className="text-gray-600 text-sm">{b.doctor.specialty} ? {b.slot}</div>
              <div className="text-sm">Status: <strong>{b.status}</strong></div>
            </div>
          </li>
        ))}
        {data.length === 0 && <li className="text-gray-600">No bookings yet</li>}
      </ul>
    </main>
  );
}
