import Link from 'next/link';

export default async function PatientHome() {
  return (
    <main className="space-y-6">
      <section className="card">
        <div className="card-body">
          <h2 className="text-lg font-semibold">Welcome to AviCure</h2>
          <p className="text-gray-600">Find doctors, book appointments, and manage your health.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/patient/search" className="btn btn-primary" aria-label="Search doctors and labs">Search doctors & labs</Link>
            <Link href="/patient/appointments" className="btn btn-outline" aria-label="View appointments">My appointments</Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card"><div className="card-body"><h3 className="font-medium">Upcoming</h3><p className="text-gray-600">No upcoming appointments</p></div></div>
        <div className="card"><div className="card-body"><h3 className="font-medium">Prescriptions</h3><p className="text-gray-600">Upload and manage prescriptions</p></div></div>
      </section>
    </main>
  );
}
