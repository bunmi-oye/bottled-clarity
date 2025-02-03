import { lora } from '@/app/fonts';
import { HeadingType } from './Heading.type';

const Heading = ({
  children,
  isSubheading = false,
  className = '',
}: HeadingType) => {
  return (
    <h1
      className={[
        lora.className,
        `${isSubheading ? 'text-2xl' : 'text-[40px]'} font-medium text-primary`,
        className,
      ].join(' ')}
    >
      {children}
    </h1>
  );
};

export default Heading;
