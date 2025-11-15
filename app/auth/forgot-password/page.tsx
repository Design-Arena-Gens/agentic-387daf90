"use client";
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

export const dynamic = 'force-dynamic';

export default function ForgotPassword() {
  const router = useRouter();
  const [role, setRole] = useState<any>('patient');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const r = new URLSearchParams(window.location.search).get('role') as any;
      if (r) setRole(r);
    }
  }, []);
  const [email, setEmail] = useState('');

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/auth/reset?role=${role}`);
  }

  return (
    <Suspense fallback={<p>Loading?</p>}>
      <main>
        <h1 className="text-2xl font-semibold mb-6">Forgot password</h1>
        <form onSubmit={handleSend} className="space-y-4">
          <input aria-label="Email" type="email" placeholder="Registered email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <button className="btn btn-primary w-full" disabled={!email}>Send reset link</button>
        </form>
      </main>
    </Suspense>
  );
}
