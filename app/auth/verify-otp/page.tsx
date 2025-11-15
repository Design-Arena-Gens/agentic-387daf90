"use client";
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';

export const dynamic = 'force-dynamic';

export default function VerifyOtp() {
  const router = useRouter();
  const [role, setRole] = useState<any>('patient');
  const [dest, setDest] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const qs = new URLSearchParams(window.location.search);
      setRole((qs.get('role') as any) || 'patient');
      setDest(qs.get('dest') || '');
    }
  }, []);
  const setUser = useAppStore((s) => s.setUser);

  const [otp, setOtp] = useState('');

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    const profile = { id: 'u_'+Date.now(), name: 'AviCure User', role, firstTime: true } as const;
    localStorage.setItem('avicure_user', JSON.stringify(profile));
    setUser(profile as any);
    router.push('/auth/profile-setup');
  }

  return (
    <Suspense fallback={<p>Loading?</p>}>
      <main>
        <h1 className="text-2xl font-semibold mb-6">Verify OTP</h1>
        <p className="text-gray-600 mb-4">We sent a code to <strong>{dest}</strong></p>
        <form onSubmit={handleVerify} className="space-y-4">
          <input aria-label="OTP code" inputMode="numeric" pattern="[0-9]*" maxLength={6} placeholder="Enter 6-digit code" className="input" value={otp} onChange={(e)=>setOtp(e.target.value)} />
          <button className="btn btn-primary w-full" disabled={otp.length<4}>Verify</button>
        </form>
      </main>
    </Suspense>
  );
}
