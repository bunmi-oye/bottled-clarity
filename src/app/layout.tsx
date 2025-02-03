import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';

export const metadata: Metadata = {
  title: 'Bottled Clarity',
  description: 'A clearer mind for a clearer world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
