"use client";
import Link from 'next/link';
import { useAppStore } from '@/lib/store';

const roles = [
  { key: 'patient', label: 'Patient', href: '/patient' },
  { key: 'doctor', label: 'Doctor', href: '/doctor' },
  { key: 'lab', label: 'Lab', href: '/lab' },
  { key: 'hospital', label: 'Hospital', href: '/hospital' },
  { key: 'admin', label: 'Admin', href: '/admin' },
] as const;

export default function RoleSelection() {
  const setRole = useAppStore((s) => s.setRole);
  return (
    <main aria-labelledby="roleTitle">
      <h1 id="roleTitle" className="text-2xl font-semibold mb-6">Choose your role</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list">
        {roles.map((r) => (
          <Link
            key={r.key}
            href={`/auth/login?role=${r.key}`}
            onClick={() => setRole(r.key as any)}
            className="card focus:outline-none focus:ring-2 focus:ring-primary-600"
            role="listitem"
            aria-label={`Select role ${r.label}`}
          >
            <div className="card-body text-center">
              <div className="text-lg font-medium">{r.label}</div>
              <div className="text-sm text-gray-500 mt-1">Continue as {r.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
