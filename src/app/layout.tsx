import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import Navbar from '@/layout/Navbar';
import { SidebarProvider } from '@/context/SidebarContext';
import Sidebar from '@/layout/Sidebar';
import { Toaster } from 'react-hot-toast';
import Footer from '@/layout/Footer';

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
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
