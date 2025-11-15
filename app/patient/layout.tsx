import Link from 'next/link';
import { ReactNode } from 'react';

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">AviCure ? Patient</h1>
        <nav className="text-sm text-gray-600 flex gap-4">
          <Link href="/patient" className="hover:underline">Home</Link>
          <Link href="/patient/search" className="hover:underline">Search</Link>
          <Link href="/patient/appointments" className="hover:underline">Appointments</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
