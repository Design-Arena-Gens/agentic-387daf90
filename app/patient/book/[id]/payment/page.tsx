"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/lib/utils';

export default function PaymentPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const slot = useSearchParams().get('slot') || '';
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/doctors/${params.id}`).then(r=>r.json()).then(setDoctor);
  }, [params.id]);

  async function handlePay() {
    setLoading(true);
    await new Promise((r)=>setTimeout(r, 1200));
    await fetch('/api/bookings', { method: 'POST', body: JSON.stringify({ doctorId: params.id, slot }) });
    router.replace('/patient/appointments');
  }

  if (!doctor) return <p>Loading...</p>;
  return (
    <main className="space-y-4">
      <h2 className="text-xl font-semibold">Payment</h2>
      <div className="card"><div className="card-body">
        <div className="font-medium">{doctor.name}</div>
        <div className="text-gray-600 text-sm">{doctor.specialty}</div>
        <div className="mt-2">Selected slot: <strong>{slot}</strong></div>
        <div className="mt-2">Amount: <strong>{formatCurrency(doctor.fee)}</strong></div>
      </div></div>
      <button onClick={handlePay} className="btn btn-primary w-full" disabled={loading || !slot} aria-busy={loading} aria-disabled={loading || !slot}>
        {loading ? 'Processing?' : 'Pay securely (PayU sandbox)'}
      </button>
    </main>
  );
}
