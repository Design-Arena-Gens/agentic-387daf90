export default function AdminDashboard() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card"><div className="card-body"><h3 className="font-medium">Users</h3><p className="text-gray-600">?</p></div></div>
        <div className="card"><div className="card-body"><h3 className="font-medium">Doctors</h3><p className="text-gray-600">?</p></div></div>
        <div className="card"><div className="card-body"><h3 className="font-medium">Reports</h3><p className="text-gray-600">?</p></div></div>
      </div>
    </main>
  );
}
