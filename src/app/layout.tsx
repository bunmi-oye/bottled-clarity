import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/context/SidebarContext';
import Sidebar from '@/components/Sidebar';
import { Toaster } from 'react-hot-toast';

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
        <Toaster />
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
