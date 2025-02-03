'use client';
import { useSidebar } from '@/context/SidebarContext';
import Logo from '../Logo';
import Button from '../Button';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`bg-white border-2 border-primary fixed top-0 z-10 flex h-full w-full flex-col gap-10 px-5 pb-5 pt-9 transition-all duration-500 sm:hidden sm:h-screen ${
        isOpen ? 'visible right-0' : 'invisible -right-[100%] sm:visible'
      }`}
    >
      <div className="flex items-center justify-between border-b border-primary/20 pb-9">
        <Logo />
        <Button onClick={toggleSidebar} isAlternate>
          Close
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Button isAlternate>Mindset Moment</Button>
        <Button>Sign up to our waitlist</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
