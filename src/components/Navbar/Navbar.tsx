'use client';
import Button, { ButtonLink } from '../Button';
import Logo from '../Logo';
import { useSidebar } from '@/context/SidebarContext';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="w-full border-b border-primary/20">
      <nav className="w-full max-w-[1120px] mx-auto justify-between flex items-center py-[18px] px-xs sm:px-sm md:px-md md:py-sm lg:px-lg">
        <Logo />

        <Button
          onClick={toggleSidebar}
          className="sm:hidden bg-inherit text-black"
        >
          Menu
        </Button>

        <nav className="hidden sm:flex gap-5">
          <Button isAlternate>Mindset Moment</Button>
          <ButtonLink href="/#waitlist">Sign up to our waitlist</ButtonLink>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
