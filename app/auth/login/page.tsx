"use client";
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';

export const dynamic = 'force-dynamic';

export default function LoginSignup() {
  const router = useRouter();
  const [role, setRoleLocal] = useState<any>('patient');
  const setRole = useAppStore((s) => s.setRole);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const r = new URLSearchParams(window.location.search).get('role') as any;
      if (r) setRoleLocal(r);
    }
  }, []);
  useEffect(() => setRole(role), [role, setRole]);

  const [mode, setMode] = useState<'login'|'signup'>('login');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const canContinue = useMemo(() => {
    if (mode === 'login') return !!(email || phone);
    return !!(email && password);
  }, [mode, email, phone, password]);

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/auth/verify-otp?role=${role}&dest=${encodeURIComponent(email || phone)}`);
  }

  return (
    <Suspense fallback={<p>Loading?</p>}>
      <main aria-labelledby="authTitle">
        <h1 id="authTitle" className="text-2xl font-semibold mb-6">{mode === 'login' ? 'Login' : 'Create account'} ? {role}</h1>
        <form onSubmit={handleContinue} className="space-y-4" aria-describedby="authDesc">
          <p id="authDesc" className="text-gray-600">Continue with email or phone. Google/Apple to be enabled in production.</p>
          <div className="grid gap-3">
            <input aria-label="Email" type="email" placeholder="Email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input aria-label="Phone" type="tel" placeholder="Phone (OTP)" className="input" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            {mode === 'signup' && (
              <input aria-label="Password" type="password" placeholder="Password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} />
            )}
          </div>
          <button className="btn btn-primary w-full" disabled={!canContinue} aria-disabled={!canContinue}>
            Continue
          </button>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <button type="button" onClick={()=>setMode(mode==='login'?'signup':'login')} className="underline">{mode==='login' ? 'New here? Sign up' : 'Have an account? Login'}</button>
            <Link href={`/auth/forgot-password?role=${role}`} className="underline">Forgot password</Link>
          </div>
        </form>
      </main>
    </Suspense>
  );
}
