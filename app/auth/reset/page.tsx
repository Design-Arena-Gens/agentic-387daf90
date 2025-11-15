"use client";
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

export const dynamic = 'force-dynamic';

export default function ResetPassword() {
  const router = useRouter();
  const [role, setRole] = useState<any>('patient');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const r = new URLSearchParams(window.location.search).get('role') as any;
      if (r) setRole(r);
    }
  }, []);
  const [password, setPassword] = useState('');

  function handleSet(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/auth/login?role=${role}`);
  }

  return (
    <Suspense fallback={<p>Loading?</p>}>
      <main>
        <h1 className="text-2xl font-semibold mb-6">Set new password</h1>
        <form onSubmit={handleSet} className="space-y-4">
          <input aria-label="New password" type="password" placeholder="New password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button className="btn btn-primary w-full" disabled={password.length < 6}>Save and continue</button>
        </form>
      </main>
    </Suspense>
  );
}
