export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  languages: string[];
  fee: number;
  bio: string;
};

export const doctors: Doctor[] = [
  { id: 'd1', name: 'Dr. A. Sharma', specialty: 'Cardiologist', city: 'Mumbai', languages: ['English', 'Hindi'], fee: 800, bio: '15+ years in interventional cardiology.' },
  { id: 'd2', name: 'Dr. R. Iyer', specialty: 'Dermatologist', city: 'Bengaluru', languages: ['English', 'Kannada'], fee: 600, bio: 'Specialist in acne and cosmetic dermatology.' },
  { id: 'd3', name: 'Dr. P. Singh', specialty: 'Pediatrician', city: 'Delhi', languages: ['English', 'Hindi'], fee: 500, bio: 'Child health and vaccination expert.' }
];

export type Booking = {
  id: string;
  doctorId: string;
  slot: string;
  status: 'confirmed' | 'cancelled';
};

export const bookings: Booking[] = [];
