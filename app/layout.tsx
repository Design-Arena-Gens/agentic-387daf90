import './globals.css';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AviCure ? Healthcare Super-App',
  description: 'Patient, Doctor, Lab, Hospital, and Admin panels in one app'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1178f2'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="container-page">
          {children}
        </div>
      </body>
    </html>
  );
}
