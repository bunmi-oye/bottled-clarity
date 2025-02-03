import Image from 'next/image';
import Heading from '../Heading';
import { StepType } from './Step.type';

const Step = ({ num, title, content, image }: StepType) => {
  const shouldFlipPosition = num % 2 === 0;

  return (
    <div
      className={`border-2 border-[#2A3D524D]/20 rounded-[4px] overflow-hidden w-full flex justify-between gap-4 flex-col-reverse md:border-none md:rounded-none md:flex-row md:items-center md:gap-8 xl:gap-[116px] ${
        shouldFlipPosition ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="p-4 flex flex-col gap-4">
        <Heading
          isSubheading
          className="border-[3px] relative w-12 h-12 rounded-full self-start border-primary/[12%]"
        >
          <span className="absolute bottom-1.5 left-1/2 -ml-6 w-12 text-primary text-center">
            {num}
          </span>
        </Heading>
        <Heading isSubheading>{title}</Heading>
        <p className="text-primary/85">{content}</p>
      </div>
      <Image
        src={image}
        alt="step"
        width={548}
        height={440}
        className="w-full h-auto md:w-1/2 md:h-full lg:h-auto lg:w-[548px] aspect-[548/440] md:border-2 md:border-[#2A3D524D]/20 md:rounded-[12px] object-cover"
      />
    </div>
  );
};

export default Step;
