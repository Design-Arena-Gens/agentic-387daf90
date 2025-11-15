export default function DoctorDashboard() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Doctor dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card"><div className="card-body"><h3 className="font-medium">Today</h3><p className="text-gray-600">No appointments</p></div></div>
        <div className="card"><div className="card-body"><h3 className="font-medium">Earnings</h3><p className="text-gray-600">?</p></div></div>
      </div>
    </main>
  );
}
