import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/context/SidebarContext';
import Sidebar from '@/components/Sidebar';

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
      <body className={roboto.className}>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
