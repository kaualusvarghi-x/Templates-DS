import type { Metadata } from 'next';
import Script from 'next/script';
import '@/app/globals.css';
import '@/app/app-shell.css';

export const metadata: Metadata = {
  title: 'Xvia Design System — Next SSR',
  description: 'Host Next.js para validar Web Components com SSR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
        <link rel="stylesheet" href="http://localhost:4173/xvia-ds.css" />
      </head>
      <body>
        {children}
        <Script src="http://localhost:4173/xvia-ds.umd.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
