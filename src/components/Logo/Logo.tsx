import Image from 'next/image';
import { LogoType } from './Logo.type';
import Link from 'next/link';

/**
 * A component that renders the logo.
 *
 * @prop {number} [width=84.76] - The width of the logo.
 *
 * @example
 * <Logo />
 */
const Logo = ({ width = 84.76 }: LogoType) => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={width} height={0} />
    </Link>
  );
};

export default Logo;
