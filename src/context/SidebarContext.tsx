'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const SidebarContext = createContext<
  { isOpen: boolean; toggleSidebar: () => void } | undefined
>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error('useSidebar must be used within SidebarProvider');
  return context;
}
